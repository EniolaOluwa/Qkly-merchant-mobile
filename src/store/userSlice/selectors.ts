import {RootState} from '@store/rootReducer';

export const selectUserInformation = (state: RootState) => state.user.user;

export const selectUserAuthenticationStatus = (state: RootState) =>
  state.user.isAuthenticated;

export const selectToastNotifitcationAction = (state: RootState) =>
  state.user.toastDetails;

export const selectSessionEnd = (state: RootState) => state.user.sessionEnd;
