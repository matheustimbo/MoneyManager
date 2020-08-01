/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState, useContext} from 'react';
import {useColorScheme} from 'react-native';
import {colorPallete} from '../utils/colors';
import {useNavigation} from '@react-navigation/native';
import {Context as TransactionsContext} from '../providers/TransactionsProvider';

export default () => {
  const navigation = useNavigation();

  const {changeNewTransactionType} = useContext(TransactionsContext);

  const [showChooseTypeModal, setShowChooseTypeModal] = useState(false);

  const onSelectType = (newType) => {
    changeNewTransactionType(newType);
    setShowChooseTypeModal(false);
    navigation.navigate('AddNewTransaction');
  };

  return [onSelectType, showChooseTypeModal, setShowChooseTypeModal];
};
