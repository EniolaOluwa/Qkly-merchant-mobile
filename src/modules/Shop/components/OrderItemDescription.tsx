import {StyleSheet, View} from 'react-native';
import React from 'react';
import Animated, {FadeInUp} from 'react-native-reanimated';
import {moderateScale, verticalScale} from '@utils/responsive';
import colors from '@utils/colors';
import OrderBoxIcon from '@assets/vector/OrderBoxIcon';
import TextComponent from '@components/Text/textComponent';
import {appStyle} from '@utils/styles';
import Spacer from '@components/Spacer';
import CardIcon from '@assets/vector/CardIcon';

const OrderItemDescription = () => {
  return (
    <Animated.View entering={FadeInUp.duration(400)}>
      <View style={styles.container}>
        <View style={appStyle.flexRowCenter}>
          <OrderBoxIcon size="22" color={colors.neutral[350]} />
          <Spacer width={10} />
          <TextComponent.Bold size={16} color={colors.neutral[350]}>
            Purchase Information
          </TextComponent.Bold>
        </View>
        <Spacer height={16} />
        <TextComponent.Regular size={12} color={colors.neutral[200]}>
          Gabriel Ben
        </TextComponent.Regular>
        <Spacer height={4} />
        <TextComponent.Regular size={12} color={colors.neutral[200]}>
          080222456299
        </TextComponent.Regular>
        <Spacer height={4} />
        <TextComponent.Regular size={12} color={colors.neutral[200]}>
          benwewe@gmail.com
        </TextComponent.Regular>
      </View>

      <View style={styles.container}>
        <View style={appStyle.flexRowCenter}>
          <OrderBoxIcon size="22" color={colors.neutral[350]} />
          <Spacer width={10} />
          <TextComponent.Bold size={16} color={colors.neutral[350]}>
            Deliver Area
          </TextComponent.Bold>
        </View>
        <Spacer height={16} />
        <TextComponent.Regular size={12} color={colors.neutral[200]}>
          30 Fadeyi street Lagos State
        </TextComponent.Regular>
      </View>

      <View style={styles.container}>
        <View style={appStyle.flexRowCenter}>
          <CardIcon />
          <Spacer width={10} />
          <TextComponent.Bold size={16} color={colors.neutral[350]}>
            Payment Method
          </TextComponent.Bold>
        </View>
        <Spacer height={16} />
        <TextComponent.Regular size={12} color={colors.neutral[200]}>
          Pay with Cards, Bank Transfer or USSD
        </TextComponent.Regular>
      </View>

      <View style={styles.container}>
        <View style={appStyle.flexRowCenter}>
          <OrderBoxIcon size="22" color={colors.neutral[350]} />
          <Spacer width={10} />
          <TextComponent.Bold size={16} color={colors.neutral[350]}>
            Summary
          </TextComponent.Bold>
        </View>
        <Spacer height={16} />
        <View style={appStyle.flexRowSpaceCenter}>
          <TextComponent.Regular size={12} color={colors.neutral[200]}>
            Total Item (2)
          </TextComponent.Regular>
          <TextComponent.Bold color={colors.neutral[350]}>
            ₦43,000
          </TextComponent.Bold>
        </View>
        <Spacer height={4} />
        <View style={appStyle.flexRowSpaceCenter}>
          <TextComponent.Regular size={12} color={colors.neutral[200]}>
            Delivery Fee
          </TextComponent.Regular>
          <TextComponent.Bold color={colors.neutral[350]}>
            ₦0.00
          </TextComponent.Bold>
        </View>
        <Spacer height={4} />
        <View style={appStyle.flexRowSpaceCenter}>
          <TextComponent.Regular size={12} color={colors.neutral[200]}>
            Total
          </TextComponent.Regular>
          <TextComponent.Bold color={colors.neutral[350]}>
            ₦43,000
          </TextComponent.Bold>
        </View>
      </View>
    </Animated.View>
  );
};

export default OrderItemDescription;

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(13),
    borderRadius: moderateScale(8),
    backgroundColor: colors.neutral[50],
    marginBottom: verticalScale(15),
  },
});
