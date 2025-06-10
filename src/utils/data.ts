import {Splash1, Splash2} from '@assets/images';
import GrowthIcon from '@assets/vector/GrowthIcon';
import HomeBoldIcon from '@assets/vector/HomeBoldIcon';
import HomeOutlineIcon from '@assets/vector/HomeOutlineIcon';
import ProfileBoldIcon from '@assets/vector/ProfileBoldIcon';
import ProfileOutlineIcon from '@assets/vector/ProfileOutlineIcon';
import ShopBoldIcon from '@assets/vector/ShopBoldIcon';
import ShopOutlineIcon from '@assets/vector/ShopOutlineIcon';
import MainGrowth from '@modules/Growth/screens/MainGrowth';
import MainHome from '@modules/Home/screens/MainHome';
import MainProfile from '@modules/Profile/screens/MainProfile';
import MainShop from '@modules/Shop/screens/MainShop';
import {ISplashData, TabArrType} from 'App-Data-Types';

export const splashData: ISplashData[] = [
  {
    image: Splash1,
    title: 'Your Business,\nYour Rules!',
    body: 'Simple setup, secure payments, and\neasy order management.',
  },
  {
    image: Splash2,
    title: 'Your Business,\nYour Rules!',
    body: 'Simple setup, secure payments, and\neasy order management.',
  },
];

export const TabArr: TabArrType[] = [
  {
    route: 'Home',
    activeIcon: HomeBoldIcon,
    component: MainHome,
    inactiveIcon: HomeOutlineIcon,
  },
  {
    route: 'Shop',
    activeIcon: ShopBoldIcon,
    component: MainShop,
    inactiveIcon: ShopOutlineIcon,
  },
  {
    route: 'Growth',
    activeIcon: () => GrowthIcon({color: '#00756F'}),
    component: MainGrowth,
    inactiveIcon: () => GrowthIcon({color: '#8898AA'}),
  },
  {
    route: 'Profile',
    activeIcon: ProfileBoldIcon,
    component: MainProfile,
    inactiveIcon: ProfileOutlineIcon,
  },
];
