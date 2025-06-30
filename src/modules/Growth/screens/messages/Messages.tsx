import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import Container from '@components/Container';
import Header from '@components/Header';
import colors from '@utils/colors';
import TextComponent from '@components/Text/textComponent';
import Spacer from '@components/Spacer';
import Buttons from '@components/Button';
import {appStyle} from '@utils/styles';

const Messages = () => {
  return (
    <Container.Padding>
      <Header title="Messages" desc="Boost sales with customer messages" />
      <FlatList
        data={[...Array(10)]}
        keyExtractor={(_, i) => i.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({}) => (
          <View style={styles.container}>
            <TextComponent.Bold size={16}>Cart Abandonment</TextComponent.Bold>
            <Spacer height={4} />
            <TextComponent.Regular color={colors.textPrimary}>
              Message message message message message
            </TextComponent.Regular>
            <Spacer height={10} />
            <TextComponent.Regular color={colors.textPrimary}>
              Hi (Customer Name).
            </TextComponent.Regular>
            <Spacer height={10} />
            <TextComponent.Regular color={colors.textPrimary}>
              We noticed you left some great items in your cart. They’re still
              here and waiting for you! {'\n\n'}Complete your purchase now
              before they’re gone.
            </TextComponent.Regular>
            <Spacer height={20} />
            <View style={[appStyle.flexRowCenter, {alignSelf: 'flex-end'}]}>
              <Buttons.Primary style={{width: '30%', height: 50}}>
                Send
              </Buttons.Primary>
              <Spacer width={20} />
              <Buttons.Outline style={{width: '30%', height: 50}}>
                Cancel
              </Buttons.Outline>
            </View>
          </View>
        )}
      />
    </Container.Padding>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.neutral[150],
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 16,
    paddingVertical: 26,
  },
});
