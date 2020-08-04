import React from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import useColors from '../hooks/useColors';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

const FixedHeaderContent = ({
  scrollY,
  EXPANDED_HEADER_HEIGHT,
  FIXED_HEADER_HEIGHT,
  maskedBalance,
}) => {
  const [colors] = useColors();
  console.log('expanded', EXPANDED_HEADER_HEIGHT);
  console.log('fixed', FIXED_HEADER_HEIGHT);
  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFill,
        styles.minimalHeader,
        {
          opacity: scrollY.interpolate({
            inputRange: [
              FIXED_HEADER_HEIGHT,
              EXPANDED_HEADER_HEIGHT - FIXED_HEADER_HEIGHT,
            ],
            outputRange: [0, 1],
            extrapolate: 'clamp',
          }),
        },
      ]}>
      <Text
        style={[styles.minimizedHeaderBalance, {color: colors.coloredBgText}]}>
        {maskedBalance}
      </Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  minimalHeader: {
    alignItems: 'center',
    paddingTop: getStatusBarHeight(),
  },
  minimizedHeaderBalance: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default FixedHeaderContent;
