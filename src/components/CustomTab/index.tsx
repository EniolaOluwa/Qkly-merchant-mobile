import TextComponent from '@components/Text/textComponent';
import colors from '@utils/colors';
import {horizontalSpacer, moderateScale} from '@utils/responsive';
import React, {useCallback} from 'react';
import {View, Pressable, Dimensions, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolateColor,
} from 'react-native-reanimated';

const {width} = Dimensions.get('window');

type Props = {
  setSelectedTab: (value: string) => void;
  selectedTab: string;
  tabs: string[];
};
export default function AnimatedTopTabs({
  setSelectedTab,
  selectedTab,
  tabs: TABS,
}: Props) {
  const TAB_WIDTH =
    (width - (horizontalSpacer + horizontalSpacer)) / TABS.length;
  const animatedIndex = useSharedValue(0);

  const onTabPress = useCallback((index: number) => {
    setSelectedTab(TABS[index]);
    animatedIndex.value = index;
  }, []);

  const highlightStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withTiming(animatedIndex.value * TAB_WIDTH, {
          duration: 300,
        }),
      },
    ],
    backgroundColor: interpolateColor(
      animatedIndex.value,
      TABS.map((_, index) => index),
      ['#00756F', '#00756F', '#00756F'],
    ),
  }));

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.highlight, highlightStyle, {width: TAB_WIDTH}]}
      />
      {TABS.map((tab, i) => {
        return (
          <Pressable
            key={i}
            style={[styles.tab, {width: TAB_WIDTH}]}
            onPress={() => onTabPress(i)}>
            <TextComponent.Regular
              color={tab === selectedTab ? colors.white : colors.neutral[200]}
              center>
              {tab}
            </TextComponent.Regular>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#EAEDF0',
    borderRadius: 10,
    overflow: 'hidden',
    width: '100%',
    justifyContent: 'space-between',
  },
  tab: {
    paddingVertical: moderateScale(10),
    alignItems: 'center',
    zIndex: 1,
    justifyContent: 'center',
  },

  highlight: {
    position: 'absolute',
    height: '100%',
    borderRadius: 10,
    zIndex: 0,
  },
});
