import {StyleSheet, View} from 'react-native';
import React from 'react';
import FastImage from '@d11/react-native-fast-image';
import {NoTransactionImage} from '@assets/images';
import {moderateScale, verticalScale} from '@utils/responsive';
import TextComponent from '@components/Text/textComponent';
import Spacer from '@components/Spacer';
import colors from '@utils/colors';

type Props = {
  title: string;
  desc: string;
};
const EmptyState = ({title, desc}: Props) => {
  return (
    <View style={styles.container}>
      <FastImage
        source={NoTransactionImage}
        style={styles.image}
        resizeMode="contain"
      />
      <Spacer height={20} />
      <TextComponent.Bold size={22} center color={colors.textPrimary}>
        {title}
      </TextComponent.Bold>
      <Spacer height={5} />
      <TextComponent.Regular
        center
        style={{width: '80%'}}
        color={colors.neutral[200]}>
        {desc}
      </TextComponent.Regular>
    </View>
  );
};

export default EmptyState;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: verticalScale(40),
    width: '100%',
  },
  image: {
    width: moderateScale(120),
    height: moderateScale(120),
  },
});
