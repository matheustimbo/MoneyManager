import React from 'react';
import {View} from 'react-native';
import TextInput from './TextInput';
import useSignUp from '../hooks/useSignUp';
import {texts} from '../utils/texts';
import AuthButton from './AuthButton';

const SignUpInputs = () => {
  const [
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
  ] = useSignUp();
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
        text={name}
        setText={setName}
        placeholder={texts.namePlaceholder}
        error={nameError}
        setError={setNameError}
      />
      <TextInput
        text={password}
        setText={setPassword}
        secureTextEntry={true}
        placeholder={texts.passwordPlaceholder}
        error={passwordError}
        setError={setPasswordError}
      />
      <AuthButton
        loading={loading}
        label={texts.signUp}
        onPress={onTrySignUp}
      />
    </>
  );
};

export default SignUpInputs;
