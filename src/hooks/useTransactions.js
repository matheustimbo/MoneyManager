/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState, useContext} from 'react';
import {texts} from '../utils/texts';
import {useNavigation} from '@react-navigation/native';
import {signUp, registerUserData} from '../api/firebase';
import moment from 'moment';
import {Context as TransactionsContext} from '../providers/TransactionsProvider';

export default () => {
  const {
    state: {transactions},
  } = useContext(TransactionsContext);

  const [weekRevenues, setWeekRevenues] = useState([]);
  const [weekRevenuesAmount, setWeekRevenuesAmount] = useState('0');

  const [weekExpenses, setWeekExpenses] = useState([]);
  const [weekExpensesAmount, setWeekExpensesAmount] = useState('0');

  const [weekDaysAmounts, setWeekDaysAmounts] = useState([
    {
      revenues: 0,
      expenses: 0,
    },
    {
      revenues: 0,
      expenses: 0,
    },
    {
      revenues: 0,
      expenses: 0,
    },
    {
      revenues: 0,
      expenses: 0,
    },
    {
      revenues: 0,
      expenses: 0,
    },
    {
      revenues: 0,
      expenses: 0,
    },
    {
      revenues: 0,
      expenses: 0,
    },
  ]);

  useEffect(() => {
    var weekRevenuesAux = [];
    var weekRevenuesAmountAux = 0;
    var weekExpensesAux = [];
    var weekExpensesAmountAux = 0;

    var weekDaysAmountsAux = weekDaysAmounts;

    for (var i = 0; i < transactions.length; i++) {
      const transaction = transactions[i];
      console.log('transaction day', moment(Date(transaction.date)).day());
      if (
        moment(Date(transaction.date)).isSame(moment(Date(Date.now())), 'week')
      ) {
        if (transaction.type === texts.revenue) {
          weekRevenuesAux.push(transaction);
          weekRevenuesAmountAux =
            weekRevenuesAmountAux + parseInt(transaction.value, 10);
          weekDaysAmountsAux[
            moment(Date(transaction.date)).day() - 1
          ].revenues =
            weekDaysAmountsAux[moment(Date(transaction.date)).day() - 1]
              .revenues + parseInt(transaction.value, 10);
        } else {
          weekExpensesAux.push(transaction);
          weekExpensesAmountAux =
            weekExpensesAmountAux + parseInt(transaction.value, 10);
          weekDaysAmountsAux[
            moment(Date(transaction.date)).day() - 1
          ].expenses =
            weekDaysAmountsAux[moment(Date(transaction.date)).day() - 1]
              .expenses + parseInt(transaction.value, 10);
        }
      }
    }
    setWeekRevenues([...weekRevenuesAux]);
    setWeekRevenuesAmount(weekRevenuesAmountAux);
    setWeekExpenses([...weekExpensesAux]);
    setWeekExpensesAmount(weekExpensesAmountAux);
    setWeekDaysAmounts([...weekDaysAmountsAux]);
  }, [transactions]);

  return [
    weekRevenues,
    weekRevenuesAmount,
    weekExpenses,
    weekExpensesAmount,
    weekDaysAmounts,
  ];
};
