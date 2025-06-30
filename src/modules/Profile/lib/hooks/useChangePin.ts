import {useCallback, useState} from 'react';

const useChangePin = (oldPin, newPin) => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);

  const changePin = useCallback(
    value => {
      setError(false);
      setPin(value);
    },
    [pin],
  );

  const navigateOut = () => {
    if (pin !== newPin) return setError(true);
  };

  return {
    setPin: changePin,
    pin,
    error,
    navigateOut,
  };
};

export default useChangePin;
