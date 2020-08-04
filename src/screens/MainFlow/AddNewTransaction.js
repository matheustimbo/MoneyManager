/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import useColors from '../../hooks/useColors';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import TextInput from '../../components/TextInput';
import {texts} from '../../utils/texts';
import useNewTransaction from '../../hooks/useNewTransaction';
import ArrowLeft from '../../assets/svgs/ArrowLeft';
import {categories, categoriesArray} from '../../utils/categories';
import CategoryOption from '../../components/CategoryOption';

const {width} = Dimensions.get('window');

const AddNewTransaction = ({navigation}) => {
  const [colors] = useColors();
  const [
    showChooseTypeModal,
    setShowChooseTypeModal,
    newTransaction,
    onTryChangeNewTransactionType,
    changeNewTransactionDescription,
    changeNewTransactionValue,
    changeNewTransactionDate,
    changeNewTransactionCategory,
    addTransaction,
    transactionDescriptionError,
    setTransactionDescriptionError,
    transactionValueError,
    setTransactionValueError,
  ] = useNewTransaction();

  useEffect(() => {
    if (newTransaction.type === texts.revenue) {
      changeNewTransactionCategory(categoriesArray.revenues[0].name);
    } else {
      changeNewTransactionCategory(categoriesArray.expenses[0].name);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={[styles.screen, {backgroundColor: colors.background}]}>
      <View style={[styles.header, {backgroundColor: colors.primary}]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft width={24} height={24} fill={colors.coloredBgText} />
        </TouchableOpacity>

        <Text style={[styles.headerTitle, {color: colors.coloredBgText}]}>
          {texts.newTransaction}
        </Text>
      </View>
      <View style={styles.screenContent}>
        <TextInput
          label={''}
          text={newTransaction.value}
          setText={changeNewTransactionValue}
          placeholder={texts.transactionValue}
          moneyMask
          error={transactionValueError}
          setError={setTransactionValueError}
        />
        <View style={styles.typeOptionsContainer}>
          <TouchableOpacity
            onPress={() => onTryChangeNewTransactionType(texts.revenue)}
            style={[
              styles.typeRevenueBtn,
              {
                borderColor: colors.borderGrey,
                backgroundColor:
                  newTransaction.type === texts.revenue
                    ? colors.selectedRevenue
                    : colors.unselectedRevenue,
              },
            ]}>
            <Text style={[styles.typeBtnTxt, {color: colors.coloredBgText}]}>
              + {texts.revenue}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onTryChangeNewTransactionType(texts.expense)}
            style={[
              styles.typeExpenseBtn,
              {
                borderColor: colors.borderGrey,
                backgroundColor:
                  newTransaction.type === texts.expense
                    ? colors.selectedExpense
                    : colors.unselectedExpense,
              },
            ]}>
            <Text style={[styles.typeBtnTxt, {color: colors.coloredBgText}]}>
              - {texts.expense}
            </Text>
          </TouchableOpacity>
        </View>
        <TextInput
          label={texts.description}
          text={newTransaction.description}
          setText={changeNewTransactionDescription}
          placeholder={texts.description}
          error={transactionDescriptionError}
          setError={setTransactionDescriptionError}
        />
        <Text style={styles.label}>{texts.category}</Text>
        <View style={styles.categoriesList}>
        <FlatList
          horizontal
          data={
            newTransaction.type === texts.expense
              ? categoriesArray.expenses
              : categoriesArray.revenues
          }
          renderItem={({item}) => (
            <CategoryOption
              category={item}
              selectedCategory={newTransaction.category}
              setSelectedCategory={changeNewTransactionCategory}
            />
          )}
          keyExtractor={(item) => item.name}
          style={styles.categoriesList}
          showsHorizontalScrollIndicator={false}
          />
        </View>
        <TouchableOpacity onPress={addTransaction}>
          <Text>{texts.addTransaction}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  screenContent: {
    alignItems: 'center',
    flex: 1,
  },
  header: {
    height: 70,
    paddingTop: getStatusBarHeight(),
    width,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 16,
    marginLeft: 16,
  },
  typeOptionsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  typeRevenueBtn: {
    width: (width - 64) / 2,
    height: 52,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    borderRightWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  typeExpenseBtn: {
    width: (width - 64) / 2,
    height: 52,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    borderLeftWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  typeBtnTxt: {
    fontSize: 22,
  },
  label: {
    fontSize: 24,
    alignSelf: 'flex-start',
    marginLeft: 16,
  },
  categoriesList: {
    height: 72,
  },
  categoriesContainer: {
    width,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});

export default AddNewTransaction;
