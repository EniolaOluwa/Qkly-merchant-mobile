import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {iconProps} from './type';

const ArrowDown = ({color = 'black'}: iconProps) => {
  return (
    <Svg width="12" height="14" viewBox="0 0 12 14" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.04297 0.479492C6.35363 0.479492 6.60547 0.731332 6.60547 1.04199L6.60547 11.684L10.1452 8.14424C10.3649 7.92457 10.721 7.92457 10.9407 8.14424C11.1604 8.36391 11.1604 8.72007 10.9407 8.93974L6.44072 13.4397C6.33523 13.5452 6.19215 13.6045 6.04297 13.6045C5.89378 13.6045 5.75071 13.5452 5.64522 13.4397L1.14522 8.93974C0.925551 8.72007 0.925551 8.36391 1.14522 8.14424C1.36489 7.92457 1.72105 7.92457 1.94072 8.14424L5.48047 11.684L5.48047 1.04199C5.48047 0.731332 5.73231 0.479492 6.04297 0.479492Z"
        fill={color}
      />
    </Svg>
  );
};

export default ArrowDown;
