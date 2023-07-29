import {combineReducers} from '@reduxjs/toolkit';
import {userInfoSlice} from './userInfo/slice';
import {expensesSlice} from './expenses/slice';
import {filtersSlice} from './filters/slice';

export default combineReducers({
  userInfo: userInfoSlice.reducer,
  expenses: expensesSlice.reducer,
  filters: filtersSlice.reducer,
});
