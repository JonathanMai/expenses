export interface IExpense {
  id?: string;
  Title: string;
  Amount: string;
  Date: string;
}

export type TFilter = Partial<Omit<IExpense, 'id'>>;
