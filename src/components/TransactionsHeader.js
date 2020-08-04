import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import {texts} from '../utils/texts';
import useColors from '../hooks/useColors';

const {width} = Dimensions.get('window');

const TransactionsHeader = () => {
  const [colors] = useColors();
  return (
    <View
      style={[styles.container, {backgroundColor: colors.transactionsHeader}]}>
      <Text style={[styles.label, {color: colors.regularText}]}>
        {texts.transactions}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    width,
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  label: {
    fontSize: 22,
  },
});

export default TransactionsHeader;
