import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import ForgotPassword from '../Screens/ForgotPassword';

export default function Index() {
  const FirstStack = createNativeStackNavigator();
  return (
    <FirstStack.Navigator>
      <FirstStack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <FirstStack.Screen
        name="Sign Up"
        component={SignUp}
        options={{headerShown: false}}
      />
      <FirstStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{headerShown: false}}
      />
    </FirstStack.Navigator>
  );
}
const styles = StyleSheet.create({});
