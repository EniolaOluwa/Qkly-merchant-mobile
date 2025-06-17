import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ReviewItem from '../components/ReviewItem';
import TextComponent from '@components/Text/textComponent';
import {appStyle} from '@utils/styles';
import colors from '@utils/colors';
import Spacer from '@components/Spacer';

const ReviewOverview = () => {
  return (
    <View style={appStyle.flex1}>
      <View style={appStyle.flexRowSpaceCenter}>
        <TextComponent.SemiBold size={16}>Reviews</TextComponent.SemiBold>
        <Pressable>
          <TextComponent.SemiBold
            style={{textDecorationLine: 'underline'}}
            color={colors.primary[800]}>
            See all
          </TextComponent.SemiBold>
        </Pressable>
      </View>

      <Spacer height={10} />

      {[...Array(5)].map((_, i) => (
        <ReviewItem key={i} />
      ))}
    </View>
  );
};

export default ReviewOverview;

const styles = StyleSheet.create({});
