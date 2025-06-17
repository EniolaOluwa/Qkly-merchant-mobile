import React from 'react';
import Svg, {Path} from 'react-native-svg';

const PlusIcon = () => {
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <Path
        d="M9 3.75V14.25"
        stroke="#F9F9FB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.75 9H14.25"
        stroke="#F9F9FB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default PlusIcon;
