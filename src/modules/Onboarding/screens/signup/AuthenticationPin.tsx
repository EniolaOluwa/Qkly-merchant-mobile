import {ScrollView} from 'react-native';
import React from 'react';
import Container from '@components/Container';
import Header from '@components/Header';
import Spacer from '@components/Spacer';
import OnboardingCounts from '@modules/Onboarding/components/OnboardingCounts';
import Inputs from '@components/Input';
import QklyKeyboard from '@components/QklyKeyboard';
import Buttons from '@components/Button';
import useCreateAuthPin from '@modules/Onboarding/lib/hooks/useCreateAuthPin';

const AuthenticationPin = () => {
  const {pin, setPin, navigateOut} = useCreateAuthPin();
  return (
    <Container.Padding>
      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
        contentContainerStyle={{flex: 1}}>
        <Header
          title="Create your Authentication Pin"
          desc="This PIN will be used for both logging in and authorizing transactions."
        />
        <OnboardingCounts count={6} />
        <Spacer height={24} />

        <Inputs.OTP
          value={pin}
          setPin={setPin}
          eyeIcon
          isEncypted
          pointerEvents="none"
        />
        <Spacer flex={1} />
        <QklyKeyboard maxLength={4} setPin={setPin} pin={pin} />
        <Spacer flex={1} height={30} />
        <Buttons.Primary disable={pin.length < 4} onPress={navigateOut}>
          Create PIN
        </Buttons.Primary>
      </ScrollView>
    </Container.Padding>
  );
};

export default AuthenticationPin;
