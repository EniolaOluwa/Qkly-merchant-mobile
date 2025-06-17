import {StyleSheet, View} from 'react-native';
import React from 'react';
import {horizontalScale, moderateScale} from '@utils/responsive';
import colors from '@utils/colors';
import ArrowDown from '@assets/vector/ArrowDown';
import TextComponent from '@components/Text/textComponent';
import Spacer from '@components/Spacer';

const TransactionItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <ArrowDown color={colors.primary[800]} />
      </View>
      <View style={{width: '65%'}}>
        <TextComponent.SemiBold numberOfLines={1}>
          Payment from Success
        </TextComponent.SemiBold>
        <Spacer height={5} />
        <TextComponent.Regular size={10}>
          18th March. 10:53 Am
        </TextComponent.Regular>
      </View>
      <Spacer flex={1} width={20} />
      <TextComponent.SemiBold size={12} color={colors.primary[800]}>
        +₦124,000
      </TextComponent.SemiBold>
    </View>
  );
};

export default TransactionItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: moderateScale(24),
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral[150],
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: moderateScale(35),
    height: moderateScale(35),
    borderRadius: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary[50],
    marginRight: horizontalScale(12),
  },
});
