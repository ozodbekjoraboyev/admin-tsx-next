"use client";
import { catigories, columns as defaultColumns, grups } from "@/constants";
import { Table, Button } from "antd";
import React, { useState } from "react";
import AddStudents from "../../components/AddCatigories";
import { useGlobalStor } from "@/store/my-stor-zustand";
import { group } from "console";
import AddCatigories from "../../components/AddCatigories";

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

        <AddCatigories />
      </div>

      <div className="w-full">
        <Table dataSource={state.categories}  columns={catigories} rowKey="id" />
      </div>
    </div>
  );
}

export default Grups;
