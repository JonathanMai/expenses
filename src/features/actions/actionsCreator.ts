import {createAction} from '@reduxjs/toolkit';
import {LOGOUT} from './constants';

export const logout = createAction(LOGOUT);
