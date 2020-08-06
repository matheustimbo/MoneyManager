import React, {useState} from 'react';
import {View, Dimensions, ScrollView, StyleSheet} from 'react-native';
import {texts} from '../utils/texts';
import useColors from '../hooks/useColors';
import LinearGradient from 'react-native-linear-gradient';
import useLogin from '../hooks/useLogin';
import AuthTypeButton from '../components/AuthTypeButton';
import AuthForm from '../components/AuthForm';

const {height} = Dimensions.get('window');

const Login = ({navigation}) => {
  const [colors] = useColors();

  const [alreadyHasAccount, setAlreadyHasAccount] = useState(true);
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={[colors.gradientColor1, colors.gradientColor2]}
      style={styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        style={styles.scrollView}>
        <AuthTypeButton
          alreadyHasAccount={alreadyHasAccount}
          setAlreadyHasAccount={setAlreadyHasAccount}
        />
        <AuthForm alreadyHasAccount={alreadyHasAccount} />
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
  },
  scrollContainer: {
    paddingVertical: height * 0.2,
  },
});

export default Login;
