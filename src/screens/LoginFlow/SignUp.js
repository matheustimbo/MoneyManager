import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import TextInput from '../../components/TextInput';
import useColors from '../../hooks/useColors';
import useSignUp from '../../hooks/useSignUp';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {texts} from '../../utils/texts';

const SignUp = () => {
  const [colors] = useColors();
  const [
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
  ] = useSignUp();
  return (
    <KeyboardAvoidingView
      style={[
        styles.screen,
        {
          backgroundColor: colors.background,
          paddingTop: getStatusBarHeight() + 20,
        },
      ]}>
      <Text>{texts.signUp}</Text>
      <TextInput
        label={texts.emailPlaceholder}
        text={email}
        setText={setEmail}
        placeholder={texts.emailPlaceholder}
        error={emailError}
        autoCapitalize={false}
      />
      <TextInput
        label={texts.namePlaceholder}
        text={name}
        setText={setName}
        placeholder={texts.namePlaceholder}
        error={nameError}
      />
      <TextInput
        label={texts.passwordPlaceholder}
        text={password}
        setText={setPassword}
        secureTextEntry={true}
        placeholder={texts.passwordPlaceholder}
        error={passwordError}
      />
      <TouchableOpacity onPress={onTrySignUp}>
        <View>
          <Text>{texts.continue}</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 40,
  },
});

export default SignUp;
