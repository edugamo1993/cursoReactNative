import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
  texto: string;
  backgroundColor?: 'grey' | 'blackGrey' | 'orange';
  ancho?: boolean;
  action: (numeroTexto: string) => void;
}

export const BotonCalc = ({
  texto,
  backgroundColor = 'grey',
  ancho = false,
  action,
}: Props) => {
  let colorStyle = colores.grey;
  let colorTexto = colores.textoNegro;
  switch (backgroundColor) {
    case 'orange':
      colorStyle = colores.orange;
      colorTexto = colores.textoBlanco;
      break;
    case 'blackGrey':
      colorStyle = colores.blackGrey;
      colorTexto = colores.textoBlanco;
      break;
  }
  return (
    <TouchableOpacity onPress={() => action(texto)}>
      <View style={{...styles.boton, ...colorStyle, width: ancho ? 180 : 80}}>
        <Text style={{...styles.botonTexto, ...colorTexto}}>{texto}</Text>
      </View>
    </TouchableOpacity>
  );
};

const colores = StyleSheet.create({
  orange: {
    backgroundColor: '#FF9427',
  },
  grey: {
    backgroundColor: '#9B9B9B',
  },
  blackGrey: {
    backgroundColor: '#2D2D2D',
  },
  textoBlanco: {color: 'white'},
  textoNegro: {color: 'black'},
});
