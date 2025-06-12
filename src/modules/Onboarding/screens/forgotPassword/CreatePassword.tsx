import {ScrollView} from 'react-native';
import React from 'react';
import Container from '@components/Container';
import Header from '@components/Header';
import Spacer from '@components/Spacer';
import Inputs from '@components/Input';
import useChangeForgotPassword from '@modules/Onboarding/lib/hooks/useChangeForgotPassword';
import PasswordCheck from '@modules/Onboarding/components/PasswordCheck';
import Buttons from '@components/Button';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const CreatePassword = () => {
  const {password, setPassword, confirm, setConfirm, goToLogin} =
    useChangeForgotPassword();
  const {bottom} = useSafeAreaInsets();
  return (
    <Container.Keyboard>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flex: 1, paddingBottom: bottom + 10}}>
        <Header
          title="Create Password"
          desc="You can now create a new password"
        />
        <Inputs.Password
          value={password}
          onChange={setPassword}
          label="New Password"
          placeholder="Enter password"
        />
        <PasswordCheck password={password} />
        <Spacer height={20} />
        <Inputs.Password
          label="Confirm Password"
          placeholder="Confirm your password"
          value={confirm}
          onChange={setConfirm}
        />
        <Spacer flex={1} />
        <Buttons.Primary onPress={goToLogin}>Continue</Buttons.Primary>
      </ScrollView>
    </Container.Keyboard>
  );
};

export default CreatePassword;
