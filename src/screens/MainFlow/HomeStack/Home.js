import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import NewTransactionTypeModal from '../../../components/NewTransactionTypeModal';
import useNewTransaction from '../../../hooks/useNewTransaction';

const Home = ({navigation}) => {
  const [
    onSelectType,
    showChooseTypeModal,
    setShowChooseTypeModal,
  ] = useNewTransaction();
  return (
    <View style={styles.screen}>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => console.log('onselectye', onSelectType)}>
        <Text>dafda transaction</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setShowChooseTypeModal(true)}>
        <Text>add transaction</Text>
      </TouchableOpacity>
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
