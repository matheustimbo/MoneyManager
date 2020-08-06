import React from 'react';
import {View} from 'react-native';
import TextInput from './TextInput';
import useLogin from '../hooks/useLogin';
import {texts} from '../utils/texts';
import AuthButton from './AuthButton';

const LoginInputs = () => {
  const [
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
  ] = useLogin();
  return (
    <>
      <TextInput
        text={email}
        setText={setEmail}
        placeholder={texts.emailPlaceholder}
        error={emailError}
        setError={setEmailError}
        autoCapitalize={false}
      />
      <TextInput
        text={password}
        setText={setPassword}
        secureTextEntry={true}
        placeholder={texts.passwordPlaceholder}
        error={passwordError}
        setError={setPasswordError}
      />
      <AuthButton loading={loading} label={texts.login} onPress={onTryLogin} />
    </>
  );
};

export default LoginInputs;
