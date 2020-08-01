import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CardStyleInterpolators} from '@react-navigation/stack';
import {Provider as TransactionsProvider} from '../../providers/TransactionsProvider';

import HomeStack from './HomeStack';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

export default function MainFlow() {
  return (
    <TransactionsProvider>
      <Tab.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Tab.Screen name="HomeStack" component={HomeStack} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </TransactionsProvider>
  );
}
