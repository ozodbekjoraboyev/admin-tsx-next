import { groupsData, studentData } from "@/constants/data";
import { groupsTypes, studentTypes } from "@/types";
import { create } from "zustand";

type GlobolStoreType = {
  students: studentTypes[];
  groups: groupsTypes[];
};

export const useGlobalStor = create<GlobolStoreType>(() => {
  return { students: studentData, groups: groupsData };
});
