import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {StackNavigation} from './StackNavigator';
import {SettingsScreen} from '../screens/SettingsScreen';
import {Image, Text, View, useWindowDimensions} from 'react-native';
import {styles, colores} from '../theme/appTheme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
import {BottomTabNavigator} from './BottomTabNavigator';
import Icon from 'react-native-vector-icons/dist/Ionicons';

//https://reactnavigation.org/docs/drawer-navigator/

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  const {width} = useWindowDimensions();
  console.log(width);
  return (
    <Drawer.Navigator
      screenOptions={
        width >= 768 ? {drawerType: 'permanent'} : {drawerType: 'front'}
      }
      drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen
        name="StackNavigator"
        options={{title: 'Home'}}
        component={BottomTabNavigator}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{title: 'Settings'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/*Contenedor avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png',
          }}
          style={styles.avatar}
        />
      </View>

      {/*Opciones de menu */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('StackNavigator')}>
          <Icon name="home-outline" size={30} color={colores.primary} />
          <Text style={styles.menuButtonText}>Navegación</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Icon name="settings-outline" size={30} color={colores.primary} />
          <Text style={styles.menuButtonText}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
