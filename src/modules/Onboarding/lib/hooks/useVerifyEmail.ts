import {useNavigation} from '@react-navigation/native';
import {UnAuthenticatedNavigationProps} from 'navigation-route-type';
import {useState} from 'react';

const useVerifyEmail = () => {
  const {navigate} = useNavigation<UnAuthenticatedNavigationProps>();
  const [pin, setPin] = useState('');

  const navigateOut = () => navigate('CreateBusinessDetails');
  return {
    pin,
    setPin,
    navigateOut,
  };
};

export default useVerifyEmail;
