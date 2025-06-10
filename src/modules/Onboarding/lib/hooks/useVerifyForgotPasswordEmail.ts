import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {UnAuthenticatedNavigationProps} from 'navigation-route-type';

const useVerifyForgotPasswordEmail = () => {
  const {navigate} = useNavigation<UnAuthenticatedNavigationProps>();
  const [pin, setPin] = useState('');

  const navigateOut = () => navigate('CreatePassword');
  return {
    pin,
    setPin,
    navigateOut,
  };
};

export default useVerifyForgotPasswordEmail;
