import {Pressable, View} from 'react-native';
import React from 'react';
import {appStyle} from '@utils/styles';
import TextComponent from '@components/Text/textComponent';
import colors from '@utils/colors';
import OrderItem from '@modules/Shop/components/OrderItem';

const OrderOverview = () => {
  return (
    <View style={appStyle.flex1}>
      <Pressable style={{alignSelf: 'flex-end'}}>
        <TextComponent.SemiBold
          color={colors.primary[800]}
          style={{textDecorationLine: 'underline'}}>
          See all
        </TextComponent.SemiBold>
      </Pressable>
      {[...Array(5)].map((_, i) => (
        <OrderItem key={i} />
      ))}
    </View>
  );
};

export default OrderOverview;
