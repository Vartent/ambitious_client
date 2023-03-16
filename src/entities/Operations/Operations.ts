export type Phaze = {
  children: Operation[];
  duration: number;
};

export enum Unit {
  kg = "кг",
  km = "км",
  m = "м",
  sm = "см",
  sqm = "м2",
  t = "т",
}

export type Operation = {
  amount: number;
  duration: number;
  id: number;
  name: string;
  parent_phaze?: Phaze;
  unit: Unit;
  worker?: Worker[];
};
