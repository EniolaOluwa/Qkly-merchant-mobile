import {StyleSheet, View} from 'react-native';
import React, {useMemo} from 'react';
import TextComponent from '@components/Text/textComponent';
import Spacer from '@components/Spacer';
import colors from '@utils/colors';

const PasswordCheck = ({password}) => {
  const requirements = useMemo(() => {
    return [
      {
        label: '8 characters',
        condition: password.length > 7 ? true : false,
      },
      {
        label: 'Uppercase',
        condition: password.match(/[A-Z]/) ? true : false,
      },
      {
        label: 'lowercase',
        condition: password.match(/[a-z]/) ? true : false,
      },
      {
        label: 'Numbers',
        condition: password.match(/[`!@#$%£^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)
          ? true
          : false,
      },
      {
        label: 'Special Characters',
        condition: password.match(/[1-9]/) ? true : false,
      },
    ];
  }, [password]);

  function areAllFieldsNull(arr: any[]) {
    return arr.every(item => item.condition === true);
  }

  return (
    <>
      <View style={styles.container}>
        {requirements.map(t => (
          <View
            key={t.label}
            style={[styles.item, t.condition && styles.isValid]}>
            <TextComponent.Regular
              size={12}
              color={t.condition ? colors.primary[700] : '#CAB800'}>
              {t.label}
            </TextComponent.Regular>
          </View>
        ))}
      </View>
      <Spacer height={3} />
      <TextComponent.Regular
        size={12}
        color={
          !areAllFieldsNull(requirements) ? '#CAB800' : colors.primary[700]
        }>
        Password: {!areAllFieldsNull(requirements) ? 'Weak' : 'Strong'}
      </TextComponent.Regular>
    </>
  );
};

export default PasswordCheck;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 10,
    paddingTop: 5,
    paddingBottom: 6,
    marginRight: 10,
    backgroundColor: colors.warning[50],
    borderColor: colors.warning[200],
  },
  isValid: {
    backgroundColor: colors.primary[50],
    borderColor: colors.primary[700],
  },
});
