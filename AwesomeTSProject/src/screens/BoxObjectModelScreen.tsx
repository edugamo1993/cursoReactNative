import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BoxObjectModelScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  title: {
    paddingHorizontal: 10,
    paddingTop: 10,
    fontSize: 20,
    // width: 150,
    borderWidth: 10,
    marginHorizontal: 10,
  },
});
