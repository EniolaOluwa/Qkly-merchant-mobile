import {useNavigation} from '@react-navigation/native';
import {UnAuthenticatedNavigationProps} from 'navigation-route-type';
import {useState} from 'react';

const useChangeForgotPassword = () => {
  const {navigate} = useNavigation<UnAuthenticatedNavigationProps>();
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const goToLogin = () => navigate('LoginScreen');
  return {
    password,
    setPassword,
    confirm,
    setConfirm,
    goToLogin,
  };
};

export default useChangeForgotPassword;
