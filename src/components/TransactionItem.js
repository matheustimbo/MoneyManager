import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import useColors from '../hooks/useColors';
import {categoriesArray} from '../utils/categories';
import {texts} from '../utils/texts';
import {formatTransactionDate} from '../utils/date';
import {formatAmount} from '../utils/currency';

const {width} = Dimensions.get('window');

const TransactionItem = ({
  transaction: {type, value, description, date, category},
}) => {
  const [colors] = useColors();
  const categoryData =
    type === texts.revenue
      ? categoriesArray.revenues.find((pCateg) => pCateg.name == category)
      : categoriesArray.expenses.find((pCateg) => pCateg.name == category);
  return (
    <View style={[styles.container]}>
      <View style={styles.dotsContainer}>
        <View
          style={[
            styles.verticalDot,
            {
              backgroundColor: categoryData?.color
                ? categoryData.color
                : colors.background,
            },
          ]}
        />
        <View
          style={[
            styles.dot,
            {
              backgroundColor: categoryData?.color
                ? categoryData.color
                : colors.background,
            },
          ]}
        />
        <View
          style={[
            styles.innerDot,
            {
              backgroundColor: categoryData?.color
                ? categoryData.color
                : colors.background,
            },
          ]}
        />
      </View>
      <View style={styles.textsContainer}>
        <Text
          style={[
            styles.categoryLabel,
            {
              color: categoryData?.color
                ? categoryData.color
                : colors.regularText,
            },
          ]}>
          {categoryData?.name}
        </Text>
        <Text numberOfLines={3} style={[{color: colors.itemDescription}]}>
          {description}
        </Text>
      </View>
      <View style={styles.priceDataContainer}>
        <Text style={[styles.date, {color: colors.itemDescription}]}>
          {formatTransactionDate(date)}
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={[
              styles.amount,
              {
                color:
                  type === texts.revenue
                    ? colors.revenueAmount
                    : colors.expenseAmount,
              },
            ]}>
            {formatAmount(value)}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height: 100,
    flexDirection: 'row',
    paddingHorizontal: 24,
  },
  dotsContainer: {
    height: 100,
    width: 25,
    alignItems: 'center',
  },
  verticalDot: {
    height: 100,
    width: 2,
    opacity: 0.3,
  },
  dot: {
    width: 25,
    height: 25,
    opacity: 0.5,
    position: 'absolute',
    top: 50 / 2 - 25 / 2,
    left: 0,
    borderRadius: 25,
  },
  innerDot: {
    width: 15,
    height: 15,
    opacity: 0.7,
    position: 'absolute',
    top: 50 / 2 - 15 / 2,
    left: 25 / 2 - 15 / 2,
    borderRadius: 15,
  },
  textsContainer: {
    flex: 3,
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  categoryLabel: {
    fontSize: 16,
  },
  priceDataContainer: {
    flex: 2,
    paddingVertical: 12,
    justifyContent: 'space-between',
  },
  amount: {
    fontSize: 20,
  },
});

export default TransactionItem;
