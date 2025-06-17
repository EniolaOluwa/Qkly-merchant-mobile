import React from 'react';
import Svg, {Path, G, Defs, ClipPath, Rect} from 'react-native-svg';

const OrderPendingIcon = () => {
  return (
    <Svg width="19" height="19" viewBox="0 0 19 19" fill="none">
      <G clipPath="url(#clip0_2494_9749)">
        <Path
          d="M16.543 9.04199C16.543 13.1841 13.1851 16.542 9.04297 16.542C4.90083 16.542 1.54297 13.1841 1.54297 9.04199C1.54297 4.89986 4.90083 1.54199 9.04297 1.54199C13.1851 1.54199 16.543 4.89986 16.543 9.04199Z"
          stroke="#D1BF00"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="0.5 3.5"
        />
        <Path
          d="M16.543 9.04199C16.543 4.89986 13.1851 1.54199 9.04297 1.54199"
          stroke="#D1BF00"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <Path
          d="M9.04297 6.79199V9.79199H12.043"
          stroke="#D1BF00"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2494_9749">
          <Rect
            width="18"
            height="18"
            fill="white"
            transform="translate(0.0429688 0.0419922)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default OrderPendingIcon;
