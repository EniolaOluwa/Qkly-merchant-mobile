import React from 'react';
import Container from '@components/Container';
import Header from '@components/Header';
import useVerifyEmail from '@modules/Onboarding/lib/hooks/useVerifyEmail';
import Inputs from '@components/Input';
import Spacer from '@components/Spacer';
import Buttons from '@components/Button';
import OnboardingCounts from '@modules/Onboarding/components/OnboardingCounts';
import TextComponent from '@components/Text/textComponent';
import CountDown from '@modules/Onboarding/components/CountDown';

const VerifyEmail = () => {
  const {pin, setPin, navigateOut} = useVerifyEmail();
  return (
    <Container.Padding>
      <Header title="Verify your Email" desc="An OTP was sent to your email" />
      <Spacer height={23} />
      <OnboardingCounts count={2} />
      <Spacer height={40} />
      <Inputs.OTP
        cellCount={6}
        label="Enter code"
        value={pin}
        setPin={setPin}
      />
      <Spacer height={44} />
      <Buttons.Primary onPress={navigateOut}>Verify</Buttons.Primary>
      <Spacer height={44} />
      <TextComponent.Regular center>
        Resend code in <CountDown seconds={50} />
      </TextComponent.Regular>
    </Container.Padding>
  );
};

export default VerifyEmail;
