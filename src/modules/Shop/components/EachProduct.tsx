import {Pressable, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {horizontalScale, moderateScale} from '@utils/responsive';
import colors from '@utils/colors';
import TextComponent from '@components/Text/textComponent';
import ThreeDotIcon from '@assets/vector/ThreeDotIcon';
import Spacer from '@components/Spacer';
import {ProductImage} from '@assets/images';
import FastImage from '@d11/react-native-fast-image';
import DeleteIcon from '@assets/vector/DeleteIcon';

const EachProduct = () => {
  const [display, setDisplay] = useState(false);
  return (
    <View style={styles.container}>
      <FastImage
        source={ProductImage}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={{width: '70%'}}>
        <TextComponent.SemiBold>Leather Handbag</TextComponent.SemiBold>
        <TextComponent.Regular size={10}>Pink Colour</TextComponent.Regular>
        <TextComponent.Regular size={12}>₦15,000</TextComponent.Regular>
      </View>
      <Spacer flex={1} width={20} />
      <Pressable style={{width: 20}} onPress={() => setDisplay(!display)}>
        <ThreeDotIcon />
      </Pressable>
      {display && (
        <TouchableOpacity style={styles.delete} activeOpacity={0.5}>
          <DeleteIcon />
          <Spacer width={10} />
          <TextComponent.Regular color="white">
            Delete Item
          </TextComponent.Regular>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default EachProduct;

const styles = StyleSheet.create({
  container: {
    paddingVertical: moderateScale(20),
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral[150],
    flexDirection: 'row',
  },
  image: {
    width: moderateScale(60),
    height: moderateScale(60),
    marginRight: horizontalScale(10),
    alignSelf: 'center',
  },
  delete: {
    position: 'absolute',
    backgroundColor: colors.primary[800],
    top: moderateScale(24),
    right: moderateScale(24),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(18),
    borderRadius: moderateScale(8),
    paddingVertical: moderateScale(12),
  },
});
