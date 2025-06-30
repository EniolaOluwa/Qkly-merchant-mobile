import React, {useState} from 'react';
import Container from '@components/Container';
import Header from '@components/Header';
import CustomTopTabs from '@components/CustomTab';
import SingleProductDiscount from '@modules/Growth/components/SingleProductDiscount';
import AllProductDiscount from '@modules/Growth/components/AllProductDiscount';
import Spacer from '@components/Spacer';
import {ScrollView} from 'react-native';
import useCreateDiscountHook from '@modules/Growth/lib/hooks/useCreateDiscountHook';
import Inputs from '@components/Input';
import DropdownComponent from '@components/DropdownComponent';

const TABS = ['Single Products', 'All Products'];
const CreateDiscount = () => {
  const [selectedTab, setSelectedTab] = useState(TABS[0]);
  const {code, duration, error, handleChange, price} = useCreateDiscountHook();

  return (
    <Container.Keyboard>
      <Header
        title="Discount"
        desc="Create discounts for a single product or all your products"
      />
      <CustomTopTabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        tabs={TABS}
      />
      <Spacer height={20} />

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
      {/* {selectedTab === TABS[0] ? (
        <SingleProductDiscount />
      ) : (
        <AllProductDiscount />
      )} */}
    </Container.Keyboard>
  );
};

export default CreateDiscount;
