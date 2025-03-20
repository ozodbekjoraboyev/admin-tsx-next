import {
  CatigoiesData,
  groupsData,
  ordersData,
  produktsData,
  studentData,
} from "@/constants/data";
import {
  CatigoiiesType,
  groupsTypes,
  OrdersType, 
  ProduktsType,
  studentTypes,
} from "@/types";
import { create } from "zustand";

type GlobolStoreType = {
  students: studentTypes[];
  groups: groupsTypes[];
  categories: CatigoiiesType[];
  produkts: ProduktsType[];
  orders: OrdersType[];
};

export const useGlobalStor = create<GlobolStoreType>(() => {
  return {
    students: studentData,
    groups: groupsData,
    categories: CatigoiesData,
    produkts: produktsData,
    orders: ordersData,
  };
});
