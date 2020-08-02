/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {texts} from '../utils/texts';

export default () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);

  const onTryLogin = () => {
    setPasswordError('');
    setLoading(true);
    auth()
      .signInWithEmailAndPassword(email, password)
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
