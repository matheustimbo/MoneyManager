import React from 'react';
import {View, Text, StyleSheet, Animated, Dimensions} from 'react-native';
import {texts} from '../utils/texts';
import LogoutButton from './LogoutButton';
import useColors from '../hooks/useColors';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

const {width} = Dimensions.get('window');

const ExpandedHeaderContent = ({
  scrollY,
  name,
  FIXED_HEADER_HEIGHT,
  maskedBalance,
}) => {
  const [colors] = useColors();
  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFill,
        styles.header,
        {
          zIndex: scrollY.interpolate({
            inputRange: [0, 50],
            outputRange: [1, -1],
            extrapolate: 'clamp',
          }),
          opacity: scrollY.interpolate({
            inputRange: [0, FIXED_HEADER_HEIGHT],
            outputRange: [1, 0],
            extrapolate: 'clamp',
          }),
        },
      ]}>
      <View style={[styles.internalHeader]}>
        <View>
          <Text style={[styles.welcome, {color: colors.coloredBgText}]}>
            {texts.welcome}
          </Text>
          <Text style={[styles.name, {color: colors.coloredBgText}]}>
            {name}
          </Text>
        </View>
        <LogoutButton />
      </View>
      <View style={styles.headerBalance}>
        <Text style={[styles.balanceLabel, {color: colors.coloredBgText}]}>
          {texts.currentBalance}
        </Text>
        <Text style={[styles.balance, {color: colors.coloredBgText}]}>
          {maskedBalance}
        </Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: getStatusBarHeight(),
  },
  internalHeader: {
    width,
    paddingHorizontal: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 18,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerBalance: {
    alignItems: 'center',
  },
  balanceLabel: {
    fontSize: 22,
  },
  balance: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 24,
  },
});

export default ExpandedHeaderContent;
