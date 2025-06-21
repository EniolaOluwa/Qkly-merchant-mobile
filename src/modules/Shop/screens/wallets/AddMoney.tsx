import {StyleSheet, View} from 'react-native';
import React from 'react';
import Container from '@components/Container';
import Header from '@components/Header';
import {moderateScale} from '@utils/responsive';
import colors from '@utils/colors';
import TextComponent from '@components/Text/textComponent';

const AddMoney = () => {
  return (
    <Container.Padding>
      <Header title="Add Money" />
      <Container.Scroll>
        <View style={styles.container}>
          <View>
            <TextComponent.Regular>Account Name</TextComponent.Regular>
            <TextComponent.SemiBold size={18}>
              Ifiok Success
            </TextComponent.SemiBold>
          </View>
        </View>
        <View style={styles.container}>
          <View>
            <TextComponent.Regular>Account Number</TextComponent.Regular>
            <TextComponent.SemiBold size={18}>
              2983452341
            </TextComponent.SemiBold>
          </View>
          <TextComponent.SemiBold color={colors.primary[700]}>
            Copy
          </TextComponent.SemiBold>
        </View>
        <View style={styles.container}>
          <View>
            <TextComponent.Regular>Bank Name</TextComponent.Regular>
            <TextComponent.SemiBold size={18}>
              Zenith Bank
            </TextComponent.SemiBold>
          </View>
          <TextComponent.SemiBold color={colors.primary[700]}>
            Copy
          </TextComponent.SemiBold>
        </View>
      </Container.Scroll>
    </Container.Padding>
  );
};

export default AddMoney;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: moderateScale(20),
    borderBottomWidth: 1,
    borderColor: colors.neutral[150],
    alignItems: 'center',
  },
});
