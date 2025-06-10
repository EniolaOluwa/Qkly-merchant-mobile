import ChevronDown from '@assets/vector/ChevronDown';
import TextComponent from '@components/Text/textComponent';
import colors from '@utils/colors';
import {moderateScale} from '@utils/responsive';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

const makeIcon = () => <ChevronDown />;

type PropsType = {
  placeholder: string;
  label?: string;
  errorText?: string;
  onChange: (value: any) => void;
  data: {labelField: string; valueField: string}[];
  searchPlaceholder?: string;
  value:
    | string
    | {
        key: number;
        labelField: string;
        valueField: string;
        id: string;
      };
  disabled?: boolean;
  search?: boolean;
  error?: boolean;
};

const DropdownComponent: React.FC<PropsType> = ({
  placeholder,
  label,
  errorText,
  onChange,
  data,
  searchPlaceholder,
  disabled = false,
  search = false,
  value,
  error,
}) => {
  const [focus, setFocus] = useState(false);

  const onFocus = () => setFocus(true);
  const onBlur = () => setFocus(false);

  return (
    <View>
      {label && (
        <TextComponent.Regular
          color={colors.neutral[400]}
          style={{marginBottom: 7}}>
          {label}
        </TextComponent.Regular>
      )}
      <View style={{height: moderateScale(56), marginBottom: error ? 0 : 15}}>
        <Dropdown
          value={value}
          disable={disabled}
          keyboardAvoiding={false}
          search={search}
          searchField="labelField"
          dropdownPosition="bottom"
          inverted={false}
          fontFamily="OpenSans-Regular"
          searchPlaceholder={searchPlaceholder}
          placeholderStyle={[
            styles.inputStyle,
            {
              color: '#A9B0B8',
            },
          ]}
          itemTextStyle={styles.itemTextStyle}
          selectedTextStyle={styles.selectedTextStyle}
          itemContainerStyle={styles.itemContainerStyle}
          labelField={'labelField'}
          valueField={'valueField'}
          data={data}
          onChange={onChange}
          renderRightIcon={makeIcon}
          style={[
            styles.dropdown,
            error && styles.errorBorder,
            focus && !error && styles.successBorder,
          ]}
          placeholder={placeholder}
          onBlur={onBlur}
          onFocus={onFocus}
        />
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

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    height: moderateScale(56),
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 8,
    color: colors.neutral[400],
    fontFamily: 'OpenSans-Regular',
    fontSize: moderateScale(14),
    paddingHorizontal: moderateScale(15),
    backgroundColor: colors.white,
    borderColor: colors.neutral[150],
  },
  inputStyle: {
    color: colors.neutral[400],
    fontFamily: 'OpenSans-Light',
    fontSize: moderateScale(14),
  },
  selectedTextStyle: {
    fontFamily: 'OpenSans-Regular',
    color: colors.neutral[400],
    fontSize: moderateScale(14),
  },
  itemContainerStyle: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  itemTextStyle: {
    color: colors.neutral[400],
    fontSize: moderateScale(14),
  },
  errorText: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  errorBorder: {
    borderColor: colors.error[100],
    borderWidth: 1,
  },
  successBorder: {
    borderColor: colors.primary[600],
  },
});
