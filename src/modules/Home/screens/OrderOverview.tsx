import {Pressable, View} from 'react-native';
import React from 'react';
import {appStyle} from '@utils/styles';
import TextComponent from '@components/Text/textComponent';
import ChevronDown from '@assets/vector/ChevronDown';
import colors from '@utils/colors';
import Spacer from '@components/Spacer';
import OrderItem from '@modules/Shop/components/OrderItem';

const OrderOverview = () => {
  return (
    <View style={appStyle.flex1}>
      <Pressable style={[appStyle.flexRowCenter, {alignSelf: 'flex-end'}]}>
        <TextComponent.SemiBold color={colors.primary[800]}>
          Delivered
        </TextComponent.SemiBold>
        <Spacer width={5} />
        <ChevronDown size="14" color={colors.primary[800]} />
      </Pressable>
      {[...Array(5)].map((_, i) => (
        <OrderItem key={i} />
      ))}
    </View>
  );
};

export default OrderOverview;
