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
    BvnScreen: undefined;
    BvnSuccessScreen: undefined;
    AuthenticationPin: undefined;
    CreatePinSuccessScreen: undefined;
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
    OrderDetails: undefined;
    AddMoney: undefined;
    SendMoney: undefined;
    MainSocialMedia: undefined;
    DiscountScreen: undefined;
    LeadForm: undefined;
    Messages: undefined;
    ImageCreator: undefined;
    CreateDiscount: undefined;
    ChangePassword: undefined;
    ChangePin: undefined;
    NewPin: {oldPin: string};
    ConfirmNewPin: {oldPin: string; newPin: string};
    InsightScreen: undefined;
    StoreCustomization: undefined;
    ProfileDetails: undefined;
    BusinessDetails: undefined;
  };
  export type AuthenticatedNavigationProps =
    NavigationProp<AuthenticatedStackParamList>;
}
