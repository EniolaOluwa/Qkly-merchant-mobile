import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {horizontalScale, moderateScale} from '@utils/responsive';
import colors from '@utils/colors';
import TextComponent from '@components/Text/textComponent';
import Spacer from '@components/Spacer';
import OrderBoxIcon from '@assets/vector/OrderBoxIcon';

const OrderItem = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.icon}>
        <OrderBoxIcon />
      </View>
      <View style={{width: '85%'}}>
        <TextComponent.SemiBold numberOfLines={1}>
          Order delivered to Success
        </TextComponent.SemiBold>
        <Spacer height={5} />
        <TextComponent.Regular size={10}>
          18th March. 10:53 Am
        </TextComponent.Regular>
      </View>
    </TouchableOpacity>
  );
};

export default OrderItem;

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
