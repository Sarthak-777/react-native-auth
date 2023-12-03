import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import HomeStack from './HomeStack';
import RegisterStack from './RegisterStack';
import useAuthContext from '../context/useAuthContext';

const AppNav = () => {
  const [state] = useAuthContext();

  return (
    <NavigationContainer>
      {state?.token ? <HomeStack /> : <RegisterStack />}
    </NavigationContainer>
  );
};

export default AppNav;
