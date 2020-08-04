import React from 'react';
import {Dimensions, Animated, StyleSheet} from 'react-native';
import useColors from '../hooks/useColors';
import ExpandedHeaderContent from './ExpandedHeaderContent';
import FixedHeaderContent from './FixedHeaderContent';

const {width} = Dimensions.get('window');

const Header = ({
  scrollY,
  EXPANDED_HEADER_HEIGHT,
  FIXED_HEADER_HEIGHT,
  maskedBalance,
  name,
}) => {
  const [colors] = useColors();
  return (
    <Animated.View
      style={[
        styles.screenHeader,
        {
          backgroundColor: colors.primary,
          height: scrollY.interpolate({
            inputRange: [0, EXPANDED_HEADER_HEIGHT - FIXED_HEADER_HEIGHT],
            outputRange: [EXPANDED_HEADER_HEIGHT, FIXED_HEADER_HEIGHT],
            extrapolate: 'clamp',
          }),
        },
      ]}>
      <FixedHeaderContent
        scrollY={scrollY}
        name={name}
        FIXED_HEADER_HEIGHT={FIXED_HEADER_HEIGHT}
        EXPANDED_HEADER_HEIGHT={EXPANDED_HEADER_HEIGHT}
        maskedBalance={maskedBalance}
      />

      <ExpandedHeaderContent
        scrollY={scrollY}
        name={name}
        FIXED_HEADER_HEIGHT={FIXED_HEADER_HEIGHT}
        EXPANDED_HEADER_HEIGHT={EXPANDED_HEADER_HEIGHT}
        maskedBalance={maskedBalance}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  screenHeader: {
    position: 'absolute',
    left: 0,
    top: 0,
    width,
    paddingTop: 20,
    alignItems: 'center',
    zIndex: 2,
  },
});

export default Header;
