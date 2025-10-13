import { Table } from "antd";
import Box from "../components/global/Box";

const PaymentsPage = () => {
  const dataSource = [
    {
      key: "1",
      date: "01.01.2025",
      description: "Monthly menmbership",
      amount: "300 TMT",
    },
    {
      key: "2",
      date: "01.01.2025",
      description: "Monthly menmbership",
      amount: "300 TMT",
    },
    {
      key: "3",
      date: "01.01.2025",
      description: "Monthly menmbership",
      amount: "300 TMT",
    },
    {
      key: "4",
      date: "01.01.2025",
      description: "Monthly menmbership",
      amount: "300 TMT",
    },
  ];

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
  ];
  return (
    <div className="w-full flex flex-col gap-4">
      <Box className="flex items-center justify-between gap-4">
        <h3 className="text-headerColor text-lg md:text-xl font-semibold">
          Payments
        </h3>
      </Box>
      <Box className="w-full">
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={{
            position: ["bottomCenter"],
          }}
          footer={() => ""}
        />
      </Box>
    </div>
  );
};

export default PaymentsPage;
