import {FlatList, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import Container from '@components/Container';
import AppTabHeader from '@components/Header/AppTabHeader';
import {GrowthData} from '@utils/data';
import colors from '@utils/colors';
import TextComponent from '@components/Text/textComponent';
import Spacer from '@components/Spacer';
import {useNavigation} from '@react-navigation/native';
import {moderateScale, verticalScale} from '@utils/responsive';
const MainGrowth = () => {
  const {navigate} = useNavigation<any>();

  return (
    <Container.Normal>
      <AppTabHeader title="Growth" desc="Manage your Business in one place" />
      <FlatList
        data={GrowthData}
        renderItem={({item, index}) => (
          <Pressable
            style={[
              styles.container,
              {
                marginLeft: index % 2 === 0 ? 0 : '2%',
              },
            ]}
            onPress={() => navigate(item.navigation)}>
            {item?.icon()}
            <Spacer height={16} />
            <TextComponent.SemiBold size={18} color={colors.neutral[400]}>
              {item.title}
            </TextComponent.SemiBold>
            <Spacer height={10} />
            <TextComponent.Regular size={10} color={colors.textPrimary}>
              {item.desc}
            </TextComponent.Regular>
          </Pressable>
        )}
        keyExtractor={(_, i) => i.toString()}
        numColumns={2}
      />
    </Container.Normal>
  );
};

export default MainGrowth;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.neutral[100],
    padding: moderateScale(22),
    borderRadius: 8,
    width: '49%',
    marginBottom: verticalScale(16),
  },
});
