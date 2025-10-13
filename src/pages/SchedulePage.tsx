import { Calendar, Select, Spin, Badge, Modal, Typography } from "antd";
import Box from "../components/global/Box";
import { useGetClientTariffs, useGetSchedule } from "../hooks/useClientApi";
import type { SelectOption } from "../interfaces/global.interface";
import { useEffect, useState } from "react";
import type { Tariff } from "../interfaces/tariff.interface";
import { useSearchParams } from "react-router-dom";
import dayjs from "dayjs";
import type { Attendance } from "../interfaces/schedule.interface";

const { Text } = Typography;

const SchedulePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tariffId = searchParams.get("tariffId") || "";

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

  // queries
  const { data: schedule, isLoading: scheduleLoading } =
    useGetSchedule(tariffId);
  const { data: getCilentTariffs, isLoading: tariffsLoading } =
    useGetClientTariffs();
  console.log(schedule);
  // functions
  useEffect(() => {
    if (getCilentTariffs?.data.data) {
      const options: SelectOption[] = getCilentTariffs.data.data.map(
        (tariff: Tariff) => ({
          label: tariff.tariff.name,
          value: String(tariff.tariff.id),
        })
      );
      setTariffOptions(options);
    }
  }, [getCilentTariffs]);

  useEffect(() => {
    if (tariffOptions.length > 0 && !tariffId) {
      setSearchParams({ tariffId: tariffOptions[0].value });
    }
  }, [tariffOptions, tariffId, setSearchParams]);

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

  const dateCellRender = (value: dayjs.Dayjs) => {
    const dateStr = value.format("YYYY-MM-DD");
    const listData = scheduleByDate[dateStr] || [];

    return (
      <ul className="p-1 space-y-1">
        {listData.map((item) => (
          <li key={item.id} className="flex flex-col gap-1">
            <Badge status="success" text={item.came_at || ""} />
            {item.gone_at && <Badge status="error" text={item.gone_at || ""} />}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <Box className="flex items-center justify-between gap-4">
        <h3 className="text-headerColor text-lg md:text-xl font-semibold">
          Payments
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
          <Calendar cellRender={dateCellRender} onSelect={handleDateClick} />
        )}
      </Box>

      <Modal
        title={`Attendance for ${dayjs(selectedDate).format("DD-MM-YYYY")}`}
        open={modalVisible}
        footer={null}
        onCancel={() => setModalVisible(false)}
        centered
      >
        {selectedAttendances.map((item) => (
          <div key={item.id} className="mb-3">
            <Text strong>Client ID:</Text> <Text>{item.client_id}</Text>
            <br />
            <Text strong>Came At:</Text>{" "}
            <Badge
              status="success"
              text={item.came_at.replace("Gelen wagty :", "").trim()}
            />
            <br />
            <Text strong>Gone At:</Text>{" "}
            <Badge
              status={item.gone_at ? "error" : "warning"}
              text={item.gone_at?.replace("Giden wagty :", "").trim() || "-"}
            />
            <br />
            <Text strong>Total Hours:</Text> <Text>{item.total_hours}</Text>
            <br />
          </div>
        ))}
      </Modal>
    </div>
  );
};

export default SchedulePage;
