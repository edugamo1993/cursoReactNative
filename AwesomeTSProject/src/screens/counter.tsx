import {StyleSheet, Text, View} from 'react-native';
import {useState} from 'react';
import {Fab} from '../components/Fab';

export const ContadorScreen = () => {
  const [valor, setValor] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {valor}</Text>

      <Fab title="+1" onPress={() => setValor(valor + 1)} position="br" />
      <Fab title="-1" onPress={() => setValor(valor - 1)} position="bl" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: '#5856D6',
    fontSize: 45,
    top: -15,
    textAlign: 'center',
  },
});
