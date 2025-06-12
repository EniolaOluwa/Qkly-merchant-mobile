import {ScrollView} from 'react-native';
import React from 'react';
import Container from '@components/Container';
import Header from '@components/Header';
import Spacer from '@components/Spacer';
import OnboardingCounts from '@modules/Onboarding/components/OnboardingCounts';
import Inputs from '@components/Input';
import DropdownComponent from '@components/DropdownComponent';
import UploadImageCard from '@components/Cards/UploadImageCard';
import useCreateBusinessDetails from '@modules/Onboarding/lib/hooks/useCreateBusinessDetails';
import Buttons from '@components/Button';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const CreateBusinessDetails = () => {
  const {bottom} = useSafeAreaInsets();
  const {
    image,
    onUploadPress,
    businessName,
    description,
    error,
    handleChange,
    location,
    scrollRef,
    vendor,
    pressBtn,
  } = useCreateBusinessDetails();
  return (
    <Container.Keyboard>
      <ScrollView
        showsVerticalScrollIndicator={false}
        ref={scrollRef}
        contentContainerStyle={{flex: 1}}>
        <Header
          title="Business Details"
          desc="Join the Market place and start selling"
        />
        <OnboardingCounts count={3} />
        <Spacer height={24} />
        <Inputs.Text
          label="Business Name"
          placeholder="Enter your business name"
          value={businessName}
          onChange={value => handleChange('businessName', value)}
          error={error.businessName}
          errorText="Please enter your Business Name"
        />
        <Inputs.Text
          label="Description"
          placeholder="E.g we sell healthy drinks"
          value={description}
          onChange={value => handleChange('description', value)}
          error={error.description}
          errorText="Please enter details about your business"
        />
        <DropdownComponent
          data={[
            {
              labelField: 'Fashion',
              valueField: 'Fashion',
            },
            {
              labelField: 'Digital Gadgets',
              valueField: 'Digital Gadgets',
            },
            {
              labelField: 'Catering Services',
              valueField: 'Catering Services',
            },
          ]}
          label="Vendor Type"
          placeholder="Select Vendor type"
          value={vendor}
          onChange={value => handleChange('vendor', value)}
          error={error.vendor}
          errorText="Please select a vendor type"
        />
        <Inputs.Text
          label="Location"
          placeholder="Enter your location"
          value={location}
          onChange={value => handleChange('location', value)}
          error={error.location}
          errorText="Enter your business location"
        />
        <UploadImageCard
          image={image}
          openDocs={onUploadPress}
          error={error.image}
        />
        <Spacer flex={1} />
        <Buttons.Primary onPress={pressBtn}>Proceed</Buttons.Primary>
        <Spacer height={bottom + 10} />
      </ScrollView>
    </Container.Keyboard>
  );
};

export default CreateBusinessDetails;
