import { Calendar, Select, Spin, Badge, Modal, Typography } from "antd";
import Box from "../components/global/Box";
import { useGetClientTariffs, useGetSchedule } from "../hooks/useClientApi";
import type { SelectOption } from "../interfaces/global.interface";
import { useEffect, useState } from "react";
import type { Tariff } from "../interfaces/tariff.interface";
import { useSearchParams } from "react-router-dom";
import dayjs from "dayjs";
import type { Attendance } from "../interfaces/schedule.interface";
import { useAppStore } from "../stores/store";

const { Text } = Typography;

const SchedulePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tariffId = searchParams.get("tariffId") || "";
  const language = useAppStore((state) => state.language);

  // states
  const [tariffOptions, setTariffOptions] = useState<SelectOption[]>([]);
  const [scheduleByDate, setScheduleByDate] = useState<
    Record<string, Attendance[]>
  >({});
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedAttendances, setSelectedAttendances] = useState<Attendance[]>(
    []
  );
  const [activeDates, setActiveDates] = useState<Set<string>>(new Set());

  // queries
  const { data: schedule, isLoading: scheduleLoading } =
    useGetSchedule(tariffId);
  const { data: getClientTariffs, isLoading: tariffsLoading } =
    useGetClientTariffs();

  // prepare tariff options
  useEffect(() => {
    if (getClientTariffs?.data?.data) {
      const options: SelectOption[] = getClientTariffs.data.data.map(
        (tariff: Tariff) => ({
          label: tariff.tariff.name,
          value: String(tariff.tariff.id),
        })
      );
      setTariffOptions(options);
    }
  }, [getClientTariffs]);

  // set default tariff
  useEffect(() => {
    if (tariffOptions.length > 0 && !tariffId) {
      setSearchParams({ tariffId: tariffOptions[0].value });
    }
  }, [tariffOptions, tariffId, setSearchParams]);

  // group attendances by date
  useEffect(() => {
    if (schedule?.data?.data?.attendances) {
      const map: Record<string, Attendance[]> = {};
      schedule.data.data.attendances.forEach((item) => {
        if (!map[item.date]) map[item.date] = [];
        map[item.date].push(item);
      });
      setScheduleByDate(map);
    }
  }, [schedule]);

  // generate active date range (from_date → to_date)
  useEffect(() => {
    if (schedule?.data?.data?.clientTariff) {
      const { from_date, to_date } = schedule.data.data.clientTariff;
      const start = dayjs(from_date);
      const end = dayjs(to_date);

      const active = new Set<string>();
      let current = start.clone();

      while (current.isBefore(end) || current.isSame(end, "day")) {
        active.add(current.format("YYYY-MM-DD"));
        current = current.add(1, "day");
      }

      setActiveDates(active);
    }
  }, [schedule]);

  const handleTariffChange = (id: string) => {
    setSearchParams({ tariffId: id });
  };

  const handleDateClick = (value: dayjs.Dayjs) => {
    const dateStr = value.format("YYYY-MM-DD");
    const attendances = scheduleByDate[dateStr] || [];
    if (attendances.length > 0) {
      setSelectedDate(dateStr);
      setSelectedAttendances(attendances);
      setModalVisible(true);
    }
  };

  // ✅ Updated calendar cell render
  const dateCellRender = (value: dayjs.Dayjs) => {
    const dateStr = value.format("YYYY-MM-DD");
    const listData = scheduleByDate[dateStr] || [];
    const isActive = activeDates.has(dateStr);

    return (
      <div
        className={`rounded-md p-1 ${
          isActive ? "bg-primary/10 border border-primary" : ""
        }`}
      >
        {listData.length > 0 ? (
          <ul className="space-y-1">
            {listData.map((item) => (
              <li key={item.id} className="flex flex-col gap-1">
                <Badge status="success" text={item.came_at || ""} />
                {item.gone_at && (
                  <Badge status="error" text={item.gone_at || ""} />
                )}
              </li>
            ))}
          </ul>
        ) : (
          isActive && <span className="text-primary text-xs font-medium"></span>
        )}
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <Box className="flex items-center justify-between gap-4">
        <h3 className="text-headerColor text-lg md:text-xl font-semibold">
          {language === "tm" ? "Gatnaw tertibi" : "Расписание"}
        </h3>
        <div className="flex items-center gap-4">
          <Select
            placeholder="Select Tariff"
            className="w-40 md:w-60"
            options={tariffOptions}
            loading={tariffsLoading}
            value={tariffId}
            onChange={handleTariffChange}
          />
        </div>
      </Box>

      <Box className="w-full">
        {scheduleLoading ? (
          <div className="w-full min-h-[200px] flex items-center justify-center">
            <Spin size="large" />
          </div>
        ) : (
          <>
            <p className="text-textColor text-sm md:text-base font-semibold text-end mb-4">
              {language === "tm" ? "Elýeterli : " : "Доступный : "}
              {schedule?.data?.data.clientTariff.available_strikes}
            </p>
            <Calendar cellRender={dateCellRender} onSelect={handleDateClick} />
          </>
        )}
      </Box>

      <Modal
        title={`${dayjs(selectedDate).format("DD-MM-YYYY")}`}
        open={modalVisible}
        footer={null}
        onCancel={() => setModalVisible(false)}
        centered
      >
        {selectedAttendances.map((item) => (
          <div key={item.id} className="mb-3">
            <Text strong>ID : </Text> <Text>{item.client_id}</Text>
            <br />
            <Text strong>
              {language === "tm" ? "Gelen wagty : " : "Пришел в : "}
            </Text>
            <Badge status="success" text={item.came_at} />
            <br />
            <Text strong>
              {language === "tm" ? "Giden wagty : " : "Ушел в : "}
            </Text>
            <Badge status="error" text={item.gone_at || "-"} />
            <br />
            <Text strong>
              {language === "tm" ? "Jemi sagat : " : "Всего часов : "}
            </Text>
            <Text>{item.total_hours}</Text>
            <br />
          </div>
        ))}
      </Modal>
    </div>
  );
};

export default SchedulePage;
