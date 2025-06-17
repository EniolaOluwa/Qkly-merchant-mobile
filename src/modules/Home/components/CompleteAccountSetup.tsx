import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useRef} from 'react';
import colors from '@utils/colors';
import {appStyle} from '@utils/styles';
import {BottomSheetModal, BottomSheetScrollView} from '@gorhom/bottom-sheet';
import TextComponent from '@components/Text/textComponent';
import Spacer from '@components/Spacer';
import {moderateScale} from '@utils/responsive';
import BottomSheetComponent from '@components/BottomSheetComponent';
import BottomSheetHeader from '@components/Header/BottomSheetHeader';
import CheckmarkCircleicon from '@assets/vector/CheckmarkCircleicon';
import LockIcon from '@assets/vector/LockIcon';
import OrderBoxIcon from '@assets/vector/OrderBoxIcon';
import ShareIcon from '@assets/vector/ShareIcon';

const CompleteAccountSetup = () => {
  const sheetRef = useRef<BottomSheetModal>(null);

  const closeSheet = () => sheetRef.current.dismiss();
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.7}
        onPress={() => sheetRef?.current?.present()}>
        <View>
          <TextComponent.Bold size={12} color={colors.warning[250]}>
            2/3
          </TextComponent.Bold>
          <Spacer height={8} />
          <TextComponent.Bold size={12} color={colors.neutral[400]}>
            Complete your account Setup
          </TextComponent.Bold>
        </View>
        <View style={styles.btn}>
          <TextComponent.Bold color={colors.white} size={10}>
            See Pending
          </TextComponent.Bold>
        </View>
      </TouchableOpacity>
      <BottomSheetComponent snapPoint="70%" sheetref={sheetRef}>
        <BottomSheetHeader
          onClose={closeSheet}
          title="Setup your To-Do List"
          desc="Complete these steps to launch your store and start selling"
        />

        <BottomSheetScrollView showsVerticalScrollIndicator={false}>
          <Spacer height={10} />
          <TouchableOpacity style={styles.listitemContainer}>
            <View style={styles.icon}>
              <LockIcon />
            </View>
            <View>
              <TextComponent.SemiBold>
                Create Transaction PIN
              </TextComponent.SemiBold>
              <Spacer height={3} />
              <TextComponent.Regular size={10}>
                Create a PIN for secure payments
              </TextComponent.Regular>
            </View>
            <Spacer flex={1} />
            <CheckmarkCircleicon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listitemContainer}>
            <View style={styles.icon}>
              <OrderBoxIcon />
            </View>
            <View>
              <TextComponent.SemiBold>
                Add Your First Product
              </TextComponent.SemiBold>
              <Spacer height={3} />
              <TextComponent.Regular size={10}>
                Upload photos, name, price, and description
              </TextComponent.Regular>
            </View>
            <Spacer flex={1} />
            {/* <CheckmarkCircleicon /> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.listitemContainer}>
            <View style={styles.icon}>
              <OrderBoxIcon />
            </View>
            <View>
              <TextComponent.SemiBold>
                Store Customization
              </TextComponent.SemiBold>
              <Spacer height={3} />
              <TextComponent.Regular size={10}>
                Upload photos, name, price, and description
              </TextComponent.Regular>
            </View>
            <Spacer flex={1} />
            {/* <CheckmarkCircleicon /> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.listitemContainer}>
            <View style={styles.icon}>
              <ShareIcon />
            </View>
            <View>
              <TextComponent.SemiBold>
                Share Your Store Link
              </TextComponent.SemiBold>
              <Spacer height={3} />
              <TextComponent.Regular size={10}>
                Promote your store via contacts or social media
              </TextComponent.Regular>
            </View>
            <Spacer flex={1} />
            {/* <CheckmarkCircleicon /> */}
          </TouchableOpacity>
        </BottomSheetScrollView>
      </BottomSheetComponent>
    </>
  );
};

export default CompleteAccountSetup;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.warning[50],
    marginTop: moderateScale(20),
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    ...appStyle.flexRowSpaceCenter,
    borderWidth: 1,
    borderColor: colors.warning[250],
  },
  btn: {
    backgroundColor: colors.black,
    paddingHorizontal: 11,
    borderRadius: 9,
    paddingVertical: 8,
  },
  icon: {
    backgroundColor: colors.primary[50],
    borderRadius: 30,
    width: moderateScale(35),
    height: moderateScale(35),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  listitemContainer: {
    flexDirection: 'row',
    borderRadius: moderateScale(14),
    marginBottom: 10,
    paddingVertical: moderateScale(18),
    paddingHorizontal: moderateScale(12),
    alignItems: 'center',
    ...appStyle.shadow,
    backgroundColor: colors.white,
    width: '99%',
    alignSelf: 'center',
  },
});
