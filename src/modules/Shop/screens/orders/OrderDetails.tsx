import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Container from '@components/Container';
import Header from '@components/Header';
import FastImage from '@d11/react-native-fast-image';
import {ProductImage} from '@assets/images';
import {horizontalScale, moderateScale, verticalScale} from '@utils/responsive';
import colors from '@utils/colors';
import TextComponent from '@components/Text/textComponent';
import ChevronDown from '@assets/vector/ChevronDown';
import Spacer from '@components/Spacer';
import OrderItemDescription from '@modules/Shop/components/OrderItemDescription';
import ChevronUp from '@assets/vector/ChevronUp';
import CheckmarkCircleicon from '@assets/vector/CheckmarkCircleicon';

const OrderDetails = () => {
  const [display, setDisplay] = useState(false);
  return (
    <Container.Padding>
      <Header title="Order No: 53743578" desc="Placed on 25-7-2025" />
      <Container.Scroll>
        <View style={styles.orderItem}>
          <View style={styles.orderInner}>
            <FastImage
              source={ProductImage}
              style={styles.image}
              resizeMode="contain"
            />

            <View style={{width: '50%'}}>
              <TextComponent.Regular color={colors.neutral[350]}>
                Nicky’s Set
              </TextComponent.Regular>
              <View style={styles.color} />
              <TextComponent.Regular size={12} color={colors.neutral[350]}>
                Size: <TextComponent.Bold size={12}>M</TextComponent.Bold>
              </TextComponent.Regular>
              <Spacer height={3} />
              <TextComponent.Regular size={12} color={colors.neutral[350]}>
                2 x <TextComponent.SemiBold> ₦43,000</TextComponent.SemiBold>
              </TextComponent.Regular>
            </View>
            <View style={styles.priceStatus}>
              <View style={styles.status}>
                <TextComponent.SemiBold center size={10} color={colors.white}>
                  Accepted
                </TextComponent.SemiBold>
              </View>
              <TextComponent.Bold size={16}> ₦43,000</TextComponent.Bold>
            </View>
          </View>
          <TouchableOpacity
            style={styles.viewMore}
            onPress={() => setDisplay(!display)}>
            <TextComponent.SemiBold size={10} color={colors.neutral[350]}>
              View more
            </TextComponent.SemiBold>
            <Spacer width={3} />
            {display ? (
              <ChevronUp size="16" />
            ) : (
              <ChevronDown size="16" color={colors.neutral[350]} />
            )}
          </TouchableOpacity>
        </View>
        {display && <OrderItemDescription />}

        <Spacer height={20} />
        <View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.statusItem}>
              <CheckmarkCircleicon size="30" />
              <View style={styles.line} />
            </View>
            <Spacer width={15} />
            <View>
              <TextComponent.SemiBold size={16} color={colors.neutral[350]}>
                Accepted
              </TextComponent.SemiBold>
              <TextComponent.Regular color={colors.neutral[250]}>
                Your order has been accepted
              </TextComponent.Regular>
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View style={styles.statusItem}>
              <CheckmarkCircleicon size="30" />
              <View
                style={[styles.line, {backgroundColor: colors.neutral[150]}]}
              />
            </View>
            <Spacer width={15} />
            <View>
              <TextComponent.SemiBold size={16} color={colors.neutral[350]}>
                Order Processing
              </TextComponent.SemiBold>
              <TextComponent.Regular color={colors.neutral[250]}>
                Processing your order
              </TextComponent.Regular>
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View style={styles.statusItem}>
              <CheckmarkCircleicon size="30" color={colors.neutral[150]} />
              <View
                style={[styles.line, {backgroundColor: colors.neutral[150]}]}
              />
            </View>
            <Spacer width={15} />
            <View>
              <TextComponent.SemiBold size={16} color={colors.neutral[350]}>
                In Transit
              </TextComponent.SemiBold>
              <TextComponent.Regular color={colors.neutral[250]}>
                Your order it’s on the way
              </TextComponent.Regular>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.statusItem}>
              <CheckmarkCircleicon size="30" color={colors.neutral[150]} />
            </View>
            <Spacer width={15} />
            <View>
              <TextComponent.SemiBold size={16} color={colors.neutral[350]}>
                Delivered
              </TextComponent.SemiBold>
              <TextComponent.Regular color={colors.neutral[250]}>
                Your order has been delivered
              </TextComponent.Regular>
            </View>
          </View>
        </View>
      </Container.Scroll>
    </Container.Padding>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  image: {
    width: moderateScale(75),
    height: moderateScale(70),
    borderWidth: 1,
    borderRadius: moderateScale(8),
    borderColor: colors.neutral[150],
    marginRight: horizontalScale(15),
    marginTop: 4,
  },
  orderItem: {
    borderWidth: 1,
    borderRadius: moderateScale(8),
    borderColor: colors.neutral[150],
    paddingTop: moderateScale(12),
    marginBottom: verticalScale(15),
  },
  viewMore: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: moderateScale(10),
    borderTopWidth: 1,
    borderColor: colors.neutral[150],
  },
  orderInner: {
    flexDirection: 'row',
    paddingHorizontal: moderateScale(9),
    marginBottom: moderateScale(20),
  },
  color: {
    width: moderateScale(12),
    height: moderateScale(12),
    backgroundColor: 'black',
    borderRadius: 7,
    marginVertical: 4,
  },
  priceStatus: {
    justifyContent: 'space-between',
    marginTop: 4,
    flex: 1,
  },
  status: {
    paddingHorizontal: moderateScale(10),
    backgroundColor: '#FFA500',
    borderRadius: 6,
    paddingVertical: verticalScale(4),
  },
  line: {
    width: moderateScale(6),
    backgroundColor: colors.primary[800],
    height: moderateScale(60),
    marginTop: -2,
    zIndex: -10,
  },
  statusItem: {
    // marginTop: verticalScale(4),
    alignItems: 'center',
  },
});
