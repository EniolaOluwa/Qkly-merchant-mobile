import {StyleSheet, TouchableOpacity} from 'react-native';
import React, {forwardRef, useImperativeHandle, useRef, useState} from 'react';
import {BottomSheetFlatList, BottomSheetModal} from '@gorhom/bottom-sheet';
import useDebounce from '@hooks/useDebounce';
import BottomSheetComponent from '@components/BottomSheetComponent';
import BottomSheetHeader from '@components/Header/BottomSheetHeader';
import Inputs from '@components/Input';
import {appStyle} from '@utils/styles';
import {moderateScale} from '@utils/responsive';
import TextComponent from '@components/Text/textComponent';
import colors from '@utils/colors';
import InsetSpacer from '@components/Spacer/InsetSpacer';

const BanKListSheet = ({}, ref) => {
  const sheetRef = useRef<BottomSheetModal>(null);
  const [search, setSearch] = useState('');
  const debounceInput = useDebounce(search, 300);
  const closeSheet = () => sheetRef.current.dismiss();

  useImperativeHandle(ref, () => ({
    openSheet() {
      sheetRef?.current?.present();
    },
  }));

  return (
    <BottomSheetComponent snapPoint="80%" sheetref={sheetRef}>
      <BottomSheetHeader title="Select Bank" onClose={closeSheet} />
      <Inputs.Text value={search} onChange={setSearch} />
      <BottomSheetFlatList
        data={[1, 2, 3, 44, 4, 6, 7, 8]}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[
              styles.eachBank,
              {
                backgroundColor: 'transparent',
              },
            ]}>
            <TextComponent.SemiBold
              color={colors.neutral[400]}
              style={{textTransform: 'uppercase', width: '100%'}}>
              Keystone bank
            </TextComponent.SemiBold>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, i) => i.toString()}
      />
      <InsetSpacer />
    </BottomSheetComponent>
  );
};

export default forwardRef(BanKListSheet);

const styles = StyleSheet.create({
  eachBank: {
    ...appStyle.flexRowCenter,
    paddingVertical: moderateScale(26),
    width: '100%',
    borderBottomWidth: 1,
    borderColor: colors.neutral[150],
  },
});
