import {Pressable, View} from 'react-native';
import React from 'react';
import ReviewItem from '../components/ReviewItem';
import TextComponent from '@components/Text/textComponent';
import {appStyle} from '@utils/styles';
import colors from '@utils/colors';

const ReviewOverview = () => {
  return (
    <View style={appStyle.flex1}>
      <Pressable style={{alignSelf: 'flex-end'}}>
        <TextComponent.SemiBold
          style={{textDecorationLine: 'underline'}}
          color={colors.primary[800]}>
          See all
        </TextComponent.SemiBold>
      </Pressable>

      {[...Array(5)].map((_, i) => (
        <ReviewItem key={i} />
      ))}
    </View>
  );
};

export default ReviewOverview;
