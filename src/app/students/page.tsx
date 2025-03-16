"use client";
import { columns } from "@/constants";
import { studentData } from "@/constants/data";
import { Button, Drawer, Form, Input, Radio, Select, Space, Table } from "antd";
import React, { useState } from "react";
import AddStudents from "./addstudents/page";

function Students() {
  const [students, setStudents] = useState(studentData);

  return (
    <div className="absolute pl-[220px] pr-10 w-full container m-auto">
      <div className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg">
        <h1 className="text-xl font-semibold">📚 Students</h1>

        <AddStudents setStudents={setStudents} />
      </div>

      <div className=" w-full">
         <Table dataSource={students} columns={columns} rowKey="id" />
      </div>
    </div>
  );
}

export default Students;

