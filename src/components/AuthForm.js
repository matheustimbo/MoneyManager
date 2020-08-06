import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import useColors from '../hooks/useColors';
import TextInput from '../components/TextInput';
import {texts} from '../utils/texts';
import useLogin from '../hooks/useLogin';
import SignUpInputs from './SignUpInputs';
import LoginInputs from './LoginInputs';

const {width} = Dimensions.get('window');

const AuthForm = ({alreadyHasAccount}) => {
  const [colors] = useColors();

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: colors.authSelectionContainer},
      ]}>
      {alreadyHasAccount ? <LoginInputs /> : <SignUpInputs />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: width * 0.8,
    elevation: 5,
  },
});

export default AuthForm;
