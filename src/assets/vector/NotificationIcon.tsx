import React from 'react';
import Svg, {Path} from 'react-native-svg';

const NotificationIcon = () => {
  return (
    <Svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <Path
        d="M21.874 11.328V10.506C21.874 5.99243 18.3487 2.3335 14 2.3335C9.65132 2.3335 6.12602 5.99243 6.12602 10.506V11.328C6.12602 12.3145 5.84467 13.279 5.31743 14.0998L4.02542 16.1113C2.84529 17.9486 3.74622 20.4459 5.79876 21.0269C11.1682 22.5468 16.8318 22.5468 22.2012 21.0269C24.2538 20.4459 25.1547 17.9486 23.9746 16.1113L22.6826 14.0998C22.1553 13.279 21.874 12.3145 21.874 11.328Z"
        stroke="black"
        strokeWidth="0.8"
      />
      <Path
        d="M8.75 22.1665C9.5142 24.2056 11.5762 25.6665 14 25.6665C16.4238 25.6665 18.4858 24.2056 19.25 22.1665"
        stroke="black"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default NotificationIcon;
