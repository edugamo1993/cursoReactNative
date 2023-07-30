import React, {useRef, useState} from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import {styles} from '../theme/appTheme';
import {BotonCalc} from '../components/BotonCalc';
import {useCalculadora} from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {
  const {
    numero,
    numeroAnterior,
    addNumber,
    botonDividir,
    botonMultiplicar,
    botonRestar,
    botonSumar,
    limpiar,
    delLastEntry,
    positivoNegativo,
    doOperation,
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoAnterior}>{numeroAnterior}</Text>
      )}

      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>
      <View style={styles.filaboton}>
        {/* Boton */}
        <BotonCalc texto="C" action={limpiar} />
        <BotonCalc texto="+/-" action={positivoNegativo} />
        <BotonCalc texto="del" action={delLastEntry} />
        <BotonCalc texto="/" backgroundColor="orange" action={botonDividir} />
      </View>
      <View style={styles.filaboton}>
        {/* Boton */}
        <BotonCalc texto="7" backgroundColor="blackGrey" action={addNumber} />
        <BotonCalc texto="8" backgroundColor="blackGrey" action={addNumber} />
        <BotonCalc texto="9" backgroundColor="blackGrey" action={addNumber} />
        <BotonCalc
          texto="x"
          backgroundColor="orange"
          action={botonMultiplicar}
        />
      </View>
      <View style={styles.filaboton}>
        {/* Boton */}
        <BotonCalc texto="4" backgroundColor="blackGrey" action={addNumber} />
        <BotonCalc texto="5" backgroundColor="blackGrey" action={addNumber} />
        <BotonCalc texto="6" backgroundColor="blackGrey" action={addNumber} />
        <BotonCalc texto="-" backgroundColor="orange" action={botonRestar} />
      </View>
      <View style={styles.filaboton}>
        {/* Boton */}
        <BotonCalc texto="1" backgroundColor="blackGrey" action={addNumber} />
        <BotonCalc texto="2" backgroundColor="blackGrey" action={addNumber} />
        <BotonCalc texto="3" backgroundColor="blackGrey" action={addNumber} />
        <BotonCalc texto="+" backgroundColor="orange" action={botonSumar} />
      </View>
      <View style={styles.filaboton}>
        {/* Boton */}
        <BotonCalc
          texto="0"
          backgroundColor="blackGrey"
          ancho
          action={addNumber}
        />
        <BotonCalc texto="." backgroundColor="blackGrey" action={addNumber} />
        <BotonCalc texto="=" backgroundColor="blackGrey" action={doOperation} />
      </View>
    </View>
  );
};
