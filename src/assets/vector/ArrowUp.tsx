import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {iconProps} from './type';

const ArrowUp = ({color = 'black'}: iconProps) => {
  return (
    <Svg width="12" height="14" viewBox="0 0 12 14" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.07428 13.6034C5.76362 13.6049 5.5106 13.3543 5.50913 13.0436L5.45898 2.40172L1.93595 5.95811C1.71732 6.17881 1.36117 6.18049 1.14046 5.96186C0.919761 5.74323 0.918082 5.38708 1.13671 5.16637L5.61546 0.645217C5.72045 0.539232 5.86324 0.479296 6.01242 0.478593C6.16161 0.47789 6.30496 0.536478 6.41094 0.641468L10.9321 5.12021C11.1528 5.33884 11.1545 5.695 10.9358 5.9157C10.7172 6.1364 10.3611 6.13808 10.1404 5.91945L6.58397 2.39641L6.63412 13.0383C6.63558 13.349 6.38493 13.602 6.07428 13.6034Z"
        fill={color}
      />
    </Svg>
  );
};

export default ArrowUp;
