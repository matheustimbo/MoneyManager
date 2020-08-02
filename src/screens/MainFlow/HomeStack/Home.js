import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  Text,
  RefreshControl,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import NewTransactionTypeModal from '../../../components/NewTransactionTypeModal';
import TransactionItem from '../../../components/TransactionItem';
import useNewTransaction from '../../../hooks/useNewTransaction';
import {Context as TransactionsContext} from '../../../providers/TransactionsProvider';

const Home = ({navigation}) => {
  const {
    state: {transactions, loadingTransactions},
    loadTransactions,
  } = useContext(TransactionsContext);

  const [
    onSelectType,
    showChooseTypeModal,
    setShowChooseTypeModal,
  ] = useNewTransaction();

  useEffect(() => {
    loadTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.screen}>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => setShowChooseTypeModal(true)}>
        <Text>add transaction</Text>
      </TouchableOpacity>
      <FlatList
        data={transactions}
        renderItem={({item}) => <TransactionItem transaction={item} />}
        keyExtractor={(item) => item.key}
        refreshing={loadingTransactions}
        refreshControl={
          <RefreshControl
            refreshing={loadingTransactions}
            onRefresh={loadTransactions}
          />
        }
      />
      <NewTransactionTypeModal
        visible={showChooseTypeModal}
        setVisible={setShowChooseTypeModal}
        onSelectType={onSelectType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
