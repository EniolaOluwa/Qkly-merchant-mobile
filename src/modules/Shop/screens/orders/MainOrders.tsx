import {FlatList, Pressable, View} from 'react-native';
import React from 'react';
import {appStyle} from '@utils/styles';
import TextComponent from '@components/Text/textComponent';
import colors from '@utils/colors';
import Spacer from '@components/Spacer';
import ChevronDown from '@assets/vector/ChevronDown';
import OrderItem from '@modules/Shop/components/OrderItem';

const MainOrders = () => {
  return (
    <View style={appStyle.flex1}>
      <Pressable style={[appStyle.flexRowCenter, {alignSelf: 'flex-end'}]}>
        <TextComponent.SemiBold color={colors.primary[800]}>
          Delivered
        </TextComponent.SemiBold>
        <Spacer width={5} />
        <ChevronDown size="14" color={colors.primary[800]} />
      </Pressable>

      <FlatList
        data={[...Array(20)]}
        keyExtractor={(_, i) => i.toString()}
        renderItem={() => <OrderItem />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default MainOrders;
