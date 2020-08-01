import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Home from './Home';
import AddNewTransaction from './AddNewTransaction';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      headerMode="none">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{gestureEnabled: false}}
      />
      <Stack.Screen
        name="AddNewTransaction"
        component={AddNewTransaction}
        options={{gestureEnabled: false}}
      />
    </Stack.Navigator>
  );
}
