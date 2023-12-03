import React, {useEffect} from 'react';
import Home from './screens/home';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './navigation/HomeStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RegisterStack from './navigation/RegisterStack';
import AuthProvider from './context/provider';
import useAuthContext from './context/useAuthContext';
import AppNav from './navigation/AppNav';

const App = () => {
  return (
    <>
      <AuthProvider>
        <AppNav />
      </AuthProvider>
    </>
  );
};

export default App;
