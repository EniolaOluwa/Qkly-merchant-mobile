import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Container from '@components/Container';
import Header from '@components/Header';
import {appStyle} from '@utils/styles';
import TextComponent from '@components/Text/textComponent';
import colors from '@utils/colors';
import ChevronDown from '@assets/vector/ChevronDown';
import Spacer from '@components/Spacer';
import {InsightData} from '@utils/data';
import {moderateScale, verticalScale} from '@utils/responsive';
import InsightProgressBar from '../components/InsightProgressBar';
import {
  FacebookImage,
  GlobeImage,
  GoogleImage,
  InstagramImage,
  TiktokImage,
  TwitterImage,
} from '@assets/images';

const InsightScreen = () => {
  return (
    <Container.Padding>
      <Header title="Insight" desc="List your item & Start selling" />
      <Pressable style={[appStyle.flexRowCenter, {alignSelf: 'flex-end'}]}>
        <TextComponent.SemiBold color={colors.primary[800]}>
          This Week
        </TextComponent.SemiBold>
        <Spacer width={5} />
        <ChevronDown size="14" color={colors.primary[800]} />
      </Pressable>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={InsightData}
          renderItem={({item, index}) => (
            <View
              style={[
                styles.container,
                {
                  marginLeft: index % 2 === 0 ? 0 : '2%',
                },
              ]}>
              <View style={{height: 30}}>{item?.icon()}</View>
              <Spacer height={16} />
              <TextComponent.Regular size={13} color={colors.textPrimary}>
                {item.title}
              </TextComponent.Regular>
              <Spacer height={10} />
              <TextComponent.SemiBold size={18} color={colors.neutral[400]}>
                {item.desc}
              </TextComponent.SemiBold>
            </View>
          )}
          scrollEnabled={false}
          keyExtractor={(_, i) => i.toString()}
          numColumns={2}
        />
        <TextComponent.Bold size={16} color={colors.neutral[250]}>
          Total Traffic Source
        </TextComponent.Bold>
        <Spacer height={30} />
        <InsightProgressBar
          title="Instagram"
          image={InstagramImage}
          color="#A935B2"
          total={1500}
          value={600}
        />
        <InsightProgressBar
          title="Facebook"
          image={FacebookImage}
          color="#1877F2"
          total={1500}
          value={1000}
        />
        <InsightProgressBar
          title="X (Twitter)"
          image={TwitterImage}
          color="black"
          total={1500}
          value={900}
        />
        <InsightProgressBar
          title="Google"
          image={GoogleImage}
          color="#FF3D00"
          total={1500}
          value={300}
        />
        <InsightProgressBar
          title="Tiktok"
          image={TiktokImage}
          color="black"
          total={1500}
          value={800}
        />
        <InsightProgressBar
          title="Other"
          image={GlobeImage}
          color="#99D22D"
          total={1500}
          value={500}
        />
      </ScrollView>
    </Container.Padding>
  );
};

export default InsightScreen;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.neutral[100],
    padding: moderateScale(20),
    borderRadius: 8,
    width: '49%',
    marginBottom: verticalScale(8),
  },
});
