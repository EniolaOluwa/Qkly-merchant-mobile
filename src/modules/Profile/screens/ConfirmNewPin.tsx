import {ScrollView} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthenticatedStackParamList} from 'navigation-route-type';
import Container from '@components/Container';
import Header from '@components/Header';
import Inputs from '@components/Input';
import Spacer from '@components/Spacer';
import QklyKeyboard from '@components/QklyKeyboard';
import Buttons from '@components/Button';
import useChangePin from '../lib/hooks/useChangePin';

type ConfirmNewPinScreenProps = NativeStackScreenProps<
  AuthenticatedStackParamList,
  'ConfirmNewPin'
>;
const ConfirmNewPin: React.FC<ConfirmNewPinScreenProps> = ({route}) => {
  const {oldPin, newPin} = route?.params;

  const {error, pin, setPin, navigateOut} = useChangePin(oldPin, newPin);

  return (
    <Container.Padding>
      <Header title="Confirm PIN" desc="Confirm your new 4-Digit PIN" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
        contentContainerStyle={{flex: 1}}>
        <Inputs.OTP
          value={pin}
          setPin={setPin}
          eyeIcon
          isEncypted
          pointerEvents="none"
          error={error}
          errorText="Your Pin does not match your new pin"
        />
        <Spacer flex={1} />
        <QklyKeyboard maxLength={4} setPin={setPin} pin={pin} />
        <Spacer flex={1} />
        <Buttons.Primary onPress={navigateOut} disable={pin.length < 4}>
          Continue
        </Buttons.Primary>
      </ScrollView>
    </Container.Padding>
  );
};

export default ConfirmNewPin;
