import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {texts} from '../../utils/texts';
import useColors from '../../hooks/useColors';
import TextInput from '../../components/TextInput';
import useLogin from '../../hooks/useLogin';
import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {
  const [colors] = useColors();
  const [
    email,
    setEmail,
    emailError,
    password,
    setPassword,
    passwordError,
    setPasswordError,
    onTryLogin,
  ] = useLogin();
  return (
    <View style={[styles.screen, {backgroundColor: colors.background}]}>
      <TextInput
        label={texts.emailPlaceholder}
        text={email}
        setText={setEmail}
        placeholder={texts.emailPlaceholder}
        error={emailError}
        autoCapitalize={false}
      />
      <TextInput
        label={texts.passwordPlaceholder}
        text={password}
        setText={setPassword}
        secureTextEntry={true}
        placeholder={texts.passwordPlaceholder}
        error={passwordError}
      />
      <TouchableOpacity onPress={onTryLogin}>
        <Text>{texts.login}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          auth()
            .signInAnonymously()
            .then(() => navigation.navigate('MainFlow'))
        }>
        <Text>{texts.signInAnonimously}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={{color: colors.regularText}}>
          {texts.navigateToSignUp}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
