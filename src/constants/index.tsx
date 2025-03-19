import {
  CatigoiiesType,
  groupsTypes,
  ProduktsType,
  studentTypes,
} from "@/types";
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
  {
    title: "gruh nomi",
    dataIndex: "gruh1",
    key: "gruh1",
  },
];
export const grups: ColumnsType<groupsTypes> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "gruh nomi",
    dataIndex: "gruh1",
    key: "gruh1",
  },
];

export const produkts: ColumnsType<ProduktsType> = [
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
  {
    title: "gruh nomi",
    dataIndex: "gruh1",
    key: "gruh1",
  },
  {
    title: "image",
    dataIndex: "image",
    key: "image",
    render:(image)=>{
      return (
          <div>
              <img width={40} src={image} alt="" />
          </div>
      )
  }
  },
];
export const catigories: ColumnsType<CatigoiiesType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "gruh nomi",
    dataIndex: "gruh1",
    key: "gruh1",
  },
];
