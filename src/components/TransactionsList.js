import React from 'react';
import {View} from 'react-native';
import TransactionItem from './TransactionItem';

const TransactionsList = ({transactions}) => {
  console.log('transactionsssssss', transactions);
  return (
    <View>
      {transactions
        .sort((t1, t2) => t1.date < t2.date)
        .map((transaction) => (
          <TransactionItem transaction={transaction} />
        ))}
    </View>
  );
};

export default TransactionsList;
