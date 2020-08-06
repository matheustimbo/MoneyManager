import React from 'react';
import {Platform, UIManager} from 'react-native';

import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {Provider as UserProvider} from '../providers/UserProvider';
import {Provider as TransactionsProvider} from '../providers/TransactionsProvider';

import Loading from './Loading';
import Home from './Home';
import Login from './Login';
import AddNewTransaction from './AddNewTransaction';

const Stack = createStackNavigator();

export default function App() {
  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  return (
    <TransactionsProvider>
      <UserProvider>
        <NavigationContainer>
          <Stack.Navigator
            headerMode="none"
            cardStyleInterpolator={CardStyleInterpolators.forHorizontalIOS}
            screenOptions={{
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}>
            <Stack.Screen
              name="Loading"
              component={Loading}
              options={{gestureEnabled: false}}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{gestureEnabled: false}}
            />
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
        </NavigationContainer>
      </UserProvider>
    </TransactionsProvider>
  );
}
