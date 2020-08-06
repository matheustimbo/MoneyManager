import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import useColors from '../hooks/useColors';
import {texts} from '../utils/texts';

const {width} = Dimensions.get('window');

const AuthButton = ({loading, label, onPress}) => {
  const [colors] = useColors();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {backgroundColor: colors.accent}]}>
      {loading ? (
        <ActivityIndicator size="large" color={colors.coloredBgText} />
      ) : (
        <Text style={[styles.label, {color: colors.coloredBgText}]}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.6,
    height: 48,
    borderRadius: 5,
    position: 'absolute',
    left: width / 10,
    bottom: -24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AuthButton;
