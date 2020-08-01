import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Login from './Login';
import SignUp from './SignUp';

const Stack = createStackNavigator();

export default function LoginFlow() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      headerMode="none">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{gestureEnabled: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{gestureEnabled: false}}
      />
    </Stack.Navigator>
  );
}
