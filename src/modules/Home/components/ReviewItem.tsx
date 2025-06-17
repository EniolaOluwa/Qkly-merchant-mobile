import {StyleSheet, View} from 'react-native';
import React from 'react';
import {moderateScale} from '@utils/responsive';
import colors from '@utils/colors';
import TextComponent from '@components/Text/textComponent';
import {appStyle} from '@utils/styles';
import Spacer from '@components/Spacer';
import StarIcon from '@assets/vector/StarIcon';

const ReviewItem = () => {
  return (
    <View style={styles.container}>
      <View style={appStyle.flexRowCenter}>
        <TextComponent.SemiBold>Ifiok Success</TextComponent.SemiBold>
        <Spacer width={8} />
        <TextComponent.Regular color={colors.neutral[200]}>
          on Mar 6, 2025
        </TextComponent.Regular>
      </View>
      <Spacer height={7} />
      <View style={appStyle.flexRowCenter}>
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} />
        ))}
      </View>
      <Spacer height={14} />
      <TextComponent.Regular color={colors.neutral[200]}>
        The Product quality was amazing! Deliver was super fast and all item was
        exactly as described. Highly recommend!
      </TextComponent.Regular>
    </View>
  );
};

export default ReviewItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: moderateScale(18),
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral[150],
  },
});
