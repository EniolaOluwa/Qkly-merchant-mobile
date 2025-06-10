import {StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Unauthenticated from '@routes/Unauthenticated';
import {useSelector} from 'react-redux';
import {selectUserAuthenticationStatus} from '@store/userSlice/selectors';
import Authenticated from '@routes/Authenticated';

const Main = () => {
  const isAuthenticated = useSelector(selectUserAuthenticationStatus);
  return (
    <NavigationContainer>
      {isAuthenticated ? <Authenticated /> : <Unauthenticated />}
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor="transparent"
      />
    </NavigationContainer>
  );
};

export default Main;
