import {Pressable, StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {moderateScale, widthRes} from 'utils/responsive';
import {
  // QklyCheckBoxProps,
  // QklyDropdownProps,
  QklyOTPProps,
  QklyPasswordInputProps,
  QklyTextInputProps,
} from 'input-props';
import colors from '@utils/colors';
import TextComponent from '@components/Text/textComponent';
import Spacer from '@components/Spacer';
import EyeOpenedIcon from '@assets/vector/EyeOpenedIcon';
import EyeClosedBoldIcon from '@assets/vector/EyeClosedBoldIcon';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {appStyle} from '@utils/styles';

//Default input props

const Text: React.FC<QklyTextInputProps> = ({
  placeholder,
  onChange,
  style,
  error,
  value,
  containerStyle,
  leftIcon,
  rightIcon,
  errorText,
  label,
  inputStyle,
  disable,
  bottom = 15,
  keyboard = 'default',
  inputProps,
}) => {
  const [focus, setFocus] = useState(false);

  return (
    <View style={[{width: '100%'}, containerStyle]}>
      {label && (
        <TextComponent.Regular color={colors.neutral[400]}>
          {label}
        </TextComponent.Regular>
      )}
      <View
        style={[
          styles.textInputContainer,
          focus && styles.successBorder,

          {marginBottom: error ? 5 : bottom},
          error && styles.errorBorder,
          style,
        ]}>
        {leftIcon && (
          <>
            {leftIcon}
            <Spacer width={10} />
          </>
        )}
        <TextInput
          autoCapitalize="none"
          placeholder={placeholder}
          onChangeText={onChange}
          style={[styles.input, inputStyle]}
          value={value}
          placeholderTextColor={colors.neutral[200]}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          keyboardType={keyboard}
          cursorColor={colors.primary[700]}
          editable={!disable}
          {...inputProps}
        />
        {rightIcon && rightIcon}
      </View>

      {error && (
        <View style={styles.errorText}>
          <TextComponent.SemiBold
            color={colors.error[150]}
            size={12}
            style={{flex: 1}}>
            {errorText}
          </TextComponent.SemiBold>
        </View>
      )}
    </View>
  );
};

const Password: React.FC<QklyPasswordInputProps> = ({
  placeholder,
  onChange,
  style,
  error,
  value,
  containerStyle,
  errorText,
  label,
  inputStyle,
  disable,
  bottom = 15,
  inputProps,
}) => {
  const [focus, setFocus] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const togglePin = () => setSecureTextEntry(!secureTextEntry);
  return (
    <View style={[{width: '100%'}, containerStyle]}>
      <TextComponent.Regular color={colors.neutral[400]}>
        {label}
      </TextComponent.Regular>
      <View
        style={[
          styles.textInputContainer,
          focus && styles.successBorder,

          {marginBottom: error ? 5 : bottom},
          error && styles.errorBorder,
          style,
        ]}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder={placeholder}
          style={[styles.input, inputStyle]}
          onChangeText={onChange}
          value={value}
          {...inputProps}
          placeholderTextColor={colors.neutral[200]}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          cursorColor={colors.primary[700]}
          editable={!disable}
          secureTextEntry={secureTextEntry}
        />
        <Pressable onPress={togglePin}>
          {!secureTextEntry ? <EyeOpenedIcon /> : <EyeClosedBoldIcon />}
        </Pressable>
      </View>

      {error && (
        <View style={styles.errorText}>
          <TextComponent.SemiBold
            color={colors.error[150]}
            size={12}
            style={{flex: 1}}>
            {errorText}
          </TextComponent.SemiBold>
        </View>
      )}
    </View>
  );
};

const OTP: React.FC<QklyOTPProps> = ({
  cellCount,
  value,
  setPin,
  containerStyle,
  inputStyle,
  error,
  errorText,
  pointerEvents = 'auto',
  label,
}) => {
  // const [enableMask, setEnableMask] = useState(isEncypted);
  const ref = useBlurOnFulfill({value, cellCount: cellCount});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue: setPin,
  });

  const renderCell = ({index, symbol, isFocused}) => {
    // let textChild = null;

    // if (symbol) {
    //   textChild = enableMask ? '•' : symbol;
    // } else if (isFocused) {
    //   textChild = <Cursor />;
    // }

    return (
      <TextComponent.Regular
        color={colors.neutral[400]}
        key={index}
        style={[
          styles.cell,
          isFocused && styles.successBorder,
          {
            width: cellCount === 6 ? widthRes(13.2) : 60,
          },
          error && styles.errorBorder,
        ]}
        onLayout={getCellOnLayoutHandler(index)}>
        {symbol || (isFocused ? <Cursor /> : null)}
      </TextComponent.Regular>
    );
  };
  return (
    <View style={[{width: '100%'}, containerStyle]}>
      {label && (
        <TextComponent.Regular
          color={colors.neutral[400]}
          style={{marginBottom: 7}}>
          {label}
        </TextComponent.Regular>
      )}
      <View
        style={{
          ...appStyle.flexRowSpaceCenter,
          ...inputStyle,
          height: 55,
        }}>
        <View style={{alignItems: 'flex-start'}}>
          {/* @ts-ignore */}
          <CodeField
            ref={ref}
            {...props}
            value={value}
            caretHidden={false}
            onChangeText={setPin}
            cellCount={cellCount}
            rootStyle={{flex: 1}}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={renderCell}
            secureTextEntry
            pointerEvents={pointerEvents}
          />
        </View>
      </View>
      {error && (
        <View style={styles.errorText}>
          <TextComponent.SemiBold
            color={colors.error[150]}
            size={12}
            style={{flex: 1}}>
            {errorText}
          </TextComponent.SemiBold>
        </View>
      )}
    </View>
  );
};
const Inputs = {
  Text,
  Password,
  OTP,
};

export default Inputs;

const styles = StyleSheet.create({
  errorBorder: {
    borderColor: colors.error[100],
    borderWidth: 1,
  },
  successBorder: {
    borderColor: colors.primary[600],
  },
  textInputContainer: {
    width: '100%',
    height: moderateScale(56),
    borderRadius: 10,
    backgroundColor: colors.white,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: colors.neutral[150],
    marginTop: 7,
  },
  input: {
    height: '100%',
    fontSize: moderateScale(14),
    fontFamily: 'OpenSans-Light',
    flex: 1,
    color: colors.neutral[400],
  },
  errorText: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    color: colors.neutral[400],
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  cell: {
    height: 52,
    lineHeight: 48,
    fontSize: 16,
    borderRadius: 8,
    backgroundColor: colors.white,
    textAlign: 'center',
    marginRight: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.neutral[150],
  },
});
