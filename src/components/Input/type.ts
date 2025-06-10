declare module 'input-props' {
  import {
    KeyboardTypeOptions,
    TextInputProps,
    TextStyle,
    ViewStyle,
  } from 'react-native';
  export interface InputProps {
    placeholder?: string;
    style?: ViewStyle;
    containerStyle?: ViewStyle;
    inputStyle?: ViewStyle | TextStyle;
    value?: string;
    error?: boolean;
    errorText?: string;
    label?: string;
    disable?: boolean;
  }

  export interface QklyTextInputProps extends InputProps {
    rightIcon?: React.ReactElement;
    leftIcon?: React.ReactElement;
    value?: string;
    keyboard?: KeyboardTypeOptions;
    inputProps?: TextInputProps;
    onChange?: (val: string) => void;
    bottom?: number;
  }
  export interface QklyPasswordInputProps extends InputProps {
    value?: string;
    inputProps?: TextInputProps;
    onChange?: (val: string) => void;
    bottom?: number;
  }
  export interface QklyDropdownProps extends InputProps {
    value?: string;
    inputProps?: TextInputProps;
    onPress?: () => void;
    leftIcon?: React.ReactElement;
    sheet?: React.ReactNode;
    showChevron?: boolean;
  }
  export interface QklyCheckBoxProps {
    clicked?: boolean;
    setClicked?: React.Dispatch<React.SetStateAction<boolean>>;
    type?: 'square' | 'round';
    labelStyle?: TextStyle;
    label?: string;
    style?: ViewStyle;
  }

  export interface QklyOTPProps {
    cellCount?: number;
    setPin?: React.Dispatch<React.SetStateAction<string>>;
    eyeIcon?: boolean;
    isEncypted?: boolean;
    editable?: boolean;
    pointerEvents?: 'none' | 'auto';
    containerStyle?: ViewStyle;
    inputStyle?: ViewStyle | TextStyle;
    value?: string;
    error?: boolean;
    errorText?: string;
    label?: string;
  }
}
