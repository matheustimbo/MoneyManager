import React from 'react';
import {Platform, UIManager} from 'react-native';

import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {Provider as UserProvider} from '../providers/UserProvider';

import Loading from './Loading';
import MainFlow from './MainFlow';
import LoginFlow from './LoginFlow';

const Stack = createStackNavigator();

export default function App() {
  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  return (
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
            name="LoginFlow"
            component={LoginFlow}
            options={{gestureEnabled: false}}
          />
          <Stack.Screen
            name="MainFlow"
            component={MainFlow}
            options={{gestureEnabled: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
