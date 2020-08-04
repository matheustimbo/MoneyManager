import {signOut} from '../api/firebase';
import {Context as UserContext} from '../providers/UserProvider';
import {Context as TransactionsContext} from '../providers/TransactionsProvider';
import {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';

export default () => {
  const {resetUserInfo} = useContext(UserContext);
  const {resetState} = useContext(TransactionsContext);
  const navigation = useNavigation();
  const onTryLogout = () => {
    signOut().then(() => {
      resetUserInfo();
      resetState();
      navigation.navigate('LoginFlow');
    });
  };

  return [onTryLogout];
};
