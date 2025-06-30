import {ScrollView} from 'react-native';
import React from 'react';
import Container from '@components/Container';
import Header from '@components/Header';
import Inputs from '@components/Input';
import Spacer from '@components/Spacer';
import Buttons from '@components/Button';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const LeadForm = () => {
  const {bottom} = useSafeAreaInsets();
  return (
    <Container.Keyboard>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flex: 1, paddingBottom: bottom + 10}}>
        <Header title="Lead Form" desc="Customize your lead form" />
        <Inputs.Text label="Form Title" placeholder="Enter title" />
        <Inputs.Text label="Description" placeholder="Enter Description" />
        <Inputs.Text label="Button Text" placeholder="Enter Text" />

        <Spacer flex={1} />
        <Buttons.Primary>Create</Buttons.Primary>
      </ScrollView>
    </Container.Keyboard>
  );
};

export default LeadForm;
