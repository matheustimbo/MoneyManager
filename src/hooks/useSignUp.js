/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import {texts} from '../utils/texts';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

export default () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const onTrySignUp = () => {
    setEmailError('');
    setNameError('');
    setPasswordError('');
    if (name.length < 4) {
      return setNameError(texts.nameError);
    }
    if (password.length < 6) {
      return setPasswordError(texts.passwordError);
    }
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        navigation.navigate('MainFlow');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          setEmailError(texts.emailInUseError);
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          setEmailError(texts.invalidEmailError);
        }

        console.log(error);
      });
  };

  return [
    email,
    setEmail,
    emailError,
    name,
    setName,
    nameError,
    password,
    setPassword,
    passwordError,
    onTrySignUp,
  ];
};
