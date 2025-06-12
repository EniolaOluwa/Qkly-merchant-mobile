import React from 'react';
import Container from '@components/Container';
import Buttons from '@components/Button';
import {appStyle} from '@utils/styles';
import CheckmarkOutline from '@assets/vector/CheckmarkOutline';
import TextComponent from '@components/Text/textComponent';
import Spacer from '@components/Spacer';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {UnauthenticatedStackParamList} from 'navigation-route-type';

type BvnSuccessScreenProp = NativeStackScreenProps<
  UnauthenticatedStackParamList,
  'BvnSuccessScreen'
>;
const BvnSuccessScreen: React.FC<BvnSuccessScreenProp> = ({navigation}) => {
  return (
    <Container.Padding style={appStyle.flexCenterAll}>
      <Spacer flex={1} />
      <CheckmarkOutline />
      <Spacer height={40} />
      <TextComponent.Bold size={24} center>
        BVN Verification Successful
      </TextComponent.Bold>
      <Spacer height={5} />
      <TextComponent.Regular center style={{width: '90%'}}>
        Your identity has been verified successfully. You may now proceed with
        your registration.
      </TextComponent.Regular>
      <Spacer flex={1} height={30} />
      <Buttons.Primary onPress={() => navigation.navigate('AuthenticationPin')}>
        Create PIN
      </Buttons.Primary>
    </Container.Padding>
  );
};

export default BvnSuccessScreen;
