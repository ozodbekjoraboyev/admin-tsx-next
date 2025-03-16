"use client";
import { Table } from "antd";
import React from "react";

// Foydalanuvchilar ma'lumotlari
const users = [
  { id: 1, name: "Ali", age: 22, group: "A" },
  { id: 2, name: "Zaynab", age: 20, group: "B" },
  { id: 3, name: "Hasan", age: 24, group: "A" },
  { id: 4, name: "Madina", age: 23, group: "C" },
  { id: 5, name: "Javohir", age: 21, group: "B" },
];

// Ustunlar
const columns = [
  { title: "ID", dataIndex: "id", key: "id" },
  { title: "Ism", dataIndex: "name", key: "name" },
  { title: "Yosh", dataIndex: "age", key: "age" },
  { title: "Guruh", dataIndex: "group", key: "group" },
];

// Guruhlash funksiyasi
const groupBy = (arr, key) =>
  arr.reduce((result, item) => {
    (result[item[key]] = result[item[key]] || []).push(item);
    return result;
  }, {});

// Foydalanuvchilarni guruhlash
const groupedUsers = groupBy(users, "group");

function StudentGroups() {
  return (
    <div className="p-4 absolute pl-[220px] pr-10 w-full container m-auto">
      <h1 className="text-xl font-bold">👥 Talabalar Guruhlari</h1>
      {Object.keys(groupedUsers).map((group) => (
        <div key={group} className="mb-6">
          <h2 className="text-lg font-semibold bg-gray-200 p-2 rounded">
            🏫 {group}-Guruh
          </h2>
          <Table
            dataSource={groupedUsers[group]}
            columns={columns}
            rowKey="id"
            pagination={false}
            bordered
          />
        </div>
      ))}
    </div>
  );
}

export default StudentGroups;
