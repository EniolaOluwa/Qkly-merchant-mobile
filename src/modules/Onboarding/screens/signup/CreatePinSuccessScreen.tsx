import {Image, StyleSheet} from 'react-native';
import React from 'react';
import Container from '@components/Container';
import {appStyle} from '@utils/styles';
import Spacer from '@components/Spacer';
import {Confetti} from '@assets/images';
import TextComponent from '@components/Text/textComponent';
import Buttons from '@components/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {UnauthenticatedStackParamList} from 'navigation-route-type';
import {moderateScale} from '@utils/responsive';

type CreatePinSuccessScreenProps = NativeStackScreenProps<
  UnauthenticatedStackParamList,
  'CreatePinSuccessScreen'
>;
const CreatePinSuccessScreen: React.FC<CreatePinSuccessScreenProps> = ({
  navigation,
}) => {
  return (
    <Container.Padding style={appStyle.flexCenterAll}>
      <Spacer flex={1} />
      <Image source={Confetti} style={styles.image} />
      <Spacer height={40} />
      <TextComponent.Bold size={24} center>
        Congratulations!
      </TextComponent.Bold>
      <Spacer height={5} />
      <TextComponent.Regular center style={{width: '90%'}}>
        Your account has been Successfully Created, your gateway to amazing
        deals.
      </TextComponent.Regular>
      <Spacer flex={1} height={30} />
      <Buttons.Primary onPress={() => navigation.navigate('LoginScreen')}>
        Create PIN
      </Buttons.Primary>
    </Container.Padding>
  );
};

export default CreatePinSuccessScreen;

const styles = StyleSheet.create({
  image: {
    width: moderateScale(250),
    height: moderateScale(250),
  },
});
