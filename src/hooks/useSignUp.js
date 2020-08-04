/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import {texts} from '../utils/texts';
import {useNavigation} from '@react-navigation/native';
import {signUp, registerUserData} from '../api/firebase';

export default () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    signUp(email.trim(), password)
      .then(() => {
        registerUserData(name, email).then(() => {
          setLoading(false);
          navigation.navigate('MainFlow');
        });
      })
      .catch((error) => {
        setLoading(false);
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
    setEmailError,
    name,
    setName,
    nameError,
    setNameError,
    password,
    setPassword,
    passwordError,
    setPasswordError,
    onTrySignUp,
    loading,
  ];
};
