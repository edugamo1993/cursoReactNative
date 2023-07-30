import React from 'react';
import {StyleSheet, View} from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaVerde}></View>
      <View style={styles.cajaMorada}></View>
      <View style={styles.cajaNaranja}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: 400,
    height: 400,

    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#28C4D9',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: 0,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: 'white',
  },
  cajaNaranja: {
    position: 'absolute',
    right: 0,
    width: 100,
    height: 100,
    backgroundColor: '#F0A23B',
    borderWidth: 10,
    borderColor: 'white',
  },
  cajaVerde: {
    // position: 'absolute',
    // right: 0,
    // bottom: 0,
    // top: 0,
    // left: 0,
    ...StyleSheet.absoluteFillObject,
    // width: 100,
    // height: 100,
    backgroundColor: 'green',
    borderWidth: 10,
    borderColor: 'white',
  },
});
