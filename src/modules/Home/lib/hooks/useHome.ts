import {useState} from 'react';

const useHome = () => {
  const [activeTab, setActiveTab] = useState('Wallet');
  return {
    activeTab,
    setActiveTab,
  };
};

export default useHome;
