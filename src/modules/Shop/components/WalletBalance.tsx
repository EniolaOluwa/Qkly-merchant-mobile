import {Pressable, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import colors from '@utils/colors';
import {moderateScale, verticalScale} from '@utils/responsive';
import TextComponent from '@components/Text/textComponent';
import EyeClosedBoldIcon from '@assets/vector/EyeClosedBoldIcon';
import {appStyle} from '@utils/styles';
import Spacer from '@components/Spacer';
import PlusIcon from '@assets/vector/PlusIcon';
import Sendicon from '@assets/vector/Sendicon';
import {useNavigation} from '@react-navigation/native';
import {AuthenticatedNavigationProps} from 'navigation-route-type';

const WalletBalance = () => {
  const {navigate} = useNavigation<AuthenticatedNavigationProps>();
  const navToSend = () => navigate('SendMoney');
  const navToAdd = () => navigate('AddMoney');

  return (
    <View style={styles.container}>
      <View style={appStyle.flexRowSpaceCenter}>
        <TextComponent.Regular color={colors.white}>
          Wallet Balance
        </TextComponent.Regular>
        <Pressable>
          <EyeClosedBoldIcon color={colors.white} />
        </Pressable>
      </View>
      <TextComponent.Bold color={colors.white} size={24}>
        ₦2000.00
      </TextComponent.Bold>
      <Spacer height={35} />
      <View style={appStyle.flexRowCenter}>
        <TouchableOpacity
          style={[styles.btn, styles.add]}
          activeOpacity={0.6}
          onPress={navToAdd}>
          <PlusIcon />
          <Spacer width={8} />
          <TextComponent.SemiBold size={13} color={colors.white}>
            Add
          </TextComponent.SemiBold>
        </TouchableOpacity>
        <Spacer width={8} />
        <TouchableOpacity
          style={[styles.btn, styles.send]}
          activeOpacity={0.6}
          onPress={navToSend}>
          <Sendicon />
          <Spacer width={8} />
          <TextComponent.SemiBold size={13} color={colors.white}>
            Send
          </TextComponent.SemiBold>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WalletBalance;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary[800],
    width: '100%',
    borderRadius: moderateScale(16),
    padding: moderateScale(20),
    marginBottom: verticalScale(10),
  },
  btn: {
    backgroundColor: '#00ADA499',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(12),
    paddingVertical: moderateScale(9),
    borderColor: colors.primary[500],
  },
  add: {
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  send: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
});
