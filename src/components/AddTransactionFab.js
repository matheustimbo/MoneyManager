import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import useColors from '../hooks/useColors';

const AddTransactionFab = () => {
  const navigation = useNavigation();
  const [colors] = useColors();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('AddNewTransaction')}
      style={[styles.container, {backgroundColor: colors.accent}]}>
      <Text style={[styles.text, {color: colors.coloredBgText}]}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 52,
    height: 52,
    borderRadius: 52,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  text: {
    fontSize: 20,
  },
});

export default AddTransactionFab;
