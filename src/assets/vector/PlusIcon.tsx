import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {iconProps} from './type';

const PlusIcon = ({size = '18', color = '#F9F9FB'}: iconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <Path
        d="M9 3.75V14.25"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.75 9H14.25"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default PlusIcon;
