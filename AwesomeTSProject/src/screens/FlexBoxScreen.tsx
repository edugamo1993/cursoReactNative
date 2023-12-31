import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const FlexBoxScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28C4D9',
  },
  caja1: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
  caja2: {
    flex: 2,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
  caja3: {
    flex: 3, // 3 + 2 + 1 = 6 -> 3/6 = 50%
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
});
