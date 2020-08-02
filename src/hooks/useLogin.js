/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {texts} from '../utils/texts';
import {signIn} from '../api/firebase';

export default () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);

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
        setLoading(false);
        navigation.navigate('MainFlow');
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        if (error.code === 'auth/wrong-password') {
          setPasswordError(texts.wrongUserError);
        }
      });
  };

  return [
    email,
    setEmail,
    emailError,
    password,
    setPassword,
    passwordError,
    setPasswordError,
    onTryLogin,
    loading,
  ];
};
