import {StyleSheet, Text, TextProps, TextStyle} from 'react-native';
import React from 'react';
import colors from '@utils/colors';
import {moderateScale} from '@utils/responsive';

type TextType = 'Bold' | 'SemiBold' | 'Regular' | 'Light';
interface Props extends TextProps {
  size?: number;
  color?: string;
  center?: boolean;
  children: React.ReactNode;
  style?: TextStyle[] | TextStyle;
  onPress?: () => void;
  textStyle?: TextStyle;
}
const MainText = ({
  size,
  color,
  center,
  children,
  style,
  textStyle,
  ...textProps
}: Props) => (
  <Text
    style={[
      {
        color: color || colors.black,
        fontSize: moderateScale(size) || moderateScale(14),
        lineHeight: moderateScale(size) * 1.5 || moderateScale(15) * 1.5,
      },
      textStyle,
      center && {textAlign: 'center'},
      style,
    ]}
    suppressHighlighting={true}
    {...textProps}>
    {children}
  </Text>
);

const TextComponent: Record<TextType, React.FC<Props>> = {
  Bold: ({size, color, center, children, style, ...textProps}) => (
    <MainText
      size={size}
      style={style}
      children={children}
      center={center}
      color={color}
      textStyle={styles.bold}
      {...textProps}
    />
  ),

  SemiBold: ({size, color, center, children, style, ...textProps}) => (
    <MainText
      size={size}
      style={style}
      textStyle={styles.semiBold}
      children={children}
      center={center}
      color={color}
      {...textProps}
    />
  ),
  Regular: ({size, color, center, children, style, ...textProps}) => (
    <MainText
      size={size}
      style={style}
      textStyle={styles.regular}
      children={children}
      center={center}
      color={color}
      {...textProps}
    />
  ),
  Light: ({size, color, center, children, style, ...textProps}) => (
    <MainText
      size={size}
      style={style}
      textStyle={styles.light}
      children={children}
      center={center}
      color={color}
      {...textProps}
    />
  ),
};

export default TextComponent;

const styles = StyleSheet.create({
  bold: {
    fontFamily: 'OpenSans-Bold',
  },
  semiBold: {
    fontFamily: 'OpenSans-Semibold',
  },
  regular: {
    fontFamily: 'OpenSans-Regular',
  },
  light: {
    fontFamily: 'OpenSans-Light',
  },
});
