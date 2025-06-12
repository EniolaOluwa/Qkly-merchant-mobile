import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  View,
  TouchableOpacityProps,
} from 'react-native';
import colors from '@utils/colors';
import {horizontalScale, moderateScale} from '@utils/responsive';
import TextComponent from '@components/Text/textComponent';

// Base prop type for both buttons
interface Props extends TouchableOpacityProps {
  children: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
  disable?: boolean;
  textColor?: string;
  rightIcon?: React.ReactNode;
  textSize?: number;
}

// Specific prop types for Outline button (with leftIcon)
interface OutlineProps extends Props {
  leftIcon?: React.ReactNode; // leftIcon only for Outline button
}

// Primary Button Component
const PrimaryButton: React.FC<Props> = ({
  children,
  style,
  rightIcon,
  disable,
  textColor,
  textSize,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles.btn, styles.wideBtn, disable && {opacity: 0.3}, style]}
      disabled={disable}
      activeOpacity={0.7}
      {...props}>
      <TextComponent.SemiBold color={textColor || colors.white} size={textSize}>
        {children}
      </TextComponent.SemiBold>
      {rightIcon && (
        <View style={{marginLeft: horizontalScale(10)}}>{rightIcon}</View>
      )}
    </TouchableOpacity>
  );
};

// Outline Button Component
const OutlineButton: React.FC<OutlineProps> = ({
  children,
  style,
  leftIcon,
  disable,
  textColor,
  rightIcon,
  textSize,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles.btn, styles.outlineBtn, disable && {opacity: 0.4}, style]}
      {...props}>
      {leftIcon && (
        <View style={{marginRight: horizontalScale(10)}}>{leftIcon}</View>
      )}
      <TextComponent.Regular color={textColor || colors.black} size={textSize}>
        {children}
      </TextComponent.Regular>
      {rightIcon && (
        <View style={{marginLeft: horizontalScale(10)}}>{rightIcon}</View>
      )}
    </TouchableOpacity>
  );
};

// Styles
const styles = StyleSheet.create({
  btn: {
    width: '100%',
    height: moderateScale(54),
    borderRadius: moderateScale(8),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  wideBtn: {
    backgroundColor: colors.primary[800],
  },
  outlineBtn: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.primary[600],
  },
  spacer: {
    marginLeft: moderateScale(10),
  },
});

// Exporting both buttons

const Buttons = {
  Primary: PrimaryButton,
  Outline: OutlineButton,
};
export default Buttons;
