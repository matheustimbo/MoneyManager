/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {texts} from '../utils/texts';
import {signIn} from '../api/firebase';
import {signInAnonymously, getUserInfo} from '../api/firebase';
import {Context as UserContext} from '../providers/UserProvider';
import {Context as TransactionsContext} from '../providers/TransactionsProvider';

export default () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);
  const {setUserInfo} = useContext(UserContext);

  const onTryLogin = () => {
    if (email === '') {
      return setEmailError(texts.noEmailError);
    }
    if (password === '') {
      return setPasswordError(texts.noPasswordError);
    }
    setPasswordError('');
    setLoading(true);
    signIn(email.trim(), password)
      .then(() => {
        getUserInfo().then((userInfo) => {
          setUserInfo(userInfo.name, userInfo.email);
          setLoading(false);
          navigation.navigate('MainFlow');
        });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        if (error.code === 'auth/wrong-password') {
          setPasswordError(texts.wrongUserError);
        }
      });
  };

  const onTryLoginAnonymously = () => {
    setLoading(true);
    signInAnonymously().then(() => {
      setLoading(false);
      navigation.navigate('MainFlow');
    });
  };

  return [
    email,
    setEmail,
    emailError,
    setEmailError,
    password,
    setPassword,
    passwordError,
    setPasswordError,
    onTryLogin,
    onTryLoginAnonymously,
    loading,
  ];
};
