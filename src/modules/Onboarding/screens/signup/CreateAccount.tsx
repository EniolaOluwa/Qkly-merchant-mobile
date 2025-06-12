import {ScrollView} from 'react-native';
import React from 'react';
import Container from '@components/Container';
import Header from '@components/Header';
import OnboardingCounts from '@modules/Onboarding/components/OnboardingCounts';
import Spacer from '@components/Spacer';
import Inputs from '@components/Input';
import PasswordCheck from '@modules/Onboarding/components/PasswordCheck';
import useCreateAccount from '@modules/Onboarding/lib/hooks/useCreateAccount';
import Buttons from '@components/Button';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const CreateAccount = () => {
  const {bottom} = useSafeAreaInsets();
  const {
    confirm,
    email,
    firstName,
    handleChange,
    lastName,
    password,
    phoneNumber,
    error,
    pressBtn,
    scrollRef,
  } = useCreateAccount();
  return (
    <Container.Keyboard>
      <ScrollView showsVerticalScrollIndicator={false} ref={scrollRef}>
        <Header
          title="Create an Account"
          desc="Join the Market place and start selling"
        />
        <OnboardingCounts count={1} />
        <Spacer height={24} />
        <Inputs.Text
          label="First Name"
          placeholder="Enter your First name"
          value={firstName}
          onChange={value => handleChange('firstName', value)}
          error={error.firstName}
          errorText="First name must be more than 3 letters"
        />
        <Inputs.Text
          label="Last Name"
          placeholder="Enter your Last name"
          value={lastName}
          onChange={value => handleChange('lastName', value)}
          error={error.lastName}
          errorText="Last name must be more than 3 letters"
        />
        <Inputs.Text
          label="Email Address"
          placeholder="Enter a valid email address"
          value={email}
          onChange={value => handleChange('email', value)}
          error={error.email}
          errorText="Please enter a valid email"
        />
        <Inputs.Text
          label="Phone Number"
          placeholder="Enter your phone number"
          keyboard="number-pad"
          value={phoneNumber}
          onChange={value => handleChange('phoneNumber', value)}
          error={error.phoneNumber}
          errorText="Phone number must be up to 11"
        />
        <Inputs.Password
          value={password}
          onChange={value => handleChange('password', value)}
          label="New Password"
          placeholder="Enter password"
          error={error.password}
          errorText="Password does not match the requirements"
        />
        <PasswordCheck password={password} />
        <Spacer height={20} />
        <Inputs.Password
          label="Confirm Password"
          placeholder="Confirm your password"
          value={confirm}
          onChange={value => handleChange('confirm', value)}
          error={error.confirm}
          errorText="Passwords do not match"
        />
        <Spacer flex={1} height={30} />
        <Buttons.Primary onPress={pressBtn}>Continue</Buttons.Primary>
        <Spacer height={bottom + 10} />
      </ScrollView>
    </Container.Keyboard>
  );
};

export default CreateAccount;
