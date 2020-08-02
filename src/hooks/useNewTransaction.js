/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState, useContext} from 'react';
import {useColorScheme} from 'react-native';
import {colorPallete} from '../utils/colors';
import {useNavigation} from '@react-navigation/native';
import {Context as TransactionsContext} from '../providers/TransactionsProvider';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

export default () => {
  const navigation = useNavigation();

  const {
    changeNewTransactionType,
    changeNewTransactionDescription,
    changeNewTransactionValue,
    changeNewTransactionDate,
    loadTransactions,
    resetNewTransaction,
    state: {newTransaction},
  } = useContext(TransactionsContext);

  const [showChooseTypeModal, setShowChooseTypeModal] = useState(false);

  const onSelectType = (newType) => {
    changeNewTransactionType(newType);
    setShowChooseTypeModal(false);
    navigation.navigate('AddNewTransaction');
  };

  const addTransaction = () => {
    if (newTransaction.description === '') {
    }
    database()
      .ref(`transactions/${auth().currentUser.uid}`)
      .push(newTransaction)
      .then(() => {
        resetNewTransaction();
        loadTransactions();
        navigation.navigate('Home');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return [
    onSelectType,
    showChooseTypeModal,
    setShowChooseTypeModal,
    newTransaction,
    changeNewTransactionType,
    changeNewTransactionDescription,
    changeNewTransactionValue,
    changeNewTransactionDate,
    addTransaction,
  ];
};
