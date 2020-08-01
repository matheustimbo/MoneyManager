import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';

const Profile = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <TouchableOpacity
        onPress={() => {
          auth()
            .signOut()
            .then(() => navigation.navigate('LoginFlow', {screen: 'Login'}));
        }}>
        <Text>Signout</Text>
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

export default Profile;
