import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {iconProps as Props} from './type';

const EyeOpenedIcon = ({color = '#8898AA'}: Props) => {
  return (
    <Svg width="20" height="20" fill="none" viewBox="0 0 20 20">
      <Path
        fill={color}
        d="M10 11.467a1.467 1.467 0 1 0 0-2.934 1.467 1.467 0 0 0 0 2.934"></Path>
      <Path
        fill={color}
        fillRule="evenodd"
        d="M3 10a7.34 7.34 0 0 1 14 0 7.34 7.34 0 0 1-14 0m9.934 0a2.934 2.934 0 1 1-5.868 0 2.934 2.934 0 0 1 5.868 0"
        clipRule="evenodd"></Path>
    </Svg>
  );
};

export default EyeOpenedIcon;
