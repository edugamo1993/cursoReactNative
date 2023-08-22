import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {StackNavigation} from './src/navegation/StackNavigator';
import {MenuLateral} from './src/navegation/MenuLateral';
import {AuthProvider} from './src/context/AuthContext';

/*
https://reactnavigation.org/docs/getting-started
https://reactnavigation.org/docs/stack-navigator/
*/

export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigation /> */}
        <MenuLateral />

        {/* <BottomTabNavigator /> */}
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({children}: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;
