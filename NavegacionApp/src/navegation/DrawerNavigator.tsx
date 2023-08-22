import {createDrawerNavigator} from '@react-navigation/drawer';
import {StackNavigation} from './StackNavigator';
import {SettingsScreen} from '../screens/SettingsScreen';
import {useWindowDimensions} from 'react-native';

//https://reactnavigation.org/docs/drawer-navigator/

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {
  const {width} = useWindowDimensions();
  console.log(width);
  return (
    <Drawer.Navigator
      screenOptions={
        width >= 768 ? {drawerType: 'permanent'} : {drawerType: 'front'}
      }>
      <Drawer.Screen
        name="StackNavigator"
        options={{title: 'Home'}}
        component={StackNavigation}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{title: 'Settings'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};
