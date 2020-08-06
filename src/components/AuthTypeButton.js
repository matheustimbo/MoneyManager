import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  LayoutAnimation,
} from 'react-native';
import useColors from '../hooks/useColors';
import {texts} from '../utils/texts';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {width} = Dimensions.get('window');

const AuthTypeButton = ({alreadyHasAccount, setAlreadyHasAccount}) => {
  const [colors] = useColors();

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: colors.transparentContainer},
      ]}>
      <View
        style={[
          styles.selectionContainer,
          {
            left: alreadyHasAccount ? 4 : 4 + (width * 0.8 - 8) / 2,
          },
        ]}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
          setAlreadyHasAccount(true);
        }}>
        <Text
          style={[
            styles.btnLabel,
            {
              color: alreadyHasAccount
                ? colors.regularText
                : colors.coloredBgText,
            },
          ]}>
          {texts.alreadyHaveAccount}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
          setAlreadyHasAccount(false);
        }}>
        <Text
          style={[
            styles.btnLabel,
            {
              color: !alreadyHasAccount
                ? colors.regularText
                : colors.coloredBgText,
            },
          ]}>
          {texts.newAccount}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.8,
    height: 42,
    padding: 4,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  selectionContainer: {
    position: 'absolute',
    width: (width * 0.8 - 8) / 2,
    height: 34,
    backgroundColor: 'white',
    top: 4,
    borderRadius: 20,
  },
  btn: {
    width: (width * 0.8 - 8) / 2,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnLabel: {
    fontWeight: '700',
  },
});

export default AuthTypeButton;
