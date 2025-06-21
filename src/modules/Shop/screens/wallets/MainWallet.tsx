import {Pressable, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {appStyle} from '@utils/styles';
import WalletBalance from '@modules/Shop/components/WalletBalance';
import TextComponent from '@components/Text/textComponent';
import colors from '@utils/colors';
import TransactionItem from '@modules/Shop/components/TransactionItem';

const MainWallet = () => {
  return (
    <ScrollView style={appStyle.flex1} showsVerticalScrollIndicator={false}>
      <WalletBalance />
      <View style={appStyle.flexRowSpaceCenter}>
        <TextComponent.Bold>Transaction History</TextComponent.Bold>
        <Pressable>
          <TextComponent.SemiBold
            style={{textDecorationLine: 'underline'}}
            color={colors.primary[800]}>
            See all
          </TextComponent.SemiBold>
        </Pressable>
      </View>
      {[...Array(5)].map((_, i) => (
        <TransactionItem key={i} />
      ))}
    </ScrollView>
  );
};

export default MainWallet;

const styles = StyleSheet.create({});
