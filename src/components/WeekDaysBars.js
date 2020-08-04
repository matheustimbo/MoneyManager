import React from 'react';
import {View, StyleSheet} from 'react-native';
import WeekDayVerticalBar from './WeekDayVerticalBar';
const WeekDaysBars = ({weekDaysAmounts}) => {
  return (
    <View style={styles.daysBarsContainer}>
      {weekDaysAmounts.map((day, index) => (
        <WeekDayVerticalBar dayAmounts={day} dayIndex={index} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  daysBarsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
});

export default WeekDaysBars;
