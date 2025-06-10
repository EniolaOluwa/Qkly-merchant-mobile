import {Pressable, StyleSheet, View, ViewStyle} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {appStyle} from '@utils/styles';
import colors from '@utils/colors';
import BackArrow from '@assets/vector/BackArrow';
import Spacer from '@components/Spacer';
import TextComponent from '@components/Text/textComponent';

type Props = {
  title?: string;
  desc?: string;
  goBackFunc?: () => void;
  descElement?: React.ReactNode;
  sideElement?: React.ReactNode;
  style?: ViewStyle;
};
const Header = ({
  desc,
  descElement,
  title,
  sideElement,
  goBackFunc,
  style,
}: Props) => {
  const {goBack} = useNavigation();
  return (
    <View style={{zIndex: 100, ...style}}>
      <View style={appStyle.flexRowSpaceCenter}>
        <Pressable
          style={styles.icon}
          onPress={() => (goBackFunc ? goBackFunc() : goBack())}>
          <BackArrow />
        </Pressable>
        {sideElement || <></>}
      </View>
      {title && (
        <>
          <Spacer height={14} />
          <TextComponent.Bold size={24} color={colors.textPrimary}>
            {title}
          </TextComponent.Bold>
          <Spacer height={10} />
        </>
      )}
      {descElement ? (
        descElement
      ) : desc ? (
        <TextComponent.Regular
          color={colors.textPrimary}
          style={{lineHeight: 22, width: '95%', fontWeight: '400'}}>
          {desc}
        </TextComponent.Regular>
      ) : null}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  icon: {
    height: 40,
    width: 40,
    borderRadius: 52 / 2,
    backgroundColor: '#D1D3D633',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
