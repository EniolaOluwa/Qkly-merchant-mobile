import {Dimensions, PixelRatio} from 'react-native';
import {isTab} from './functions';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const getPixelRatio = () => PixelRatio.get();

//this is for width
const widthRes = (widthPercent: number) => {
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

//this is for height
const heightRes = (heightPercent: number) => {
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

const normalize = (size: number): number => {
  const pixelRatio = getPixelRatio();
  if (pixelRatio >= 2 && pixelRatio < 3) {
    if (screenWidth < 360) {
      return size * 0.95;
    } else if (screenHeight < 667) {
      return size;
    } else if (screenHeight >= 667 && screenHeight <= 735) {
      return size * 1.15;
    }

    return size * 1.25;
  } else if (pixelRatio >= 3 && pixelRatio < 3.5) {
    if (screenWidth < 360) {
      return size;
    } else if (screenHeight < 667) {
      return size * 1.15;
    } else if (screenHeight >= 667 && screenHeight <= 735) {
      return size * 1.2;
    }

    return size * 1.27;
  } else if (pixelRatio >= 3.5) {
    if (screenWidth < 360) {
      return size;
    } else if (screenHeight < 667) {
      return size * 1.2;
    } else if (screenHeight >= 667 && screenHeight <= 735) {
      return size * 1.25;
    }

    return size * 1.4;
  }

  return size;
};

const horizontalScale = (size: number) =>
  (screenWidth / guidelineBaseWidth) * size;
const verticalScale = (size: number) =>
  (screenHeight / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

const horizontalSpacer = isTab ? horizontalScale(25) : moderateScale(20);

export {
  widthRes,
  heightRes,
  normalize,
  horizontalScale,
  verticalScale,
  moderateScale,
  horizontalSpacer,
  screenHeight,
  screenWidth,
};
