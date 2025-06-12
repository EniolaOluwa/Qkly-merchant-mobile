import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import Spacer from '@components/Spacer';
import {appStyle} from '@utils/styles';
import colors from '@utils/colors';
import TextComponent from '@components/Text/textComponent';
import Buttons from '@components/Button';
import UploadCloud from '@assets/vector/UploadCloud';
import {moderateScale} from '@utils/responsive';
type Props = {
  openDocs: () => void;
  image: {uri: string};
  error: boolean;
};
const UploadImageCard = ({openDocs, image, error}: Props) => {
  return (
    <>
      <TextComponent.Regular color={colors.neutral[400]}>
        Upload Logo
      </TextComponent.Regular>
      <View style={[styles.uploadContainer, error && styles.error]}>
        {image ? (
          <Image source={{uri: image?.uri}} style={styles.image} />
        ) : (
          <View style={styles.cloud}>
            <UploadCloud />
          </View>
        )}
        <View style={{width: '50%'}}>
          <TextComponent.Bold color={colors.textPrimary}>
            Tap to Upload Image
          </TextComponent.Bold>
          <Spacer height={3} />
          <TextComponent.Light size={12} color={colors.neutral[600]}>
            PNG, JPG| 5MB max.
          </TextComponent.Light>
        </View>
        <Buttons.Primary
          style={{
            width: '27%',
            height: 40,
          }}
          onPress={openDocs}>
          Upload
        </Buttons.Primary>
      </View>

      {error && (
        <View style={styles.errorText}>
          <TextComponent.SemiBold
            color={colors.error[150]}
            size={12}
            style={{flex: 1}}>
            Please upload a logo
          </TextComponent.SemiBold>
        </View>
      )}
    </>
  );
};

export default UploadImageCard;

const styles = StyleSheet.create({
  uploadContainer: {
    ...appStyle.flexRowSpaceCenter,
    borderWidth: 1,
    borderRadius: 12,
    borderStyle: 'dashed',
    padding: moderateScale(15),
    paddingVertical: 12,
    zIndex: 1,
    backgroundColor: colors.white,
    borderColor: colors.neutral[200],
    marginTop: 7,
  },
  cloud: {
    width: moderateScale(44),
    height: moderateScale(44),
    borderRadius: 100,
    backgroundColor: colors.primary[50],
    ...appStyle.flexCenterAll,
  },
  image: {
    width: moderateScale(32),
    height: moderateScale(32),
    borderRadius: 100,
  },
  errorText: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  error: {
    borderColor: colors.error[100],
  },
});
