"use client";
import AddOrders from "@/components/AddOrders";
import { columns as defaultColumns, orders } from "@/constants";
import { useGlobalStor } from "@/store/my-stor-zustand";
import { Button, Select, Table } from "antd";
import { useState } from "react";

function Students() {
  const state = useGlobalStor();
  const [leng, setLeng] = useState("en");

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
  const translet: any = {
    uz: {
      orders: "buyurtmlar",
      produkt: "Mahsulot",
    },
    en: {
      orders: "zakazi",
      produkt: "Produkt",
    },
    ru: {
      orders: "Orders",
      produkt: "produkt",
    },
  };

  return (
    <div className="absolute pl-[220px] pr-10 w-full container m-auto">
      <div className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg">
        <h1 className="text-xl font-semibold">🛒 orders</h1>
        {translet[leng].orders}
        <Select
          value={leng}
          onChange={(values) => {
            setLeng(values);
          }}
          options={[
            {
              label: "O'z",
              value: "uz",
            },
            {
              label: "En",
              value: "en",
            },
            {
              label: "Ru",
              value: "ru",
            },
          ]}
          className=" w-20 absolute z-50 "
          placeholder="tilni tanla"
        />
        <AddOrders />
      </div>

      <div className="w-full">
        <Table dataSource={state.orders} columns={orders} rowKey="id" />
      </div>
    </div>
  );
}

export default Students;
