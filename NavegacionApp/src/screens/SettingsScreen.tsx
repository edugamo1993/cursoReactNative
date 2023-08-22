import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {AuthContext} from '../context/AuthContext';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {colores} from '../theme/appTheme';

export const SettingsScreen = () => {
  const insests = useSafeAreaInsets(); // instead of SafeAreaView

  const context = useContext(AuthContext);

  return (
    <View style={{marginTop: insests.top}}>
      <Text>SettingsScreen</Text>
      <Text>{JSON.stringify(context.authState, null, 3)}</Text>

      {context.authState.favouriteIcon && (
        <Icon
          name={context.authState.favouriteIcon}
          size={80}
          color={colores.primary}
        />
      )}
    </View>
  );
};
