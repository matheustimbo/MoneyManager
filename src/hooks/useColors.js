/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';
import {colorPallete} from '../utils/colors';

export default () => {
  const colorScheme = useColorScheme();
  const [colors, setColors] = useState(colorPallete.light);

  useEffect(() => {
    setColors({
      ...(colorScheme === 'light' ? colorPallete.light : colorPallete.dark),
    });
  }, [colorScheme]);

  return [colors];
};
