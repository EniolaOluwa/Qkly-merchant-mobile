import {FlatList, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import Container from '@components/Container';
import Header from '@components/Header';
import colors from '@utils/colors';
import {moderateScale, verticalScale} from '@utils/responsive';
import FastImage from '@d11/react-native-fast-image';
import {ProductImage} from '@assets/images';
import TextComponent from '@components/Text/textComponent';
import {useNavigation} from '@react-navigation/native';
import {AuthenticatedNavigationProps} from 'navigation-route-type';

const SocialMediaItem = ({item: _, index}) => {
  const {navigate} = useNavigation<AuthenticatedNavigationProps>();
  return (
    <Pressable
      style={[
        styles.container,
        {
          marginLeft: index % 2 === 0 ? 0 : '2%',
        },
      ]}
      onPress={() => navigate('ImageCreator')}>
      <FastImage
        source={ProductImage}
        style={styles.image}
        resizeMode="contain"
      />

      <TextComponent.Regular>Leather Handbag</TextComponent.Regular>
      <TextComponent.Regular size={10}>Category</TextComponent.Regular>
      <TextComponent.Regular size={12}>N15,000</TextComponent.Regular>
    </Pressable>
  );
};
const MainSocialMedia = () => {
  return (
    <Container.Padding>
      <Header title="Social Media" desc="Select an Image" />

      <FlatList
        data={[...Array(20)]}
        renderItem={({item, index}) => (
          <SocialMediaItem item={item} index={index} />
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, i) => i.toString()}
        numColumns={2}
      />
    </Container.Padding>
  );
};

export default MainSocialMedia;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.neutral[100],
    paddingHorizontal: moderateScale(18),
    borderRadius: 10,
    width: '49%',
    marginBottom: verticalScale(10),
    paddingVertical: moderateScale(10),
  },
  image: {
    alignSelf: 'center',
    width: '80%',
    height: moderateScale(140),
    marginBottom: 10,
  },
});
