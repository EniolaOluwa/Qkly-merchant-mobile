import {ScrollView} from 'react-native';
import React, {useState} from 'react';
import Container from '@components/Container';
import Header from '@components/Header';
import Spacer from '@components/Spacer';
import Inputs from '@components/Input';
import QklyKeyboard from '@components/QklyKeyboard';
import Buttons from '@components/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthenticatedStackParamList} from 'navigation-route-type';

type ChangePinScreenProps = NativeStackScreenProps<
  AuthenticatedStackParamList,
  'ChangePin'
>;
const ChangePin: React.FC<ChangePinScreenProps> = ({navigation}) => {
  const [pin, setPin] = useState('');

  const navigateOut = () => {
    navigation.navigate('NewPin', {
      oldPin: pin,
    });
  };
  return (
    <Container.Padding>
      <Header title="Change PIN" desc="Enter your Previous PIN" />
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
        <Buttons.Primary onPress={navigateOut} disable={pin.length < 4}>
          Continue
        </Buttons.Primary>
      </ScrollView>
    </Container.Padding>
  );
};

export default ChangePin;
