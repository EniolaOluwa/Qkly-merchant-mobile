declare module 'App-Data-Types' {
  import {AuthenticatedStackParamList} from 'navigation-route-type';
  import {ImageRequireSource} from 'react-native';
  export interface ISplashData {
    image: ImageRequireSource;
    title: string;
    body: string;
  }
  export interface TabArrType {
    route: string;
    component: () => React.JSX.Element;
    inactiveIcon: () => React.JSX.Element;
    activeIcon: () => React.JSX.Element;
  }
  export interface TopDataType {
    title: string;
    balance: string;
    icon: (color: string) => React.JSX.Element;
  }
  export interface IGrowthDataType {
    title: string;
    desc: string;
    icon: () => React.JSX.Element;
    navigation: keyof AuthenticatedStackParamList;
  }
}
