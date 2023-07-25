import React from 'react';
import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
import {SafeAreaView} from 'react-native';
import {DimensionesScreen} from './src/screens/DimensionesScreen';
import {PositionScreen} from './src/screens/PositionScreen';
//import {ContadorScreen} from './src/screens/counter';

const App = () => {
  // return <ContadorScreen />;

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen /> */}
      <PositionScreen />
    </SafeAreaView>
  );
};

export default App;
