import { Table } from "antd";
import Box from "../components/global/Box";
import { useGetPayments } from "../hooks/useClientApi";
import { useSearchParams } from "react-router-dom";
import dayjs from "dayjs";
import { useAppStore } from "../stores/store";
import { useEffect, useState } from "react";
import type { Payment, PaymentFilters } from "../interfaces/payment.interface";

const PaymentsPage = () => {
  const language = useAppStore((state) => state.language);

  const [searchParams, setSearchParams] = useSearchParams();
  // states
  const [filters, setFilters] = useState<PaymentFilters>({
    page: searchParams.get("page") || 1,
    limit: searchParams.get("limit") || 10,
  });

  useEffect(() => {
    const params: Record<string, string> = {};
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== "" && value !== undefined && value !== null) {
        params[key] = value.toString();
      }
    });

    setSearchParams(params);
  }, [filters, setSearchParams]);

  // queries
  const { data: payments, isLoading } = useGetPayments(filters);
  console.log(payments);

  const columns = [
    {
      title: language === "tm" ? "Sene" : "Дата",
      dataIndex: "date",
      key: "date",
      render: (date: string) => dayjs(date).format("DD.MM.YYYY"),
    },
    {
      title: language === "tm" ? "Düşündiriş" : "Описание",
      dataIndex: "description",
      key: "description",
    },
    {
      title: language === "tm" ? "Bahasy" : "Цена",
      dataIndex: "price",
      key: "price",
      render: (price: string, record: Payment) => (
        <span
          className={
            record.type === "decreasing balance"
              ? "text-red-500"
              : "text-green-600"
          }
        >
          {record.type === "decreasing balance" ? "-" : "+"} {price} TMT
        </span>
      ),
    },
  ];

  return (
    <div className="w-full flex flex-col gap-4">
      <Box className="flex items-center justify-between gap-4">
        <h3 className="text-headerColor text-lg md:text-xl font-semibold">
          {language === "tm" ? "Tölegler" : "Платежи"}
        </h3>
        {payments?.data.user && (
          <div className="text-textColor text-sm md:text-base font-semibold">
            {language === "tm" ? "Balans" : "Баланс"} :{" "}
            <span
              className={
                Number(payments.data.user.balance) < 0
                  ? "text-red-500"
                  : "text-green-600"
              }
            >
              {payments.data.user.balance} TMT
            </span>
          </div>
        )}
      </Box>

      <Box className="w-full">
        <Table
          loading={isLoading}
          dataSource={Object.values(payments?.data?.data?.data || {})}
          columns={columns}
          pagination={{
            position: ["bottomCenter"],
            current: Number(filters.page),
            pageSize: Number(filters.limit),
            total: payments?.data?.data.total || 0,
            showSizeChanger: true,
            onChange: (page, limit) => {
              setFilters((prev) => ({
                ...prev,
                page: page.toString(),
                limit: limit.toString(),
              }));
            },
          }}
          footer={() => ""}
        />
      </Box>
    </div>
  );
};

export default PaymentsPage;
