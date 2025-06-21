import {StyleSheet, View} from 'react-native';
import React, {useRef} from 'react';
import Container from '@components/Container';
import Header from '@components/Header';
import Inputs from '@components/Input';
import BankListSheet from '@modules/Shop/components/BankListSheet';
import Buttons from '@components/Button';
import Spacer from '@components/Spacer';

const SendMoney = () => {
  const ref = useRef<any>(null);
  return (
    <Container.Keyboard>
      <Header
        title="Send Money"
        desc="Your account details must match your BVN"
      />
      <Container.Scroll contentContainerStyle={{flexGrow: 1}}>
        <Inputs.DropDown
          label="Bank name"
          placeholder="Select Bank"
          onPress={ref?.current?.openSheet}
          sheet={<BankListSheet ref={ref} />}
        />
        <Inputs.Text
          label="Account Number"
          keyboard="number-pad"
          placeholder="0293847296"
          inputProps={{
            maxLength: 10,
          }}
          success
          error={true}
          errorText="Success ifiok"
        />
        <Inputs.Text label="Amount" keyboard="number-pad" placeholder="00.00" />
        <Spacer flex={1} />
        <Buttons.Primary>Continue</Buttons.Primary>
      </Container.Scroll>
    </Container.Keyboard>
  );
};

export default SendMoney;

const styles = StyleSheet.create({});
