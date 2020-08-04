import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {formatAmount} from '../utils/currency';
import {texts} from '../utils/texts';
import useColors from '../hooks/useColors';

const {width, height} = Dimensions.get('window');

const WeekMoneyFlow = ({
  weekRevenuesAmount,
  weekExpensesAmount,
  EXPANDED_HEADER_HEIGHT,
  FIXED_HEADER_HEIGHT,
}) => {
  const [colors] = useColors();
  return (
    <View style={[styles.containerHeader]}>
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
  );
};

const styles = StyleSheet.create({
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
});

export default WeekMoneyFlow;
