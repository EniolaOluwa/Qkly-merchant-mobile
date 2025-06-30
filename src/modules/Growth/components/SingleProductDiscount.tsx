import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Inputs from '@components/Input';
import DropdownComponent from '@components/DropdownComponent';
import useCreateDiscountHook from '../lib/hooks/useCreateDiscountHook';

const SingleProductDiscount = () => {
  const {code, duration, error, handleChange, price} = useCreateDiscountHook();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}>
      <Inputs.Text
        label="Discount Price"
        keyboard="number-pad"
        placeholder="0.0"
        value={price}
        onChange={text => handleChange('price', text)}
        error={error.price}
        errorText="Enter Discount Price"
      />
      <Inputs.Text
        label="Discount Code (Optional)"
        placeholder="Enter discount code"
        value={code}
        onChange={text => handleChange('code', text)}
      />

      <DropdownComponent
        data={[
          {
            labelField: 'One Time',
            valueField: 'One Time',
          },
          {
            labelField: 'Frequent',
            valueField: 'Frequent',
          },
        ]}
        label="Discount Duration"
        placeholder="Select Discount Duration"
        value={duration}
        onChange={text => handleChange('duration', text)}
        error={error.duration}
        errorText="Select Discount Duration"
      />
    </ScrollView>
  );
};

export default SingleProductDiscount;

const styles = StyleSheet.create({});
