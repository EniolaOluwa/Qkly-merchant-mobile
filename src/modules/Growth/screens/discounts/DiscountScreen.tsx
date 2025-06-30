import {Pressable, StyleSheet} from 'react-native';
import React from 'react';
import Container from '@components/Container';
import Header from '@components/Header';
import EmptyState from '@components/Cards/EmptyState';
import PlusIcon from '@assets/vector/PlusIcon';
import colors from '@utils/colors';
import TextComponent from '@components/Text/textComponent';
import Spacer from '@components/Spacer';
import {useNavigation} from '@react-navigation/native';
import {AuthenticatedNavigationProps} from 'navigation-route-type';

const DiscountScreen = () => {
  const {navigate} = useNavigation<AuthenticatedNavigationProps>();
  return (
    <Container.Padding>
      <Header
        title="Discount"
        desc="Create discounts for a single product or all your products"
      />
      <EmptyState
        title="No Discount"
        desc="No Discount added to any product. Click below to add discount."
      />
      <Pressable
        style={styles.options}
        onPress={() => navigate('CreateDiscount')}>
        <PlusIcon color={colors.primary[800]} />
        <Spacer width={6} />
        <TextComponent.Regular color={colors.primary[800]}>
          Add Discount
        </TextComponent.Regular>
      </Pressable>
    </Container.Padding>
  );
};

export default DiscountScreen;

const styles = StyleSheet.create({
  options: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
