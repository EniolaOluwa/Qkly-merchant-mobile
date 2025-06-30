import {Pressable, View} from 'react-native';
import React from 'react';
import {appStyle} from '@utils/styles';
import TextComponent from '@components/Text/textComponent';
import colors from '@utils/colors';
import TransactionItem from '@modules/Shop/components/TransactionItem';

const WalletOverview = () => {
  return (
    <View style={appStyle.flex1}>
      <Pressable style={{alignSelf: 'flex-end'}}>
        <TextComponent.SemiBold
          style={{textDecorationLine: 'underline'}}
          color={colors.primary[800]}>
          See all
        </TextComponent.SemiBold>
      </Pressable>

      {[...Array(5)].map((_, i) => (
        <TransactionItem key={i} />
      ))}
    </View>
  );
};

export default WalletOverview;
