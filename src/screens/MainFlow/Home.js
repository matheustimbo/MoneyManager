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
import TransactionItem from '../../components/TransactionItem';
import {Context as TransactionsContext} from '../../providers/TransactionsProvider';
import {Context as UserContext} from '../../providers/UserProvider';
import useColors from '../../hooks/useColors';
import LinearGradient from 'react-native-linear-gradient';
import {texts} from '../../utils/texts';
import AddTransactionFab from '../../components/AddTransactionFab';
import LogoutButton from '../../components/LogoutButton';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import useTransactions from '../../hooks/useTransactions';
import WeekDayVerticalBar from '../../components/WeekDayVerticalBar';
import {formatAmount} from '../../utils/currency';
import TransactionsHeader from '../../components/TransactionsHeader';

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
      <Animated.ScrollView
        style={{flex: 1}}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false},
        )}>
        <View style={[styles.contentContainer]}>
          <View style={styles.containerHeader}>
            <View style={styles.amountContainer}>
              <Text style={[styles.weekAmount, {color: colors.revenueAmount}]}>
                {formatAmount(weekRevenuesAmount)}
              </Text>
              <Text>{texts.in}</Text>
            </View>
            <View style={styles.amountContainer}>
              <Text style={[styles.weekAmount, {color: colors.expenseAmount}]}>
                {formatAmount(weekExpensesAmount)}
              </Text>
              <Text>{texts.out}</Text>
            </View>
          </View>
          <View style={styles.daysBarsContainer}>
            {weekDaysAmounts.map((day, index) => (
              <WeekDayVerticalBar dayAmounts={day} dayIndex={index} />
            ))}
          </View>
          <TransactionsHeader />
          {transactions
            .sort((t1, t2) => t1.date < t2.date)
            .map((transaction) => (
              <TransactionItem transaction={transaction} />
            ))}
        </View>
      </Animated.ScrollView>
      <Animated.View
        style={[
          styles.screenHeader,
          {
            backgroundColor: colors.primary,
            height: scrollY.interpolate({
              inputRange: [0, EXPANDED_HEADER_HEIGHT - FIXED_HEADER_HEIGHT],
              outputRange: [EXPANDED_HEADER_HEIGHT, FIXED_HEADER_HEIGHT],
              extrapolate: 'clamp',
            }),
          },
        ]}>
        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            styles.minimalHeader,
            {
              opacity: scrollY.interpolate({
                inputRange: [
                  EXPANDED_HEADER_HEIGHT / 2,
                  EXPANDED_HEADER_HEIGHT - FIXED_HEADER_HEIGHT,
                ],
                outputRange: [0, 1],
                extrapolate: 'clamp',
              }),
            },
          ]}>
          <Text
            style={[
              styles.minimizedHeaderBalance,
              {color: colors.coloredBgText},
            ]}>
            {maskedBalance}
          </Text>
        </Animated.View>
        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            styles.header,
            {
              zIndex: scrollY.interpolate({
                inputRange: [0, 50],
                outputRange: [1, -1],
                extrapolate: 'clamp',
              }),
              opacity: scrollY.interpolate({
                inputRange: [0, FIXED_HEADER_HEIGHT],
                outputRange: [1, 0],
                extrapolate: 'clamp',
              }),
            },
          ]}>
          <View style={[styles.internalHeader]}>
            <View>
              <Text style={[styles.welcome, {color: colors.coloredBgText}]}>
                {texts.welcome}
              </Text>
              <Text style={[styles.name, {color: colors.coloredBgText}]}>
                {name}
              </Text>
            </View>
            <LogoutButton />
          </View>
          <View style={styles.headerBalance}>
            <Text style={[styles.balanceLabel, {color: colors.coloredBgText}]}>
              {texts.currentBalance}
            </Text>
            <Text style={[styles.balance, {color: colors.coloredBgText}]}>
              {maskedBalance}
            </Text>
          </View>
        </Animated.View>
      </Animated.View>

      <AddTransactionFab />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  screenHeader: {
    position: 'absolute',
    left: 0,
    top: 0,
    width,
    paddingTop: 20,
    alignItems: 'center',
    zIndex: 2,
  },
  content: {
    backgroundColor: 'green',
    width,
    marginTop: EXPANDED_HEADER_HEIGHT,
  },
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: getStatusBarHeight(),
  },
  minimalHeader: {
    alignItems: 'center',
    paddingTop: getStatusBarHeight(),
  },
  headerBalance: {
    alignItems: 'center',
  },
  internalHeader: {
    width,
    paddingHorizontal: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 18,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  balanceLabel: {
    fontSize: 22,
  },
  balance: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  minimizedHeaderBalance: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bgContainer: {
    minHeight: height,
    width,
    marginTop: EXPANDED_HEADER_HEIGHT,
  },
  contentContainer: {
    marginTop: EXPANDED_HEADER_HEIGHT,
    minHeight: height - FIXED_HEADER_HEIGHT,
    width,
    backgroundColor: 'white',
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 24,
  },
  amountContainer: {
    alignItems: 'center',
  },
  weekAmount: {
    fontSize: 22,
    marginBottom: 4,
    fontWeight: '700',
  },
  daysBarsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
});

export default Home;
