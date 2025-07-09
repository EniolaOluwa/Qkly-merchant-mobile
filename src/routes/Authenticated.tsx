import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthenticatedStackParamList} from 'navigation-route-type';
import TabNavigator from './TabNavigator';
import OrderDetails from '@modules/Shop/screens/orders/OrderDetails';
import AddMoney from '@modules/Shop/screens/wallets/AddMoney';
import SendMoney from '@modules/Shop/screens/wallets/SendMoney';
import MainSocialMedia from '@modules/Growth/screens/socialMedia/MainSocialMedia';
import DiscountScreen from '@modules/Growth/screens/discounts/DiscountScreen';
import LeadForm from '@modules/Growth/screens/leadForm/LeadForm';
import Messages from '@modules/Growth/screens/messages/Messages';
import ImageCreator from '@modules/Growth/screens/socialMedia/ImageCreator';
import CreateDiscount from '@modules/Growth/screens/discounts/CreateDiscount';
import ChangePassword from '@modules/Profile/screens/ChangePassword';
import ChangePin from '@modules/Profile/screens/ChangePin';
import NewPin from '@modules/Profile/screens/NewPin';
import ConfirmNewPin from '@modules/Profile/screens/ConfirmNewPin';
import InsightScreen from '@modules/Profile/screens/InsightScreen';
import StoreCustomization from '@modules/Profile/screens/StoreCustomization';
import ProfileDetails from '@modules/Profile/screens/ProfileDetails';
import BusinessDetails from '@modules/Profile/screens/BusinessDetails';
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
      <Screen name="MainSocialMedia" component={MainSocialMedia} />
      <Screen name="DiscountScreen" component={DiscountScreen} />
      <Screen name="LeadForm" component={LeadForm} />
      <Screen name="Messages" component={Messages} />
      <Screen name="ImageCreator" component={ImageCreator} />
      <Screen name="CreateDiscount" component={CreateDiscount} />
      <Screen name="ChangePassword" component={ChangePassword} />
      <Screen name="ChangePin" component={ChangePin} />
      <Screen name="NewPin" component={NewPin} />
      <Screen name="ConfirmNewPin" component={ConfirmNewPin} />
      <Screen name="InsightScreen" component={InsightScreen} />
      <Screen name="StoreCustomization" component={StoreCustomization} />
      <Screen name="ProfileDetails" component={ProfileDetails} />
      <Screen name="BusinessDetails" component={BusinessDetails} />
    </Navigator>
  );
};

export default Authenticated;
