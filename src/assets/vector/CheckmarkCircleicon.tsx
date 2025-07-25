import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {iconProps} from './type';

const CheckmarkCircleicon = ({size = '20', color = '#00756F'}: iconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM14.0303 6.96967C14.3232 7.26256 14.3232 7.73744 14.0303 8.03033L9.03033 13.0303C8.73744 13.3232 8.26256 13.3232 7.96967 13.0303L5.96967 11.0303C5.67678 10.7374 5.67678 10.2626 5.96967 9.96967C6.26256 9.67678 6.73744 9.67678 7.03033 9.96967L8.5 11.4393L10.7348 9.2045L12.9697 6.96967C13.2626 6.67678 13.7374 6.67678 14.0303 6.96967Z"
        fill={color}
      />
    </Svg>
  );
};

export default CheckmarkCircleicon;
