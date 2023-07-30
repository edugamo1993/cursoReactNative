import React from 'react';
import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
import {SafeAreaView} from 'react-native';
import {DimensionesScreen} from './src/screens/DimensionesScreen';
import {PositionScreen} from './src/screens/PositionScreen';
import {FlexBoxWrapScreen} from './src/screens/FlexBoxWrapScreen';
import {Tarea} from './src/screens/tarea';
//import {ContadorScreen} from './src/screens/counter';
import {CalculadoraScreen} from './src/screens/CalculadoraScreen';

const App = () => {
  // return <ContadorScreen />;

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen /> */}
      {/* <PositionScreen /> */}
      {/* <FlexBoxWrapScreen /> */}
      {/* <Tarea /> */}
      <CalculadoraScreen />
    </SafeAreaView>
  );
};

export default App;
