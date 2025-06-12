import React from 'react';
import Container from '@components/Container';
import Header from '@components/Header';
import Inputs from '@components/Input';
import Spacer from '@components/Spacer';
import TextComponent from '@components/Text/textComponent';
import colors from '@utils/colors';
import Buttons from '@components/Button';
import DualText from '@modules/Onboarding/components/DualText';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {UnauthenticatedStackParamList} from 'navigation-route-type';

type LoginScreenProps = NativeStackScreenProps<
  UnauthenticatedStackParamList,
  'LoginScreen'
>;
const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const navigateToCreateAccount = () => navigation.navigate('CreateAccount');
  const navigateToForgotPassword = () => navigation.navigate('ForgotPassword');

  return (
    <Container.Padding>
      <Header title="Log In" desc="Welcome back!" />
      <Inputs.Text
        label="Email Address"
        placeholder="Enter your email address"
      />
      <Inputs.Password label="Password" placeholder="Enter your password" />
      <TextComponent.SemiBold
        size={12}
        color={colors.primary[700]}
        style={{textAlign: 'right'}}
        onPress={navigateToForgotPassword}>
        Forgot Password?
      </TextComponent.SemiBold>
      <Spacer height={10} />
      <Buttons.Primary>Log In</Buttons.Primary>
      <Spacer flex={1} />
      <DualText
        blackText="Don’t have an account? "
        actionText="Create account"
        action={navigateToCreateAccount}
      />
    </Container.Padding>
  );
};

export default LoginScreen;
