import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  Text,
  RefreshControl,
  StyleSheet,
  FlatList,
  Dimensions,
  Animated,
} from 'react-native';
import TransactionItem from '../components/TransactionItem';
import {Context as TransactionsContext} from '../providers/TransactionsProvider';
import {Context as UserContext} from '../providers/UserProvider';
import useColors from '../hooks/useColors';
import LinearGradient from 'react-native-linear-gradient';
import {texts} from '../utils/texts';
import AddTransactionFab from '../components/AddTransactionFab';
import Header from '../components/Header';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import useTransactions from '../hooks/useTransactions';
import WeekDayVerticalBar from '../components/WeekDayVerticalBar';
import {formatAmount} from '../utils/currency';
import TransactionsHeader from '../components/TransactionsHeader';
import HomeScrollableContent from '../components/HomeScrollableContent';

const {width, height} = Dimensions.get('window');

const EXPANDED_HEADER_HEIGHT = 170 + getStatusBarHeight();
const FIXED_HEADER_HEIGHT = 50 + getStatusBarHeight();

const Home = ({navigation}) => {
  const {
    state: {transactions, loadingTransactions, maskedBalance},
    loadTransactions,
  } = useContext(TransactionsContext);

  const {
    state: {name},
  } = useContext(UserContext);

  const [
    weekRevenues,
    weekRevenuesAmount,
    weekExpenses,
    weekExpensesAmount,
    weekDaysAmounts,
  ] = useTransactions();

  const scrollY = new Animated.Value(0);

  const [colors] = useColors();

  useEffect(() => {
    loadTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={[colors.gradientColor1, colors.gradientColor2]}
      style={styles.screen}>
      <HomeScrollableContent
        scrollY={scrollY}
        weekRevenuesAmount={weekRevenuesAmount}
        weekExpensesAmount={weekExpensesAmount}
        weekDaysAmounts={weekDaysAmounts}
        transactions={transactions}
        EXPANDED_HEADER_HEIGHT={EXPANDED_HEADER_HEIGHT}
        FIXED_HEADER_HEIGHT={FIXED_HEADER_HEIGHT}
        loadingTransactions={loadingTransactions}
        loadTransactions={loadTransactions}
      />

      <Header
        scrollY={scrollY}
        EXPANDED_HEADER_HEIGHT={EXPANDED_HEADER_HEIGHT}
        FIXED_HEADER_HEIGHT={FIXED_HEADER_HEIGHT}
        maskedBalance={maskedBalance}
        name={name}
      />
      <AddTransactionFab />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Home;
