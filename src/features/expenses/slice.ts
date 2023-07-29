import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import uuid from 'react-native-uuid';

import {RootState} from '../store';
import {currencyFormat} from '../../utils/numbers';
import {logout} from '../actions/actionsCreator';
import {isDateBiggerOrEqual} from '../../utils/dates';
import {IExpense, TFilter} from '../types';

// Define a type for the slice state
interface IExpenses {
  expensesList: IExpense[];
}

// Define the initial state using that type
const initialState: IExpenses = {
  expensesList: [],
};

/**
 * expenses - PERSIST - hold the expenses the user adds, actions and getters.
 * holds the expensesList.
 */
export const expensesSlice = createSlice({
  name: 'expenses',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Adds a new expense to the list and placing it where its supposed to be according to its date
    addExpense: (state, action: PayloadAction<IExpense>) => {
      const newExpense = {
        ...action.payload,
        id: uuid.v4().toString(),
      };
      const index = state.expensesList.findIndex(({Date}) =>
        isDateBiggerOrEqual(newExpense.Date, Date),
      );

      index < 0
        ? state.expensesList.push(newExpense)
        : state.expensesList.splice(index, 0, newExpense);
    },

    // Edits expense using its id to edit it
    editExpense: (state, action: PayloadAction<IExpense>) => {
      const index = state.expensesList.findIndex(
        ({id}) => action.payload.id === id,
      );
      state.expensesList[index] = {...action.payload};
    },

    // Remove expense using its id
    removeExpense: (state, action: PayloadAction<string>) => {
      state.expensesList = state.expensesList.filter(
        ({id}) => action.payload !== id,
      );
    },
  },
  extraReducers: builder => {
    // logout action triggered with other reducers, inits the expenses list
    builder.addCase(logout, () => {
      return initialState;
    });
  },
});

export const {addExpense, editExpense, removeExpense} = expensesSlice.actions;

// gets expenses using filters state.
export const getExpenses = ({expenses}: RootState) => expenses.expensesList;

// gets expenses total
export const getExpensesTotal = ({expenses}: RootState) => {
  const total = expenses.expensesList?.reduce(
    (sum, val: IExpense) => sum + parseFloat(val.Amount),
    0,
  );
  return currencyFormat(total);
};

// gets number of expenses exists
export const getExpensesCount = ({expenses}: RootState) =>
  expenses.expensesList?.reduce(count => count + 1, 0);

export default expensesSlice.reducer;
