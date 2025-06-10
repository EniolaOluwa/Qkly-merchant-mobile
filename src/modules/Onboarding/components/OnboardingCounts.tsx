import {StyleSheet, View} from 'react-native';
import React from 'react';
import {appStyle} from '@utils/styles';
import {horizontalScale, moderateScale} from '@utils/responsive';
import colors from '@utils/colors';

type Props = {
  count: number;
};
const OnboardingCounts = ({count}: Props) => {
  return (
    <View style={appStyle.flexRowCenter}>
      {[...Array(6)].map((_, i) => (
        <View
          key={i}
          style={[styles.container, i + 1 === count && styles.valid]}
        />
      ))}
    </View>
  );
};

export default OnboardingCounts;

const styles = StyleSheet.create({
  container: {
    width: moderateScale(38),
    height: moderateScale(6),
    borderRadius: 10,
    backgroundColor: colors.neutral[150],
    marginRight: horizontalScale(6),
  },
  valid: {
    backgroundColor: colors.primary[700],
  },
});
