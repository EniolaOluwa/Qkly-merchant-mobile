import {Image, ImageRequireSource, StyleSheet, View} from 'react-native';
import React from 'react';
import {appStyle} from '@utils/styles';
import TextComponent from '@components/Text/textComponent';
import colors from '@utils/colors';
import Spacer from '@components/Spacer';

type Props = {
  total: number;
  value: number;
  image: ImageRequireSource;
  color: string;
  title: string;
};
const InsightProgressBar = ({color, image, title, total, value}: Props) => {
  let width = (value * 100) / total;
  return (
    <View style={styles.container}>
      <View style={appStyle.flexRowCenter}>
        <Image source={image} style={styles.image} />
        <TextComponent.SemiBold color={colors.textPrimary}>
          {title}
        </TextComponent.SemiBold>
      </View>
      <Spacer height={10} />
      <View style={styles.progressContainer}>
        <View
          style={[
            styles.progress,
            {
              backgroundColor: color,
              width: `${width}%`,
            },
          ]}
        />
      </View>
      <TextComponent.Regular size={10} color={colors.neutral[200]}>
        {width.toFixed(0)}%
      </TextComponent.Regular>
    </View>
  );
};

export default InsightProgressBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
  },
  image: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 8,
  },
  progressContainer: {
    width: '100%',
    height: 16,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: colors.neutral[100],
    marginBottom: 4,
  },
  progress: {
    height: '100%',
  },
});
