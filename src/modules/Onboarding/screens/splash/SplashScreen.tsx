import {FlatList, ImageBackground, StyleSheet, View} from 'react-native';
import React from 'react';
import {splashData} from '@utils/data';
import {ISplashData} from 'App-Data-Types';
import {heightRes, moderateScale, widthRes} from '@utils/responsive';
import TextComponent from '@components/Text/textComponent';
import colors from '@utils/colors';
import {appStyle} from '@utils/styles';
import Spacer from '@components/Spacer';
import Buttons from '@components/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {UnauthenticatedStackParamList} from 'navigation-route-type';
import {
  useAnimatedRef,
  useScrollViewOffset,
  useSharedValue,
} from 'react-native-reanimated';
import OnboardSlider from '@modules/Onboarding/components/OnboardSlider';

type GiftCardScreenProps = NativeStackScreenProps<
  UnauthenticatedStackParamList,
  'SplashScreen'
>;

const RenderItem = ({item}: {item: ISplashData}) => {
  return (
    <ImageBackground source={item.image} style={styles.image}>
      <View style={[styles.innerContainer, appStyle.flexCenterAll]}>
        <Spacer height={heightRes(25)} />
        <TextComponent.Bold color={colors.white} size={32} center>
          {item.title}
        </TextComponent.Bold>
        <Spacer height={16} />
        <TextComponent.SemiBold color={colors.white} size={18} center>
          {item.body}
        </TextComponent.SemiBold>
      </View>
    </ImageBackground>
  );
};

const SplashScreen: React.FC<GiftCardScreenProps> = ({navigation}) => {
  const scrollX = useSharedValue(0);

  const aref = useAnimatedRef<any>();
  useScrollViewOffset(aref, scrollX);
  const navigateOut = () => navigation.navigate('LoginScreen');
  return (
    <View style={styles.container}>
      <FlatList
        ref={aref}
        data={splashData}
        renderItem={({item}) => <RenderItem item={item} />}
        keyExtractor={(_, i) => i.toString()}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
        bounces={false}
      />
      <View style={styles.bottom}>
        <OnboardSlider data={splashData} scrollX={scrollX} />
        <Spacer height={80} />
        <Buttons.Primary onPress={navigateOut}>Get Started</Buttons.Primary>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: widthRes(100),
    height: heightRes(100),
  },
  innerContainer: {
    width: widthRes(100),
    height: heightRes(100),
    backgroundColor: '#00000099',
  },

  bottom: {
    position: 'absolute',
    bottom: heightRes(5),
    width: '100%',
    paddingHorizontal: moderateScale(20),
    alignItems: 'center',
  },
});
