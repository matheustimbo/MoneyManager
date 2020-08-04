import React from 'react';
import {StatusBar as DefaultStatusBar, useColorScheme} from 'react-native';

const StatusBar = () => {
  const colorScheme = useColorScheme();
  return (
    <DefaultStatusBar
      translucent
      barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
      backgroundColor={'transparent'}
    />
  );
};

export default StatusBar;
