import Login from '../pages/login.js'
import Home from '../pages/home.js'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LevelLayout from '../components/levelLayout.js'


const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name='Level' component={LevelLayout} />
      </Stack.Navigator>
    
  );
};

export default RootStack;