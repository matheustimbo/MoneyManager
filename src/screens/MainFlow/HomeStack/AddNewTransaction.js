/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import useColors from '../../../hooks/useColors';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import TextInput from '../../../components/TextInput';
import { texts } from '../../../utils/texts';
import useNewTransaction from '../../../hooks/useNewTransaction';


const { width } = Dimensions.get('window');

const AddNewTransaction = ({ navigation }) => {
  const [colors] = useColors();
  const [
    onSelectType,
    showChooseTypeModal,
    setShowChooseTypeModal,
    newTransaction,
    changeNewTransactionType,
    changeNewTransactionDescription,
    changeNewTransactionValue,
    changeNewTransactionDate,
    addTransaction,
  ] = useNewTransaction();
  return (
    <View style={[styles.screen, { backgroundColor: colors.background }]}>
      <View style={styles.header} />
      <TextInput
        label={texts.transactionValue}
        text={newTransaction.value}
        setText={changeNewTransactionValue}
        placeholder={texts.transactionValue}
        moneyMask
      />
      <TextInput
        label={texts.description}
        text={newTransaction.description}
        setText={changeNewTransactionDescription}
        placeholder={texts.description}
      />
      <TouchableOpacity onPress={addTransaction}>
        <Text>{texts.addTransaction}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    paddingTop: 20 + getStatusBarHeight(),
    width,
    backgroundColor: 'green',
  },
});

export default AddNewTransaction;
