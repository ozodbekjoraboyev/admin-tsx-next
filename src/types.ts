export type studentTypes = {
  id: number;
  name: string;
  age: number;
  gender: "Male" | "Female";
  job: string;
  gruh1: string;
};
export type groupsTypes = {
  id: number;
  gruh1: string;
};

export type ProduktsType = {
  id: number;
  name: string;
  gruh1: string;
  price: number;
};


export type CatigoiiesType = {
  id: number;
  name: string;
};


export type OrdersType = {
  id: number;
   students_id: number
   mahsulot_id : number
   adres: string;
   count:number
   totle_prisre: number
   status: 'qabul_qilindi' | 'yetkazib_berilmoqda' | 'tugatildi'
};
