import React from 'react';
import Container from '@components/Container';
import Header from '@components/Header';
import Inputs from '@components/Input';
import Spacer from '@components/Spacer';
import Buttons from '@components/Button';
import useVerifyForgotPasswordEmail from '@modules/Onboarding/lib/hooks/useVerifyForgotPasswordEmail';

const VerifyPasswordEmail = () => {
  const {pin, setPin, navigateOut} = useVerifyForgotPasswordEmail();
  return (
    <Container.Padding>
      <Header title="Verify Code" desc="An OTP was sent to your email" />

      <Spacer height={24} />
      <Inputs.OTP
        cellCount={6}
        label="Enter code"
        value={pin}
        setPin={setPin}
      />
      <Spacer height={20} />
      <Buttons.Primary onPress={navigateOut}>Verify</Buttons.Primary>
    </Container.Padding>
  );
};

export default VerifyPasswordEmail;
