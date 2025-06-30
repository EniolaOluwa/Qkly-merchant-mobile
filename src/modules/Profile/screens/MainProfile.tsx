import {StyleSheet, View} from 'react-native';
import React from 'react';
import Container from '@components/Container';
import InsetSpacer from '@components/Spacer/InsetSpacer';
import FastImage from '@d11/react-native-fast-image';
import {ProfileImage} from '@assets/images';
import {horizontalSpacer, moderateScale} from '@utils/responsive';
import Spacer from '@components/Spacer';
import TitleSubHeader from '../components/TitleSubHeader';
import ProfileNavItem from '../components/ProfileNavItem';
import IdCardIcon from '@assets/vector/IdCardIcon';
import InsightIcon from '@assets/vector/InsightIcon';
import ShopOutlineIcon from '@assets/vector/ShopOutlineIcon';
import colors from '@utils/colors';
import ProfileOutlineIcon from '@assets/vector/ProfileOutlineIcon';
import PadlockIcon from '@assets/vector/PadlockIcon';
import InviteIcon from '@assets/vector/InviteIcon';
import {appStyle} from '@utils/styles';
import HeadphoneIcon from '@assets/vector/HeadphoneIcon';
import DocumentIcon from '@assets/vector/DocumentIcon';

const MainProfile = () => {
  return (
    <View style={[appStyle.flex1, {backgroundColor: colors.white}]}>
      <InsetSpacer />
      <Container.Scroll>
        <FastImage source={ProfileImage} style={styles.image} />
        <Spacer height={40} />
        <TitleSubHeader title="Business Profile" />
        <View style={{padding: horizontalSpacer}}>
          <ProfileNavItem title="Business Details" icon={IdCardIcon} />
          <ProfileNavItem title="Insight" icon={InsightIcon} />
          <ProfileNavItem
            title="Store Customization"
            icon={() => ShopOutlineIcon({color: colors.black, size: '20'})}
            noBorder
          />
        </View>
        <TitleSubHeader title="Personal Profile" />
        <View style={{padding: horizontalSpacer}}>
          <ProfileNavItem
            title="Profile Details"
            icon={() => ProfileOutlineIcon({color: colors.black, size: '20'})}
          />
          <ProfileNavItem title="Invite Friends" icon={InviteIcon} noBorder />
        </View>
        <TitleSubHeader title="Security & Privacy" />
        <View style={{padding: horizontalSpacer}}>
          <ProfileNavItem
            title="Change Password"
            icon={PadlockIcon}
            navigation="ChangePassword"
          />
          <ProfileNavItem
            title="Change PIN"
            icon={PadlockIcon}
            noBorder
            navigation="ChangePin"
          />
        </View>
        <TitleSubHeader title="Support & Help" />
        <View style={{padding: horizontalSpacer}}>
          <ProfileNavItem
            title="Contact Customer support"
            icon={HeadphoneIcon}
          />
          <ProfileNavItem
            title="Terms & Privacy Policy"
            icon={DocumentIcon}
            noBorder
          />
        </View>
      </Container.Scroll>
    </View>
  );
};

export default MainProfile;

const styles = StyleSheet.create({
  image: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(30),
    alignSelf: 'center',
  },
});
