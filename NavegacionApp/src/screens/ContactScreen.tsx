import React, {useContext, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {AuthContext, AuthState} from '../context/AuthContext';

export const ContactScreen = () => {
  const {
    signIn,
    signOut,
    authState: {isLoggedIn},
  } = useContext(AuthContext);

  return (
    <View>
      <Text>ContactScreen</Text>
      {!isLoggedIn ? (
        <Button title="signIn" onPress={signIn} />
      ) : (
        <Button title="signOut" onPress={signOut} />
      )}
    </View>
  );
};
