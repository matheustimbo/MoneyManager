/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, {useEffect, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import useColors from '../hooks/useColors';
import moment from 'moment';
import {getCurrentUser, getUserInfo} from '../api/firebase';
import {Context as UserContext} from '../providers/UserProvider';
import StatusBar from '../components/StatusBar';

const Loading = ({navigation}) => {
  const [colors] = useColors();
  const {setUserInfo} = useContext(UserContext);

  useEffect(()=>{
    console.log('entrou');
    getCurrentUser().then(currentUser=>{
      if (currentUser){
        getUserInfo()
        .then(userInfo=>{
          const {name, email} = userInfo;
          setUserInfo(name, email);
          navigation.navigate('MainFlow');
        });

      } else {
        navigation.navigate('LoginFlow');
      }
    });

    //moment.defineLocale('pt-br');
  },[]);

  return <View style={[styles.screen, {backgroundColor: colors.background}]}>
    <StatusBar />
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
