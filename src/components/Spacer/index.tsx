import {moderateScale} from '@utils/responsive';
import React from 'react';
import {StyleSheet, View} from 'react-native';

type Props = {
  height?: number;
  width?: number;
  flex?: number;
};

const Spacer: React.FC<Props> = ({height, width, flex}) => {
  const style = styles(
    moderateScale(height || 0),
    moderateScale(width || 0),
    flex,
  );
  return <View style={style.container} />;
};

const styles = (height: number, width: number, flex: number) =>
  StyleSheet.create({
    container: {
      height,
      width,
      flex,
    },
  });

export default React.memo(Spacer);
