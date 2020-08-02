import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CardStyleInterpolators} from '@react-navigation/stack';
import {Provider as TransactionsProvider} from '../../providers/TransactionsProvider';

import HomeStack from './HomeStack';
import Profile from './Profile';
import Statistics from './Statistics';

import ProfileIcon from '../../assets/svgs/Profile.svg';
import StatisticsIcon from '../../assets/svgs/Statistics.svg';
import MoneyIcon from '../../assets/svgs/Money.svg';
import useColors from '../../hooks/useColors';

const Tab = createBottomTabNavigator();

export default function MainFlow() {
  const [colors] = useColors();
  return (
    <TransactionsProvider>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: colors.primary,
        }}
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Tab.Screen
          name="HomeStack"
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <MoneyIcon width={size} height={size} fill={color} />
            ),
          }}
          component={HomeStack}
        />
        <Tab.Screen
          name="Statistics"
          options={{
            tabBarLabel: 'Statistics',
            tabBarIcon: ({color, size}) => (
              <StatisticsIcon width={size} height={size} fill={color} />
            ),
          }}
          component={Statistics}
        />
        <Tab.Screen
          name="Profile"
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <ProfileIcon width={size} height={size} fill={color} />
            ),
          }}
          component={Profile}
        />
      </Tab.Navigator>
    </TransactionsProvider>
  );
}
