import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Animated,
  ScrollView,
  Dimensions,
} from 'react-native';
import {interpolate} from 'react-native-reanimated';

const {width} = Dimensions.get('window');

const Statistics = () => {
  const scrollY = new Animated.Value(0);
  return (
    <View style={{flex: 1}}>
      <Animated.ScrollView
        style={{flex: 1}}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false},
        )}>
        <View style={styles.content}>
          <Text>começo</Text>
        </View>
      </Animated.ScrollView>
      <Animated.View
        style={[
          styles.header,
          {
            height: scrollY.interpolate({
              inputRange: [0, 100],
              outputRange: [150, 50],
              extrapolate: 'clamp',
            }),
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'green',
    width,
    height: 1000,
    marginTop: 150,
  },
  header: {
    position: 'absolute',
    left: 0,
    top: 0,
    width,
    height: 150,
    backgroundColor: 'red',
  },
});

export default Statistics;
