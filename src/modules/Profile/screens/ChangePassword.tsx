import {ScrollView} from 'react-native';
import React from 'react';
import Container from '@components/Container';
import Header from '@components/Header';
import InsetSpacer from '@components/Spacer/InsetSpacer';
import Inputs from '@components/Input';
import PasswordCheck from '@modules/Onboarding/components/PasswordCheck';
import useChangePassword from '../lib/hooks/useChangePassword';
import Spacer from '@components/Spacer';
import Buttons from '@components/Button';

const ChangePassword = () => {
  const {confirmPassword, error, handleChange, newPassword, oldPassword} =
    useChangePassword();
  return (
    <Container.Keyboard>
      <Header title="Change Password" desc="Update your password below" />
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <Inputs.Password
          label="Old Password"
          placeholder="Enter your previous Password"
          value={oldPassword}
          onChange={text => handleChange('oldPassword', text)}
          error={error?.oldPassword}
          errorText="Enter your Old Password"
        />
        <Inputs.Password
          label="New Password"
          placeholder="Enter Password"
          value={newPassword}
          onChange={text => handleChange('newPassword', text)}
          error={error?.newPassword}
          errorText="Password does not match the requirements"
        />

        <PasswordCheck password={newPassword} />
        <Spacer height={24} />
        <Inputs.Password
          label="Confirm Password"
          placeholder="Enter Password"
          value={confirmPassword}
          onChange={text => handleChange('confirmPassword', text)}
          error={error?.confirmPassword}
          errorText="Password do not match"
        />
        <Spacer flex={1} height={40} />
        <Buttons.Primary>Change Password</Buttons.Primary>
        <InsetSpacer type="bottom" />
      </ScrollView>
    </Container.Keyboard>
  );
};

export default ChangePassword;
