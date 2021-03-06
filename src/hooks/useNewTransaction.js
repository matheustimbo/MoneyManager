/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState, useContext} from 'react';
import {useColorScheme} from 'react-native';
import {colorPallete} from '../utils/colors';
import {useNavigation} from '@react-navigation/native';
import {Context as TransactionsContext} from '../providers/TransactionsProvider';
import {texts} from '../utils/texts';
import {addNewTransaction} from '../api/firebase';
import {categories, categoriesArray} from '../utils/categories';

export default () => {
  const navigation = useNavigation();

  const {
    changeNewTransactionType,
    changeNewTransactionDescription,
    changeNewTransactionValue,
    changeNewTransactionDate,
    changeNewTransactionCategory,
    loadTransactions,
    resetNewTransaction,
    state: {newTransaction},
  } = useContext(TransactionsContext);

  const [showChooseTypeModal, setShowChooseTypeModal] = useState(false);
  const [
    transactionDescriptionError,
    setTransactionDescriptionError,
  ] = useState('');
  const [transactionValueError, setTransactionValueError] = useState('');

  const addTransaction = async () => {
    if (newTransaction.value === 0) {
      return setTransactionValueError(texts.transactionValueError);
    }
    if (newTransaction.description === '') {
      return setTransactionDescriptionError(texts.transactionDescriptionError);
    }

    console.log('new transaction', newTransaction);
    let numberPattern = /\d+/g;
    console.log('vamo ver', newTransaction.value.match(numberPattern).join(''));
    let transaction = newTransaction;
    transaction.maskedValue = transaction.value;
    transaction.value = transaction.value.match(numberPattern).join('');

    await addNewTransaction(transaction)
      .then(() => {
        resetNewTransaction();
        loadTransactions();
        navigation.navigate('Home');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onTryChangeNewTransactionType = (newType) => {
    changeNewTransactionType(newType);
    if (newType === texts.revenue) {
      changeNewTransactionCategory(categoriesArray.revenues[0]);
    } else {
      changeNewTransactionCategory(categoriesArray.expenses[0]);
    }
  };

  return [
    showChooseTypeModal,
    setShowChooseTypeModal,
    newTransaction,
    onTryChangeNewTransactionType,
    changeNewTransactionDescription,
    changeNewTransactionValue,
    changeNewTransactionDate,
    changeNewTransactionCategory,
    addTransaction,
    transactionDescriptionError,
    setTransactionDescriptionError,
    transactionValueError,
    setTransactionValueError,
  ];
};
