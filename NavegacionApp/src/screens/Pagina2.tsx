import React, {useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import {styles} from '../theme/appTheme';
import {StackNavigationProp} from '@react-navigation/stack';

import {useNavigation} from '@react-navigation/core';

export const Pagina2 = () => {
  const navigator = useNavigation<StackNavigationProp<any>>();

  useEffect(() => {
    navigator.setOptions({
      title: 'hello world',
      headerBackTitle: 'Atrás', //Only for ios
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina2</Text>
      <Button
        title="Ir pagina3"
        onPress={() => navigator.navigate('Pagina3')}
      />
    </View>
  );
};
