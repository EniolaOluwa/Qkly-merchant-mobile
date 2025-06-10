import {Platform, Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabStackParamList} from 'navigation-route-type';
import {TabArr} from '@utils/data';
import TextComponent from '@components/Text/textComponent';
import {moderateScale} from '@utils/responsive';
import colors from '@utils/colors';

const {Navigator, Screen} = createBottomTabNavigator<
  TabStackParamList,
  'TabNavigator'
>();

const TabButton = props => {
  const {item, onPress} = props;
  const focused = props['aria-selected'];

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.btn}>
        {focused ? item.activeIcon() : item.inactiveIcon()}
      </View>
      <TextComponent.Regular
        size={12}
        color={focused ? colors.primary[700] : colors.neutral[200]}>
        {item.route}
      </TextComponent.Regular>
    </Pressable>
  );
};

const TabNavigator = () => {
  return (
    <Navigator
      id="TabNavigator"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height:
            Platform.OS === 'android' ? moderateScale(80) : moderateScale(100),
        },
      }}>
      {TabArr.map(item => (
        <Screen
          key={item.route}
          name={item.route as keyof TabStackParamList}
          component={item.component}
          options={{
            tabBarShowLabel: false,
            tabBarButton: props => <TabButton {...props} item={item} />,
          }}
        />
      ))}
    </Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: 40,
    height: 40,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: 'white',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
