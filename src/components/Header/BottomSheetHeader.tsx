import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import TextComponent from '@components/Text/textComponent';
import Spacer from '@components/Spacer';
import CancelIcon from '@assets/vector/CancelIcon';
import {appStyle} from '@utils/styles';
import {moderateScale} from '@utils/responsive';
import colors from '@utils/colors';

type Props = {
  title: string;
  desc?: string | React.ReactNode;
  onClose: () => void;
};

const BottomSheetHeader: React.FC<Props> = ({title, desc, onClose}) => {
  return (
    <View style={[appStyle.flexRowSpace, {marginTop: 10, marginBottom: 20}]}>
      <View style={{width: '80%'}}>
        <TextComponent.Bold color={colors.textPrimary} size={24}>
          {title}
        </TextComponent.Bold>
        <Spacer height={3} />
        {desc && (
          <TextComponent.Regular color={colors.textPrimary}>
            {desc}
          </TextComponent.Regular>
        )}
      </View>
      <Pressable style={styles.icon} onPress={onClose}>
        <CancelIcon />
      </Pressable>
    </View>
  );
};

export default BottomSheetHeader;

const styles = StyleSheet.create({
  icon: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.neutral[100],
  },
});
