import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthenticatedStackParamList} from 'navigation-route-type';
import TabNavigator from './TabNavigator';
const {Screen, Navigator} = createNativeStackNavigator<
  AuthenticatedStackParamList,
  'Authenticated_Stack'
>();
const Authenticated = () => {
  return (
    <Navigator screenOptions={{headerShown: false}} id="Authenticated_Stack">
      <Screen name="TabNavigator" component={TabNavigator} />
    </Navigator>
  );
};

export default Authenticated;
