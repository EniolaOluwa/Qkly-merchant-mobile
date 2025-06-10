import React from 'react';
import TextComponent from '@components/Text/textComponent';
import colors from '@utils/colors';

type Props = {
  blackText: string;
  actionText: string;
  action: () => void;
};
const DualText = ({action, actionText, blackText}: Props) => {
  return (
    <TextComponent.SemiBold center size={12}>
      {blackText}
      <TextComponent.Bold
        size={12}
        color={colors.primary[700]}
        onPress={action}>
        {actionText}
      </TextComponent.Bold>
    </TextComponent.SemiBold>
  );
};

export default DualText;
