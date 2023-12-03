import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import useAuthContext from '../context/useAuthContext';

const Login = () => {
  const [state, actions] = useAuthContext();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={async () => {
          try {
            await AsyncStorage.setItem('token', '123456');
            actions?.setToken('123456');
          } catch (e) {
            // console.log(e);
          }
        }}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 40,
    paddingTop: 80,
  },
});
