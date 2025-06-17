import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {iconProps} from './type';

const ChevronDown = ({color = '#D2D9DF', size = '12'}: iconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 8" fill="none">
      <Path
        d="M15 1L8 7L1 1"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ChevronDown;
