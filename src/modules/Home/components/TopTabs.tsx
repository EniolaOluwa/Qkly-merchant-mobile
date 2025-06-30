import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useCallback} from 'react';
import {TopTabData} from '@utils/data';
import {horizontalScale, moderateScale, verticalScale} from '@utils/responsive';
import {appStyle} from '@utils/styles';
import colors from '@utils/colors';
import Spacer from '@components/Spacer';
import TextComponent from '@components/Text/textComponent';
import {TopDataType} from 'App-Data-Types';

type ItemProps = {
  item: TopDataType;
  pressItem: (value: TopDataType) => void;
  activeTab: string;
};
const RenderItem = ({item, pressItem, activeTab}: ItemProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.item]}
      onPress={() => pressItem(item)}>
      <View style={appStyle.flexRowCenter}>
        <View
          style={[styles.icon, item?.title === activeTab && styles.activeIcon]}>
          {item?.icon(item?.title === activeTab ? 'white' : 'black')}
        </View>
        <TextComponent.Regular size={12}>{item.title}</TextComponent.Regular>
      </View>
      <Spacer height={11} />
      <TextComponent.SemiBold size={13}>{item?.balance}</TextComponent.SemiBold>
    </TouchableOpacity>
  );
};
const TopTabs = ({activeTab, setActiveTab}) => {
  const pressItem = useCallback(value => {
    setActiveTab(value.title);
  }, []);
  return (
    <View style={[appStyle.flexRowSpaceCenter, {paddingHorizontal: 1}]}>
      {TopTabData.map(t => (
        <RenderItem
          item={t}
          key={t?.title}
          pressItem={pressItem}
          activeTab={activeTab}
        />
      ))}
    </View>
  );
};

export default TopTabs;

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: moderateScale(10),
    borderRadius: 12,
    width: '32%',
    marginTop: verticalScale(10),
    paddingTop: moderateScale(16),
    paddingBottom: moderateScale(20),
    ...appStyle.shadow,
    backgroundColor: colors.white,
    shadowColor: 'black',
  },
  icon: {
    width: moderateScale(35),
    height: moderateScale(35),
    borderRadius: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.neutral[50],
    marginRight: horizontalScale(8),
  },
  activeIcon: {
    backgroundColor: colors.primary[800],
  },
});
