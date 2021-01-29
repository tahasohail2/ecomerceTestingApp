import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from "./Authentication/Login"
import Signup from "./Authentication/Signup"
import Home from './Screens/Home';
import Cart from './Screens/Cart'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
    <Stack.Navigator
     screenOptions={{
      headerShown: false
    }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: 'Login' }}
        
      />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
