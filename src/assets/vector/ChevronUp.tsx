import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {iconProps} from './type';

const ChevronUp = ({color = '#3A4450', size = '12'}: iconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 12 6" fill="none">
      <Path
        d="M10.6654 5L5.9987 1L1.33203 5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ChevronUp;
