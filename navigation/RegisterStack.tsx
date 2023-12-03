import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/login';

const Stack = createStackNavigator();

const RegisterStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default RegisterStack;
