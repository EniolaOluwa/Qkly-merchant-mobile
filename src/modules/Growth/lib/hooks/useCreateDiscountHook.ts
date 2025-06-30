import {useCallback, useState} from 'react';

type IDetails = 'price' | 'code' | 'duration';

const useCreateDiscountHook = () => {
  const [details, setDetails] = useState({
    price: '',
    code: '',
    duration: null,
  });
  const [error, setError] = useState({
    price: false,
    duration: false,
  });

  const handleChange = useCallback(
    (value: IDetails, text) => {
      setError(prev => ({...prev, [value]: false}));
      setDetails(prev => ({...prev, [value]: text}));
    },
    [details],
  );
  const handleError = useCallback(
    (value: IDetails) => {
      setError(prev => ({...prev, [value]: true}));
    },
    [details],
  );

  return {
    ...details,
    handleChange,
    error,
  };
};

export default useCreateDiscountHook;
