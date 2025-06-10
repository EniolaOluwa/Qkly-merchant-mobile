import {useNavigation} from '@react-navigation/native';
import {UnAuthenticatedNavigationProps} from 'navigation-route-type';
import {useState} from 'react';

const useForgotPassword = () => {
  const {navigate, goBack} = useNavigation<UnAuthenticatedNavigationProps>();
  const [email, setEmail] = useState('');

  const navigateToLogin = () => goBack();
  const navigateToVerify = () => navigate('VerifyPasswordEmail');
  return {
    navigateToLogin,
    navigateToVerify,
  };
};

export default useForgotPassword;
