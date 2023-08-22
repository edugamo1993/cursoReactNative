import React from 'react';
import {Button, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Pagina3 = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina3</Text>
      <Button title="Regresar" onPress={() => navigation.pop()} />
      <Button title="Ir al principio" onPress={() => navigation.popToTop()} />
    </View>
  );
};
