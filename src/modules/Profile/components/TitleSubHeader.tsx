import {StyleSheet, View} from 'react-native';
import React from 'react';
import TextComponent from '@components/Text/textComponent';
import colors from '@utils/colors';
import {moderateScale} from '@utils/responsive';

type Props = {
  title: string;
};
const TitleSubHeader = ({title}: Props) => {
  return (
    <View style={styles.container}>
      <TextComponent.SemiBold color={colors.neutral[300]} size={18}>
        {title}
      </TextComponent.SemiBold>
    </View>
  );
};

export default TitleSubHeader;

const styles = StyleSheet.create({
  container: {
    paddingVertical: moderateScale(17),
    paddingHorizontal: moderateScale(24),
    backgroundColor: colors.neutral[150],
  },
});
