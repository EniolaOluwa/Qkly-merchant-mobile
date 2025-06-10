import {StyleSheet, View} from 'react-native';
import React from 'react';
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {screenWidth} from '@utils/responsive';
import colors from '@utils/colors';

type Props = {
  data: any[];
  scrollX: SharedValue<number>;
};

const PaginationDot = ({scrollX, index}) => {
  const stylez = useAnimatedStyle(() => {
    const widthRes = interpolate(
      scrollX.value,
      [
        (index - 1) * screenWidth,
        index * screenWidth,
        (index + 1) * screenWidth,
      ],
      [20, 12, 20],
      Extrapolation.CLAMP,
    );
    const height = interpolate(
      scrollX.value,
      [
        (index - 1) * screenWidth,
        index * screenWidth,
        (index + 1) * screenWidth,
      ],
      [8, 12, 8],
      Extrapolation.CLAMP,
    );

    const backgroundColor = interpolateColor(
      scrollX.value,
      [
        (index - 1) * screenWidth,
        index * screenWidth,
        (index + 1) * screenWidth,
      ],
      [colors.neutral[50], colors.white, colors.neutral[50]],
    );

    return {
      width: widthRes,
      backgroundColor,
      height,
    };
  });
  return <Animated.View style={[styles.slidder, stylez]} />;
};

const OnboardSlider = ({data, scrollX}: Props) => {
  return (
    <View style={styles.slidesContainer}>
      {data.map((_, ind) => (
        <PaginationDot key={ind} index={ind} scrollX={scrollX} />
      ))}
    </View>
  );
};

export default OnboardSlider;

const styles = StyleSheet.create({
  slidder: {
    marginRight: 10,
    borderRadius: 24,
  },
  slidesContainer: {
    marginTop: 20,
    height: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
