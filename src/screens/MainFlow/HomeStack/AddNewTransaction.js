import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import useColors from '../../../hooks/useColors';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
const {width} = Dimensions.get('window');

const AddNewTransaction = ({navigation}) => {
  const [colors] = useColors();
  return (
    <View style={[styles.screen, {backgroundColor: colors.background}]}>
      <View style={styles.header} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    paddingTop: 20 + getStatusBarHeight(),
    width,
    backgroundColor: 'green',
  },
});

export default AddNewTransaction;
