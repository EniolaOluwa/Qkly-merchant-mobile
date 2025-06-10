import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {iconProps} from './type';

const BackArrow = ({color = '#3C4047', size = '14'}: iconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <Path
        d="M3.51953 7.83325L8.1862 12.4999L6.9987 13.6666L0.332031 6.99992L6.9987 0.333252L8.1862 1.49992L3.51953 6.16659H13.6654V7.83325H3.51953Z"
        fill={color}
      />
    </Svg>
  );
};

export default BackArrow;
