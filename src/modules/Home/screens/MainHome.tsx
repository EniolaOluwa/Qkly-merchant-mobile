import React from 'react';
import Container from '@components/Container';
import HomeHeader from '../components/HomeHeader';
import TopTabs from '../components/TopTabs';
import useHome from '../lib/hooks/useHome';
import WalletOverview from './WalletOverview';
import OrderOverview from './OrderOverview';
import ReviewOverview from './ReviewOverview';
import Spacer from '@components/Spacer';
import CompleteAccountSetup from '../components/CompleteAccountSetup';

const MainHome = () => {
  const {activeTab, setActiveTab} = useHome();
  return (
    <Container.Normal>
      <HomeHeader />
      <Container.Scroll>
        <TopTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <CompleteAccountSetup />
        <Spacer height={24} />
        {activeTab === 'Wallet' && <WalletOverview />}
        {activeTab === 'Order' && <OrderOverview />}
        {activeTab === 'Reviews' && <ReviewOverview />}
      </Container.Scroll>
    </Container.Normal>
  );
};

export default MainHome;
