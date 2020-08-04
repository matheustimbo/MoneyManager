import React from 'react';
import {View, Animated, Dimensions, StyleSheet} from 'react-native';
import TransactionsHeader from './TransactionsHeader';
import TransactionsList from './TransactionsList';
import WeekDaysBars from './WeekDaysBars';
import WeekMoneyFlow from './WeekMoneyFlow';

const {width, height} = Dimensions.get('window');

const HomeScrollableContent = ({
  scrollY,
  weekRevenuesAmount,
  weekExpensesAmount,
  weekDaysAmounts,
  transactions,
  EXPANDED_HEADER_HEIGHT,
  FIXED_HEADER_HEIGHT,
}) => {
  return (
    <Animated.ScrollView
      style={{flex: 1}}
      showsVerticalScrollIndicator={false}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], {
        useNativeDriver: false,
      })}>
      <View
        style={[
          styles.contentContainer,
          {
            marginTop: EXPANDED_HEADER_HEIGHT,
            minHeight: height - FIXED_HEADER_HEIGHT,
          },
        ]}>
        <WeekMoneyFlow
          weekRevenuesAmount={weekRevenuesAmount}
          weekExpensesAmount={weekExpensesAmount}
          EXPANDED_HEADER_HEIGHT={EXPANDED_HEADER_HEIGHT}
          FIXED_HEADER_HEIGHT={FIXED_HEADER_HEIGHT}
        />
        <WeekDaysBars weekDaysAmounts={weekDaysAmounts} />
        <TransactionsHeader />
        <TransactionsList transactions={transactions} />
      </View>
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    width,
    backgroundColor: 'white',
  },
});

export default HomeScrollableContent;
