import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {StackNavigation} from './StackNavigator';
import {Tab1Screen} from '../screens/Tab1Screen';
import {colores, styles} from '../theme/appTheme';
import {Platform, Text} from 'react-native';
import {TopTabNavigator} from './TopNavigator';
import Icon from 'react-native-vector-icons/dist/Ionicons';

//https://reactnavigation.org/docs/bottom-tab-navigator/

export const BottomTabNavigator = () => {
  return Platform.OS === 'ios' ? <IosTabNavigator /> : <AndroidTabNavigator />;
};

//ANDROID
const AndroidTab = createMaterialBottomTabNavigator();

const AndroidTabNavigator = () => {
  return (
    <AndroidTab.Navigator
      sceneAnimationEnabled={true}
      barStyle={{backgroundColor: colores.primary}}
      activeColor="white"
      inactiveColor="grey"
      screenOptions={({route}) => ({
        tabBarColor: 'white',

        tabBarIcon: ({color, focused}) => {
          console.log(route.name);
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1':
              iconName = 'home-outline';
              break;
            case 'Tab2':
              iconName = 'layers-outline';
              break;
            case 'Nav':
              iconName = 'bookmarks-outline';
          }
          return <Icon name={iconName} size={20} color={'white'} />;
        },
      })}>
      <AndroidTab.Screen
        name="Tab1"
        options={{
          title: 'Tab1',
        }}
        component={Tab1Screen}
      />
      <AndroidTab.Screen
        name="Tab2"
        options={{title: 'Tab2'}}
        component={TopTabNavigator}
      />
      <AndroidTab.Screen
        name="Nav"
        options={{title: 'Stack'}}
        component={StackNavigation}
      />
    </AndroidTab.Navigator>
  );
};

//IOS
const TabIos = createBottomTabNavigator();

const IosTabNavigator = () => {
  return (
    <TabIos.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({color, focused, size}) => {
          console.log(route.name);
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1':
              iconName = 'home-outline';
              break;
            case 'Tab2':
              iconName = 'layers-outline';
              break;
            case 'Nav':
              iconName = 'bookmarks-outline';
          }
          return <Icon name={iconName} size={20} color={'white'} />;
        },
      })}>
      {/* <Tab.Screen
        name="Tab1"
        options={{
          title: 'Tab1',
          tabBarIcon: props => <Text style={{color: props.color}}>T1</Text>,
        }}
        component={Tab1Screen}
      /> */}
      <TabIos.Screen
        name="Tab1"
        options={{
          title: 'Tab1',
        }}
        component={Tab1Screen}
      />
      <TabIos.Screen
        name="Tab2"
        options={{title: 'Tab2'}}
        component={TopTabNavigator}
      />
      <TabIos.Screen
        name="Nav"
        options={{title: 'Stack'}}
        component={StackNavigation}
      />
    </TabIos.Navigator>
  );
};
