import {
  CatigoiiesType,
  groupsTypes,
  OrdersType,
  ProduktsType,
  studentTypes,
} from "@/types";
import { ColumnsType } from "antd/es/table";

export const columns: ColumnsType<studentTypes> = [
  {
    title: "mahsulot nomi",
    dataIndex: "name",
    key: "name",
  },

  {
    title: "grups",
    dataIndex: "gruh1",
    key: "id",
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
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },

  {
    title: "soni",
    dataIndex: "price   ",
    key: "price",
  },
];
export const catigories: ColumnsType<CatigoiiesType> = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
];

export const orders: ColumnsType<OrdersType> = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Mijoz",
    dataIndex: "students_id",
    key: "students_id",
  },
  {
    title: "Mahsulot",
    dataIndex: "product_id",
    key: "product_id",
  },

  {
    title: "Soni",
    dataIndex: "count",
    key: "count",
  },
  {
    title: "Jami",
    dataIndex: "totle_prisre",
    key: "count",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
];
