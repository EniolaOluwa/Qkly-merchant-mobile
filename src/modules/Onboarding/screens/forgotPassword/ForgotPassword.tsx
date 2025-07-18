import React from 'react';
import Container from '@components/Container';
import Header from '@components/Header';
import Spacer from '@components/Spacer';
import Inputs from '@components/Input';
import Buttons from '@components/Button';
import DualText from '@modules/Onboarding/components/DualText';
import useForgotPassword from '@modules/Onboarding/lib/hooks/useForgotPassword';

const ForgotPassword = () => {
  const {navigateToLogin, navigateToVerify} = useForgotPassword();
  return (
    <Container.Padding>
      <Header title="Forgot Password" desc="Enter your email address" />

      <Inputs.Text
        label="Email Address"
        placeholder="Enter your email address"
      />

      <Spacer height={10} />
      <Buttons.Primary onPress={navigateToVerify}>Continue</Buttons.Primary>
      <Spacer flex={1} />
      <DualText
        blackText="Remembered your password? "
        actionText="Login"
        action={navigateToLogin}
      />
    </Container.Padding>
  );
};

export default ForgotPassword;
