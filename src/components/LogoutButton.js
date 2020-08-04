import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {texts} from '../utils/texts';
import useColors from '../hooks/useColors';
import Logout from '../assets/svgs/Logout.svg';
import useLogout from '../hooks/useLogout';

const LogoutButton = () => {
  const [colors] = useColors();
  const [onTryLogout] = useLogout();

  return (
    <TouchableOpacity style={styles.container} onPress={onTryLogout}>
      <Text style={[styles.text, {color: colors.coloredBgText}]}>
        {texts.logout}
      </Text>
      <Logout width={24} height={24} fill={colors.coloredBgText} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
    marginRight: 16,
  },
});

export default LogoutButton;
