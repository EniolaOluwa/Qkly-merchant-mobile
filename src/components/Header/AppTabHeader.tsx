import {View} from 'react-native';
import React from 'react';
import InsetSpacer from '@components/Spacer/InsetSpacer';
import TextComponent from '@components/Text/textComponent';
import Spacer from '@components/Spacer';
import colors from '@utils/colors';

type Props = {
  title?: string;
  desc?: string;
};
const AppTabHeader = ({desc, title}: Props) => {
  return (
    <View>
      <InsetSpacer />
      <TextComponent.Bold size={24}>{title}</TextComponent.Bold>
      <Spacer height={5} />
      <TextComponent.Regular color={colors.textPrimary}>
        {desc}
      </TextComponent.Regular>
      <Spacer height={24} />
    </View>
  );
};

export default AppTabHeader;
