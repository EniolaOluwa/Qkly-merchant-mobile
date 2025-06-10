import {View} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {moderateScale} from '@utils/responsive';

const InsetSpacer = ({type = 'top'}: {type?: 'top' | 'bottom'}) => {
  const {top, bottom} = useSafeAreaInsets();
  return (
    <View style={{height: type === 'top' ? top + moderateScale(15) : bottom}} />
  );
};

export default InsetSpacer;
