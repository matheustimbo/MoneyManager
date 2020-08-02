import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import moment from 'moment';
import useColors from '../hooks/useColors';

const {width} = Dimensions.get('window');

const TransactionItem = ({
  transaction: {type, maskedValue, description, date},
}) => {
  const [colors] = useColors();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
          borderColor: colors.borderGrey,
        },
      ]}>
      <View style={styles.infoContainer}>
        <Text>{description}</Text>
        <Text>{moment(date).format('dddd')}</Text>
      </View>
      <View style={styles.valueContainer}>
        <Text>{type === 'Revenue' ? '+' : '-'}</Text>
        <Text>{maskedValue}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height: 76,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 32,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
  },
  infoContainer: {},
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default TransactionItem;
