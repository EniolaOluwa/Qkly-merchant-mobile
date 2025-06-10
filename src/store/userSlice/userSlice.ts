import {CaseReducer, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IToastNotification, UserState, UserType} from 'user-slice-module';

export const initialUserState: UserState = {
  toastDetails: {
    title: null,
    type: null,
  },
  isAuthenticated: false,
  user: {
    email: null,
  },
  sessionEnd: false,
};

const authenticateUser: CaseReducer<UserState> = state => ({
  ...state,
  isAuthenticated: true,
});

const unAuthenticateUser: CaseReducer<UserState> = state => ({
  ...state,
  isAuthenticated: false,
});

const setToastAction: CaseReducer<
  UserState,
  PayloadAction<IToastNotification>
> = (state, {payload}) => ({
  ...state,
  toastDetails: payload,
});

const updateUserAction: CaseReducer<UserState, PayloadAction<UserType>> = (
  state,
  {payload},
) => ({
  ...state,
  user: payload,
});

const endSessionAciton: CaseReducer<UserState, PayloadAction<boolean>> = (
  state,
  {payload},
) => ({
  ...state,
  sessionEnd: payload,
});

const resetState: CaseReducer<UserState> = () => initialUserState;

export const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    updateUser: updateUserAction,
    toastAction: setToastAction,
    allowLogin: authenticateUser,
    logUserOut: unAuthenticateUser,
    endSession: endSessionAciton,
    reset: resetState,
  },
});

export const {
  allowLogin,
  logUserOut,
  toastAction,
  updateUser,
  endSession,
  reset,
} = userSlice.actions;
