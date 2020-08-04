import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import useColors from '../hooks/useColors';
import {daysOfWeek} from '../utils/daysOfWeek';

const TOTAL_HEIGHT = 120;

const WeekDayVerticalBar = ({dayAmounts, dayIndex}) => {
  const [colors] = useColors();
  return (
    <View style={styles.container}>
      {dayAmounts.revenues === 0 && dayAmounts.expenses === 0 ? (
        <View style={[styles.zeroBar, {backgroundColor: colors.zeroDayBar}]} />
      ) : (
        <>
          {dayAmounts.revenues !== 0 && (
            <View
              style={[
                styles.bar,
                {
                  backgroundColor: colors.revenueAmount,
                  height:
                    (dayAmounts.revenues /
                      (dayAmounts.revenues + dayAmounts.expenses)) *
                    TOTAL_HEIGHT,
                },
              ]}
            />
          )}
          {dayAmounts.expenses !== 0 && (
            <View
              style={[
                styles.bar,
                {
                  marginTop: 2,
                  backgroundColor: colors.expenseAmount,
                  height:
                    (dayAmounts.expenses /
                      (dayAmounts.revenues + dayAmounts.expenses)) *
                    TOTAL_HEIGHT,
                },
              ]}
            />
          )}
        </>
      )}
      <Text style={styles.day}>{daysOfWeek[dayIndex]}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  zeroBar: {
    height: TOTAL_HEIGHT,
    width: 12,
    borderRadius: 50,
  },
  bar: {
    borderRadius: 50,
    width: 12,
  },
  container: {
    alignItems: 'center',
  },
  day: {
    marginTop: 4,
  },
});

export default WeekDayVerticalBar;
