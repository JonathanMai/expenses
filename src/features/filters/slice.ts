import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '../store';
import {TFilter} from '../types';

// Define a type for the slice state
interface IFilters {
  filterBy: TFilter;
}

// Define the initial state using that type
const initialState: IFilters = {
  filterBy: {Title: '', Amount: '', Date: ''},
};

/**
 * Filter slice - in bigger apps we would hold here more type of filters.
 * holds the filterBy.
 */
export const filtersSlice = createSlice({
  name: 'filters',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // sets the filter
    setFilterBy: (state, action: PayloadAction<TFilter>) => {
      state.filterBy = action.payload;
    },
  },
});

export const {setFilterBy} = filtersSlice.actions;

/**
 *  returns the filters
 */
export const getFilters = ({filters}: RootState) => filters.filterBy;

export default filtersSlice.reducer;
