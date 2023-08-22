import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {colores, styles} from '../theme/appTheme';
import {DrawerScreenProps} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/dist/Ionicons';

// interface Props extends StackScreenProps<any, any> {}
interface Props extends DrawerScreenProps<any, any> {}

export const Pagina1 = ({navigation}: Props) => {
  navigation.setOptions({
    headerLeft: () => (
      <TouchableOpacity
        onPress={navigation.toggleDrawer}
        style={{marginLeft: 15}}>
        <Icon name="menu-outline" size={35} color={colores.primary} />
      </TouchableOpacity>
    ),
  });

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1</Text>

      <Button
        title="Ir a pagina 2"
        onPress={() => navigation.navigate('Pagina2')}
      />

      <Text>Navegar con argumentos</Text>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={styles.botonGrande}
          onPress={() =>
            navigation.navigate('PersonaScreen', {id: 1, nombre: 'Pedro'})
          }>
          <Icon name="body-outline" size={35} color={'white'} />
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#FF9527'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {id: 2, nombre: 'Lucía'})
          }>
          <Icon name="body-outline" size={35} color={'white'} />
          <Text style={styles.botonGrandeTexto}>Lucía</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
