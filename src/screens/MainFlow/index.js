import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {Provider as TransactionsProvider} from '../../providers/TransactionsProvider';

import useColors from '../../hooks/useColors';
import Home from './Home';
import AddNewTransaction from './AddNewTransaction';

const Stack = createStackNavigator();

export default function MainFlow() {
  const [colors] = useColors();
  return (
    <TransactionsProvider>
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
    </TransactionsProvider>
  );
}
