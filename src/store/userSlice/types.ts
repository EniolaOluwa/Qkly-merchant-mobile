declare module 'user-slice-module' {
  export interface UserState {
    user: UserType;
    toastDetails: IToastNotification;
    isAuthenticated: boolean;
    sessionEnd: boolean;
  }

  export interface UserType {
    email: string;
  }
  export interface IToastNotification {
    title: string;
    type: 'success' | 'error' | 'info';
  }
  export interface ICountryType {
    code: string;
    dial_code: string;
    flag: string;
    name: string;
  }
}
