"use client";
import { columns as defaultColumns, grups } from "@/constants";
import { studentData } from "@/constants/data";
import { Table, Button } from "antd";
import React, { useState } from "react";
import { useGlobalStor } from "@/store/my-stor-zustand";
import { group } from "console";
import AddGrupps from "../../components/AddGrupps";

function Grups() {
  const state = useGlobalStor();

  const handleDelete = (id: any) => {
    const deletee = state.students.filter((item) => item.id !== id);
    useGlobalStor.setState({
      groups: deletee,
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
        <h1 className="text-xl font-semibold">📚 Grups</h1>

        <AddGrupps />
      </div>

      <div className="w-full">
        <Table dataSource={state.groups}  columns={grups} rowKey="id" />
      </div>
    </div>
  );
}

export default Grups;
