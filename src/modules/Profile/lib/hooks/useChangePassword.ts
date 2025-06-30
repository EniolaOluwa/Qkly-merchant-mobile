import {useCallback, useState} from 'react';

const useChangePassword = () => {
  const [details, setDetails] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [error, setError] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
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
      setError(prev => ({...prev, [value]: true}));
    },
    [details],
  );

  const handleSubmit = () => {};
  return {...details, handleChange, error};
};

export default useChangePassword;
