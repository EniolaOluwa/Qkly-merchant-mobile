import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import Container from '@components/Container';
import Header from '@components/Header';
import Spacer from '@components/Spacer';
import OnboardingCounts from '@modules/Onboarding/components/OnboardingCounts';
import Inputs from '@components/Input';
import DropdownComponent from '@components/DropdownComponent';

const CreateBusinessDetails = () => {
  return (
    <Container.Keyboard>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          title="Business Details"
          desc="Join the Market place and start selling"
        />
        <Spacer height={24} />
        <OnboardingCounts count={3} />
        <Spacer height={24} />
        <Inputs.Text
          label="Business Name"
          placeholder="Enter your business name"
          errorText="Please enter your Business Name"
        />
        <Inputs.Text
          label="Description"
          placeholder="E.g we sell healthy drinks"
          errorText="Please enter details about your business"
        />
        <DropdownComponent
          data={[
            {
              labelField: 'Male',
              valueField: 'Male',
            },
            {
              labelField: 'Female',
              valueField: 'Female',
            },
          ]}
          label="Vendor Type"
          placeholder="Select Vendor type"
        />
      </ScrollView>
    </Container.Keyboard>
  );
};

export default CreateBusinessDetails;

const styles = StyleSheet.create({});
