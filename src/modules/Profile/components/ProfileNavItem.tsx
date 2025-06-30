import {Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {
  AuthenticatedNavigationProps,
  AuthenticatedStackParamList,
} from 'navigation-route-type';
import {moderateScale} from '@utils/responsive';
import colors from '@utils/colors';
import TextComponent from '@components/Text/textComponent';
import Spacer from '@components/Spacer';
import {useNavigation} from '@react-navigation/native';

type Props = {
  icon: () => React.JSX.Element;
  title: string;
  navigation?: keyof AuthenticatedStackParamList;
  onPress?: () => void;
  noBorder?: boolean;
};
const ProfileNavItem = ({
  navigation,
  icon,
  title,
  onPress,
  noBorder,
}: Props) => {
  const {navigate} = useNavigation<AuthenticatedNavigationProps>();

  const pressItem = () => {
    onPress ? onPress() : navigate(navigation);
  };
  return (
    <Pressable
      style={[styles.container, noBorder && {borderBottomWidth: 0}]}
      onPress={pressItem}>
      {icon()}
      <Spacer width={14} />
      <TextComponent.Regular>{title}</TextComponent.Regular>
    </Pressable>
  );
};

export default ProfileNavItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: moderateScale(24),
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral[100],
  },
});
