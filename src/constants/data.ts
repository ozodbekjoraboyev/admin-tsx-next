import {
  CatigoiiesType,
  groupsTypes,
  OrdersType,
  ProduktsType,
  studentTypes,
} from "@/types";

export const studentData: studentTypes[] = [
  {
    id: 1,
    name: "John",
    age: 25,
    gender: "Male",
    job: "Developer",
    gruh1: "N12",
  },
];
export const groupsData: groupsTypes[] = [{ id: 1, gruh1: "N12" }];

export const produktsData: ProduktsType[] = [
  {
    id: 1,
    name: "John",
    gruh1: "N12",
    price: 1,
  },
];

export const CatigoiesData: CatigoiiesType[] = [
  {
    id: Math.floor(Math.random() * 10000),
    name: "N12",
  },
];

export const ordersData: OrdersType[] = [
  {
    id: 1,
    students_id: 2,
    mahsulot_id: 2,
    adres: "string",
    count: 2,
    totle_prisre: 2,
    status: "aaa"
  },
];
