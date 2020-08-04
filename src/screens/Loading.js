/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, {useEffect, useContext} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import useColors from '../hooks/useColors';
import {getCurrentUser, getUserInfo} from '../api/firebase';
import {Context as UserContext} from '../providers/UserProvider';
import StatusBar from '../components/StatusBar';
import Logo from '../assets/svgs/Logo';

const { width} = Dimensions.get('window');

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
    <Logo width={width / 2} height={width / 2} />
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
