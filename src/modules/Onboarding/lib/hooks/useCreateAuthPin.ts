import {useNavigation} from '@react-navigation/native';
import {UnAuthenticatedNavigationProps} from 'navigation-route-type';
import {useState} from 'react';

const useCreateAuthPin = () => {
  const [pin, setPin] = useState('');
  const {navigate} = useNavigation<UnAuthenticatedNavigationProps>();

  const navigateOut = () => {
    navigate('CreatePinSuccessScreen');
  };
  return {
    pin,
    setPin,
    navigateOut,
  };
};

export default useCreateAuthPin;
