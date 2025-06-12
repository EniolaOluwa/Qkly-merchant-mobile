import {ScrollView} from 'react-native';
import React from 'react';
import Container from '@components/Container';
import Header from '@components/Header';
import Spacer from '@components/Spacer';
import OnboardingCounts from '@modules/Onboarding/components/OnboardingCounts';
import Inputs from '@components/Input';
import TextComponent from '@components/Text/textComponent';
import colors from '@utils/colors';
import Buttons from '@components/Button';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import useBvn from '@modules/Onboarding/lib/hooks/useBvn';

const BvnScreen = () => {
  const {bottom} = useSafeAreaInsets();
  const {bvn, error, navigateOut, setBvn} = useBvn();
  return (
    <Container.Keyboard>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flex: 1}}>
        <Header
          title="You’re Almost There!"
          descElement={
            <TextComponent.Regular
              color={colors.textPrimary}
              style={{width: '95%'}}>
              We need to verify your{' '}
              <TextComponent.Bold color={colors.textPrimary}>
                BVN
              </TextComponent.Bold>{' '}
              before you can start using your account
            </TextComponent.Regular>
          }
        />
        <OnboardingCounts count={4} />
        <Spacer height={24} />
        <Inputs.Text
          label="BVN"
          placeholder="Enter BVN number"
          inputProps={{
            maxLength: 11,
          }}
          value={bvn}
          onChange={setBvn}
          error={error}
          errorText="Please enter your BVN"
        />
        <Spacer height={10} />
        <TextComponent.Regular
          color={colors.textPrimary}
          style={{width: '95%'}}>
          Verify your BVN using your face, Don’t know your BVN? Dial{' '}
          <TextComponent.Bold color={colors.textPrimary}>
            *565*0#
          </TextComponent.Bold>
        </TextComponent.Regular>

        <Spacer height={12} />
        <TextComponent.SemiBold
          color={colors.primary[700]}
          style={{textDecorationLine: 'underline'}}>
          Why do you need BVN?
        </TextComponent.SemiBold>
        <Spacer flex={1} height={30} />
        <Buttons.Primary onPress={navigateOut}>Continue</Buttons.Primary>
        <Spacer height={bottom + 10} />
      </ScrollView>
    </Container.Keyboard>
  );
};

export default BvnScreen;
