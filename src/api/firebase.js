import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import {Context as TransactionsContext} from '../providers/TransactionsProvider';
import {useContext} from 'react';

export const getTransactions = async () => {
  var transactions = [];
  await database()
    .ref(`transactions/${auth().currentUser.uid}`)
    .once('value')
    .then(async (transactionsSnapshot) => {
      if (transactionsSnapshot.val()) {
        transactionsSnapshot.forEach((transactionSnapshot) => {
          var transaction = transactionSnapshot.val();
          transaction.key = transactionSnapshot.key;
          transactions.push(transaction);
        });
      }
    });
  return transactions;
};
