"use client";
import { columns as defaultColumns, produkts } from "@/constants";
import { studentData } from "@/constants/data";
import { Table, Button } from "antd";
import React, { useState } from "react";
import AddStudents from "./addstudents/page";
import { useGlobalStor } from "@/store/my-stor-zustand";

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

        <AddStudents />
      </div>

      <div className="w-full">
        <Table dataSource={state.produkts}  columns={produkts} rowKey="id" />
      </div>
    </div>
  );
}

export default Students;
