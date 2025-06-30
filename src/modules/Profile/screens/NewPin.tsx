import {ScrollView} from 'react-native';
import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthenticatedStackParamList} from 'navigation-route-type';
import Container from '@components/Container';
import Header from '@components/Header';
import Inputs from '@components/Input';
import Spacer from '@components/Spacer';
import QklyKeyboard from '@components/QklyKeyboard';
import Buttons from '@components/Button';

type NewPinScreenProps = NativeStackScreenProps<
  AuthenticatedStackParamList,
  'NewPin'
>;

const NewPin: React.FC<NewPinScreenProps> = ({route, navigation}) => {
  const {oldPin} = route?.params;

  const [pin, setPin] = useState('');

  const navigateOut = () => {
    navigation.navigate('ConfirmNewPin', {
      oldPin,
      newPin: pin,
    });
  };
  return (
    <Container.Padding>
      <Header title="New PIN" desc="Enter your new 4-Digit PIN" />
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
        />
        <Spacer flex={1} />
        <QklyKeyboard maxLength={4} setPin={setPin} pin={pin} />
        <Spacer flex={1} />
        <Buttons.Primary
          onPress={navigateOut}
          disable={pin.length < 4 || oldPin === pin}>
          Continue
        </Buttons.Primary>
      </ScrollView>
    </Container.Padding>
  );
};

export default NewPin;
