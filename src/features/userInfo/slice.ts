import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {logout} from '../actions/actionsCreator';
import {RootState} from '../store';

// Define a type for the slice state
interface IUserInfo {
  userName: string;
}

// Define the initial state using that type
const initialState: IUserInfo = {
  userName: '',
};

/**
 * user info - PERSIST - would hold much more data in real apps
 */
export const userInfoSlice = createSlice({
  name: 'userInfo',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // sets users data
    setUser: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
  },
  extraReducers: builder => {
    // logout action triggered with other reducers, init userInfo
    builder.addCase(logout, () => {
      return initialState;
    });
  },
});

export const {setUser} = userInfoSlice.actions;

// returns user name
export const getUserName = ({userInfo}: RootState) => userInfo.userName;

export default userInfoSlice.reducer;
