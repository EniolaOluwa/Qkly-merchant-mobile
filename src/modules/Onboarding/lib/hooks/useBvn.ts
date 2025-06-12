import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {UnAuthenticatedNavigationProps} from 'navigation-route-type';

const useBvn = () => {
  const [bvn, setBvn] = useState('');
  const {navigate} = useNavigation<UnAuthenticatedNavigationProps>();
  const [error, setError] = useState(false);
  const navigateOut = () => {
    if (bvn.length < 11) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 4000);

      return;
    }

    navigate('BvnSuccessScreen');
  };
  return {
    error,
    bvn,
    navigateOut,
    setBvn,
  };
};

export default useBvn;
