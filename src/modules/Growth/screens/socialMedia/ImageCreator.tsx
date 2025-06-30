import {Pressable, ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import Container from '@components/Container';
import Header from '@components/Header';
import Spacer from '@components/Spacer';
import TextComponent from '@components/Text/textComponent';
import {appStyle} from '@utils/styles';
import {moderateScale} from '@utils/responsive';
import colors from '@utils/colors';

const formatdata = ['Square', 'Landscape', 'Story'];
const ImageCreator = () => {
  const [selectedFormat, setSelectedFormat] = useState('');
  return (
    <Container.Padding>
      <Header title="Image Creator" desc="Create sharable Item Image" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Spacer height={10} />
        <TextComponent.SemiBold>Image Format</TextComponent.SemiBold>
        <Spacer height={16} />
        <View style={appStyle.flexRowCenter}>
          {formatdata.map(t => (
            <Pressable
              key={t}
              style={[
                styles.formatItem,
                t === selectedFormat && styles.selectedFormatItem,
              ]}
              onPress={() => setSelectedFormat(t)}>
              <TextComponent.SemiBold
                size={12}
                color={
                  t === selectedFormat ? colors.white : colors.textPrimary
                }>
                {t}
              </TextComponent.SemiBold>
            </Pressable>
          ))}
        </View>

        <Spacer height={30} />

        <TextComponent.SemiBold>Template Style</TextComponent.SemiBold>
      </ScrollView>
    </Container.Padding>
  );
};

export default ImageCreator;

const styles = StyleSheet.create({
  formatItem: {
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(16),
    borderWidth: 1,
    borderRadius: moderateScale(4),
    marginRight: 10,
    borderColor: colors.neutral[200],
  },
  selectedFormatItem: {
    backgroundColor: colors.primary[800],
    borderColor: colors.primary[800],
  },
});
