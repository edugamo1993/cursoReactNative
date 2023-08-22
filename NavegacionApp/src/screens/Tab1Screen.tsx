import React, {useContext, useEffect} from 'react';
import {View, Text} from 'react-native';
import {styles, colores} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {TouchableIcon} from '../components/TouchableIcon';
import {AuthContext} from '../context/AuthContext';

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tab1Screen effect');
  }, []);

  return (
    <View
      style={{
        ...styles.globalMargin,
      }}>
      <Text>Tab1Screen</Text>
      <Text>
        <TouchableIcon
          name="airplane-outline"
          size={80}
          color={colores.primary}
        />
        <TouchableIcon
          name="game-controller-outline"
          size={80}
          color={colores.primary}
        />
        <TouchableIcon name="home-outline" size={80} color={colores.primary} />
        <TouchableIcon
          name="person-add-outline"
          size={80}
          color={colores.primary}
        />
        <TouchableIcon
          name="desktop-outline"
          size={80}
          color={colores.primary}
        />
        <TouchableIcon
          name="thumbs-up-outline"
          size={80}
          color={colores.primary}
        />
        <TouchableIcon
          name="hammer-outline"
          size={80}
          color={colores.primary}
        />
      </Text>
    </View>
  );
};
