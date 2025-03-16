import { studentTypes } from "@/types";
import { ColumnsType } from "antd/es/table";

export const columns: ColumnsType<studentTypes> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Job",
      dataIndex: "job",
      key: "job",
    },
  ];