import CreatePassword from '@modules/Onboarding/screens/forgotPassword/CreatePassword';
import ForgotPassword from '@modules/Onboarding/screens/forgotPassword/ForgotPassword';
import VerifyPasswordEmail from '@modules/Onboarding/screens/forgotPassword/VerifyPasswordEmail';
import LoginScreen from '@modules/Onboarding/screens/login/LoginScreen';
import SignInWithPin from '@modules/Onboarding/screens/login/SigninWithPin';
import CreateAccount from '@modules/Onboarding/screens/signup/CreateAccount';
import CreateBusinessDetails from '@modules/Onboarding/screens/signup/CreateBusinessDetails';
import VerifyEmail from '@modules/Onboarding/screens/signup/VerifyEmail';
import SplashScreen from '@modules/Onboarding/screens/splash/SplashScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UnauthenticatedStackParamList} from 'navigation-route-type';
import React from 'react';

const Unauthenticated = () => {
  const Stack = createNativeStackNavigator<
    UnauthenticatedStackParamList,
    'Unauthenticated_Stack'
  >();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      id="Unauthenticated_Stack"
      initialRouteName="SignInWithPin">
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignInWithPin" component={SignInWithPin} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen
        name="VerifyPasswordEmail"
        component={VerifyPasswordEmail}
      />
      <Stack.Screen name="CreatePassword" component={CreatePassword} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
      <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
      <Stack.Screen
        name="CreateBusinessDetails"
        component={CreateBusinessDetails}
      />
    </Stack.Navigator>
  );
};

export default Unauthenticated;
