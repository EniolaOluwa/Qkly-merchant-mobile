import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthenticatedStackParamList} from 'navigation-route-type';
import TabNavigator from './TabNavigator';
import OrderDetails from '@modules/Shop/screens/orders/OrderDetails';
import AddMoney from '@modules/Shop/screens/wallets/AddMoney';
import SendMoney from '@modules/Shop/screens/wallets/SendMoney';
const {Screen, Navigator} = createNativeStackNavigator<
  AuthenticatedStackParamList,
  'Authenticated_Stack'
>();
const Authenticated = () => {
  return (
    <Navigator screenOptions={{headerShown: false}} id="Authenticated_Stack">
      <Screen name="TabNavigator" component={TabNavigator} />
      <Screen name="OrderDetails" component={OrderDetails} />
      <Screen name="AddMoney" component={AddMoney} />
      <Screen name="SendMoney" component={SendMoney} />
    </Navigator>
  );
};

export default Authenticated;
