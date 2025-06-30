import React, {useState} from 'react';
import Container from '@components/Container';
import AppTabHeader from '@components/Header/AppTabHeader';
import CustomTopTabs from '@components/CustomTab';
import MainProducts from './products/MainProducts';
import MainOrders from './orders/MainOrders';
import MainWallet from './wallets/MainWallet';
import Spacer from '@components/Spacer';

const TABS = ['Products', 'Orders', 'Wallets'];

const MainShop = () => {
  const [selectedTab, setSelectedTab] = useState(TABS[0]);
  return (
    <Container.Normal>
      <AppTabHeader title="Shop" desc="Manage your Business in one place" />
      <CustomTopTabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        tabs={TABS}
      />
      <Spacer height={20} />
      {selectedTab === 'Products' && <MainProducts />}
      {selectedTab === 'Orders' && <MainOrders />}
      {selectedTab === 'Wallets' && <MainWallet />}
    </Container.Normal>
  );
};

export default MainShop;
