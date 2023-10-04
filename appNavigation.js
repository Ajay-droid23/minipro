import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Med from '../screens/Med'
import Home from '../screens/Home';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import Prof from '../screens/Prof';



const Stack = createNativeStackNavigator();


export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'
      screenOptions={{
        headerShown:false,
        animation :'simple_push',
      }}>
         {/* <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
        <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
        <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUpScreen} />
      <Stack.Screen name="Home" options={{headerShown: false}} component={Home} />
       <Stack.Screen name="Med" options={{headerShown: false}} component={Med} /> */}
       <Stack.Screen name="Prof" options={{headerShown: false}} component={Prof} /> 
        

      </Stack.Navigator>
    </NavigationContainer>
  )
}