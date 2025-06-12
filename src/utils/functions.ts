import {Dimensions, PermissionsAndroid, Platform} from 'react-native';

const {width} = Dimensions.get('window');
export const isIos = Platform.OS === 'ios' ? true : false;

export const isTab = width > 550 ? true : false;

export const formatAmount = (amount: any, addDecimals?: boolean) => {
  const [integerPart, decimalPart = ''] = Number(amount).toFixed(2).split('.');
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return addDecimals ? `${formattedInteger}.${decimalPart}` : formattedInteger;
};

export const getCameraPermission = async () => {
  if (Platform.OS === 'android') {
    await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    ]);
  }
};
