"use client";
import AddProdukt from "@/components/AddProdukt";
import { columns as defaultColumns, produkts } from "@/constants";
import { useGlobalStor } from "@/store/my-stor-zustand";
import { Button, Table } from "antd";

function Students() {
  const state = useGlobalStor();

  const handleDelete = (id: any) => {
    const deletee = state.students.filter((item) => item.id !== id);
    useGlobalStor.setState({
      students: deletee,
    });
  };

  const columns = [
    ...defaultColumns,
    {
      title: "Action",
      key: "action",
      render: (record: any) => (
        <Button
          type="primary"
          className=" z-50 absolute"
          danger
          onClick={() => handleDelete(record.id)}
        >
          O‘chirish
        </Button>
      ),
    },
  ];

  return (
    <div className="absolute pl-[220px] pr-10 w-full container m-auto">
      <div className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg">
        <h1 className="text-xl font-semibold">🛒 Produkts</h1>

        <AddProdukt />
      </div>

      <div className="w-full">
        <Table dataSource={state.produkts} columns={produkts} rowKey="id" />
      </div>
    </div>
  );
}

export default Students;
