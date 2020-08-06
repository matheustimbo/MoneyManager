/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Dimensions,
  Text,
  TextInput as DefaultTextInput,
  StyleSheet,
} from 'react-native';
import useColors from '../hooks/useColors';
import {TextInputMask} from 'react-native-masked-text';

const {width} = Dimensions.get('window');

const TextInput = ({
  label,
  text,
  setText,
  error,
  setError,
  placeholder,
  secureTextEntry,
  autoCapitalize,
  moneyMask,
}) => {
  const [colors] = useColors();
  return (
    <View>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      {moneyMask ? (
        <TextInputMask
          type={'money'}
          value={text}
          onChangeText={(newText) => {
            setError('');
            setText(newText);
          }}
          autoFocus
          style={[
            styles.moneyInput,
            {
              borderColor: error !== '' ? colors.error : colors.primary,
              backgroundColor: colors.inputBackground,
            },
          ]}
          placeholder={placeholder}
        />
      ) : (
        <DefaultTextInput
          style={[
            styles.input,
            {
              borderColor: error !== '' ? colors.error : colors.primary,
              backgroundColor: colors.inputBackground,
            },
          ]}
          placeholder={placeholder}
          value={text}
          onChangeText={(newText) => {
            setError('');
            setText(newText);
          }}
          secureTextEntry={secureTextEntry}
          autoCapitalize={autoCapitalize ? 'none' : 'sentences'}
        />
      )}

      {error !== undefined && error !== '' && <Text style={[styles.error, {color: colors.error}]}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: width * 0.8 - 32,
    height: 48,
    paddingHorizontal: 8,
    marginVertical: 16,
    borderRadius: 5,
  },
  label: {
    marginTop: 16,
    fontSize: 24,
  },
  moneyInput: {
    width: width - 64,
    height: 120,
    paddingHorizontal: 20,
    borderRadius: 20,
    fontSize: 40,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  error: {
    marginTop: 4,
    marginBottom: 16,
  },
});

export default TextInput;
