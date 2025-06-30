import {ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import QklyKeyboard from '@components/QklyKeyboard';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Spacer from '@components/Spacer';
import TextComponent from '@components/Text/textComponent';
import colors from '@utils/colors';
import DualText from '@modules/Onboarding/components/DualText';
import Inputs from '@components/Input';
import {setOnboardingStep} from '@store/onboarding/onboardingSlice';
import {OnboardingViewState} from '@store/onboarding/types';
import {useNavigation} from '@react-navigation/native';
import {UnAuthenticatedNavigationProps} from 'navigation-route-type';
import {useDispatch} from 'react-redux';
import {allowLogin} from '@store/userSlice/userSlice';
import Container from '@components/Container';
import InsetSpacer from '@components/Spacer/InsetSpacer';

const SignInWithPin = () => {
  //@ts-ignore
  const {navigate, replace} = useNavigation<UnAuthenticatedNavigationProps>();
  const {top} = useSafeAreaInsets();
  const [pin, setPin] = useState('');
  const dispatch = useDispatch();

  const navigateToLogin = () => {
    replace('LoginScreen');
    setOnboardingStep(OnboardingViewState.login);
  };

  useEffect(() => {
    if (pin.length === 4) {
      //   loginWithPin({
      //     email,
      //     userPin: pin,
      //   });

      dispatch(allowLogin());
    }
  }, [pin]);
  return (
    <Container.Normal>
      <Spacer height={top + 20} />

      <TextComponent.Bold size={24}>Log in to your Account</TextComponent.Bold>
      <Spacer height={6} />
      <TextComponent.Regular color={colors.textPrimary}>
        Use your PIN to access your account
      </TextComponent.Regular>
      <Spacer height={30} />
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
        <DualText
          blackText="Not your account? "
          actionText="Switch account"
          action={navigateToLogin}
        />
        <Spacer height={30} />
      </ScrollView>
      <InsetSpacer type="bottom" />
    </Container.Normal>
  );
};

export default SignInWithPin;
