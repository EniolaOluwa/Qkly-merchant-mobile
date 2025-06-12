import {KeyboardAvoidingView, Platform, View, ViewStyle} from 'react-native';
import React from 'react';
import {appStyle} from '@utils/styles';
import colors from '@utils/colors';
import InsetSpacer from '@components/Spacer/InsetSpacer';

type ContainerType = 'Normal' | 'Keyboard' | 'Padding';
interface Props {
  children: React.ReactElement | React.ReactNode;
  style?: ViewStyle;
}
interface KeyboardProps extends Props {
  behavior: 'height' | 'padding';
}
const Container: Record<ContainerType, React.FC<Props>> = {
  Normal: ({children, style}) => {
    return (
      <View style={[appStyle.flex1, {backgroundColor: colors.white}, style]}>
        {children}
      </View>
    );
  },
  Padding: ({children, style}) => {
    return (
      <View
        style={[appStyle.container, {backgroundColor: colors.white}, style]}>
        <InsetSpacer />
        {children}
        <InsetSpacer type="bottom" />
      </View>
    );
  },
  Keyboard: ({children, style}: KeyboardProps) => {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={[appStyle.container, {backgroundColor: colors.white}, style]}>
        <InsetSpacer />
        {children}
      </KeyboardAvoidingView>
    );
  },
};

export default Container;
