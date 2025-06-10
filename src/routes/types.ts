declare module 'navigation-route-type' {
  import {NavigationProp} from '@react-navigation/native';
  export type UnauthenticatedStackParamList = {
    LoginScreen: undefined;
    SplashScreen: undefined;
    VerifyEmail: undefined;
    CreateAccount: undefined;
    CongratulationScreen: undefined;
    SignInWithPin: undefined;
    ForgotPassword: undefined;
    VerifyPasswordEmail: undefined;
    CreatePassword: undefined;
    CreateBusinessDetails: undefined;
  };

  export type TabStackParamList = {
    MainHome: undefined;
    MainShop: undefined;
    MainGrowth: undefined;
    MainProfile: undefined;
  };

  export type UnAuthenticatedNavigationProps =
    NavigationProp<UnauthenticatedStackParamList>;

  export type AuthenticatedStackParamList = {
    TabNavigator: undefined;
  };
}
