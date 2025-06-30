import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import {ProfileImage} from '@assets/images';
import {horizontalScale, moderateScale} from '@utils/responsive';
import TextComponent from '@components/Text/textComponent';
import colors from '@utils/colors';
import Spacer from '@components/Spacer';
import NotificationIcon from '@assets/vector/NotificationIcon';
import {useNavigation} from '@react-navigation/native';
import {AuthenticatedNavigationProps} from 'navigation-route-type';
import InsetSpacer from '@components/Spacer/InsetSpacer';
import FastImage from '@d11/react-native-fast-image';

const HomeHeader = () => {
  const {navigate} = useNavigation<AuthenticatedNavigationProps>();
  return (
    <>
      <InsetSpacer />
      <View style={styles.container}>
        <FastImage source={ProfileImage} style={styles.image} />
        <View style={{width: '65%'}}>
          <TextComponent.SemiBold size={18} numberOfLines={1}>
            Hello Businessname
          </TextComponent.SemiBold>
          <TextComponent.Regular color={colors.neutral[200]}>
            Lagos State
          </TextComponent.Regular>
        </View>
        <Spacer width={20} flex={1} />
        <Pressable>
          <NotificationIcon />
        </Pressable>
      </View>
    </>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
  },
  image: {
    width: moderateScale(45),
    height: moderateScale(45),
    borderRadius: moderateScale(30),
    marginRight: horizontalScale(18),
  },
});
