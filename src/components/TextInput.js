import React from 'react';
import {
  View,
  Dimensions,
  Text,
  TextInput as DefaultTextInput,
  StyleSheet,
} from 'react-native';
import useColors from '../hooks/useColors';

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
}) => {
  const [colors] = useColors();
  return (
    <View>
      <Text>{label}</Text>
      <DefaultTextInput
        autoFocus
        style={[
          styles.input,
          {
            borderColor: error !== '' ? colors.error : colors.primary,
            backgroundColor: colors.inputBackground,
          },
        ]}
        placeholder={placeholder}
        value={text}
        onChangeText={setText}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
      />
      <Text>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: width - 32,
    height: 48,
    paddingHorizontal: 8,
    marginVertical: 16,
  },
});

export default TextInput;
