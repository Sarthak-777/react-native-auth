import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';
import {Button} from 'react-native';
import useAuthContext from '../context/useAuthContext';

const Stack = createStackNavigator();

const HomeStack = () => {
  const [, actions] = useAuthContext();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerRight: () => (
            <Button
              title="Logout"
              onPress={() => {
                actions?.signOut();
              }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
