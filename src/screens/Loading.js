/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import useColors from '../hooks/useColors';

const Loading = ({navigation}) => {
  const [colors] = useColors();

  useEffect(()=>{
    navigation.navigate(auth().currentUser ? 'MainFlow' : 'LoginFlow');
  },[]);

  return <View style={[styles.screen, {backgroundColor: colors.background}]}>
    <Text style={{color: colors.regularText}}>Loading</Text>
  </View>;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loading;
