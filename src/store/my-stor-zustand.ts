import {
  CatigoiesData,
  groupsData,
  produktsData,
  studentData,
} from "@/constants/data";
import {
  CatigoiiesType,
  groupsTypes,
  ProduktsType,
  studentTypes,
} from "@/types";
import { create } from "zustand";

type GlobolStoreType = {
  students: studentTypes[];
  groups: groupsTypes[];
  catigoies: CatigoiiesType;
  produkts: ProduktsType[];
};

export const useGlobalStor = create<GlobolStoreType>(() => {
  return {
    students: studentData,
    groups: groupsData,
    catigoies: CatigoiesData,
    produkts: produktsData,
  };
});
