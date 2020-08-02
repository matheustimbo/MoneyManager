/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import useColors from '../hooks/useColors';
import moment from 'moment';
import {getCurrentUser} from '../api/firebase';

const Loading = ({navigation}) => {
  const [colors] = useColors();

  useEffect(()=>{
    console.log('entrou');
    getCurrentUser().then(currentUser=>{
      navigation.navigate(currentUser ? 'MainFlow' : 'LoginFlow');
    });

    //moment.defineLocale('pt-br');
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
