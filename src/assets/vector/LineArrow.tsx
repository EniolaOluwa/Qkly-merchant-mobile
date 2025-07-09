import React from 'react';
import Svg, {Path} from 'react-native-svg';

const LineArrow = () => {
  return (
    <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <Path
        d="M21 1L13.6203 8.33467C12.6227 9.32625 12.1238 9.82205 11.5051 9.82198C10.8864 9.82191 10.3876 9.326 9.3902 8.33418L9.15086 8.09618C8.15254 7.10349 7.65338 6.60714 7.03422 6.60737C6.41506 6.60759 5.91626 7.1043 4.91867 8.09773L1 12M21 1V6.54583M21 1H15.4179"
        stroke="#00756F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default LineArrow;
