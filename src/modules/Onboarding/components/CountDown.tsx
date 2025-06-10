import TextComponent from '@components/Text/textComponent';
import colors from '@utils/colors';
import React from 'react';

type Props = {
  seconds: number;
};
const CountDown = ({seconds}: Props) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return (
    <TextComponent.Bold color={colors.black}>
      {`${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`}
    </TextComponent.Bold>
  );
};

export default CountDown;
