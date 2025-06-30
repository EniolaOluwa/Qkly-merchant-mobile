import {useCallback, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {UnAuthenticatedNavigationProps} from 'navigation-route-type';
import {checkName, checkPassword, emailRegex} from '@utils/regex';
import {ScrollView} from 'react-native';

const useCreateAccount = () => {
  const scrollRef = useRef<ScrollView>(null);
  const {navigate} = useNavigation<UnAuthenticatedNavigationProps>();
  const [details, setDetails] = useState({
    password: '',
    confirm: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });

  const [error, setError] = useState({
    password: false,
    confirm: false,
    firstName: false,
    lastName: false,
    email: false,
    phoneNumber: false,
  });

  const handleChange = useCallback(
    (value, text) => {
      setError(prev => ({...prev, [value]: false}));
      setDetails(prev => ({...prev, [value]: text}));
    },
    [details],
  );
  const handleError = useCallback(
    value => {
      if (['firstName', 'lastName', 'email'].includes(value)) {
        scrollRef?.current?.scrollTo({x: 0, y: 0, animated: true});
      }
      setError(prev => ({...prev, [value]: true}));
    },
    [details],
  );

  const pressBtn = () => {
    const {firstName, lastName, password, confirm, email, phoneNumber} =
      details;
    if (!checkName.test(firstName)) return handleError('firstName');
    if (!checkName.test(lastName)) return handleError('lastName');
    if (!emailRegex.test(email)) return handleError('email');
    if (phoneNumber.length < 11) return handleError('phoneNumber');
    if (!checkPassword.test(password)) return handleError('password');
    if (confirm !== password) return handleError('confirm');

    navigate('VerifyEmail');
  };
  return {
    ...details,
    handleChange,
    error,
    pressBtn,
    scrollRef,
  };
};

export default useCreateAccount;
