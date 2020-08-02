import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

export const getCurrentUser = async () => {
  return auth().currentUser;
};

export const getUid = async () => {
  return auth().currentUser.uid;
};

export const signIn = async (email, password) => {
  return auth().signInWithEmailAndPassword(email, password);
};

export const signUp = async (email, password) => {
  return auth().createUserWithEmailAndPassword(email, password);
};

export const signInAnonymously = async () => {
  return auth().signInAnonymously();
};

export const signOut = async () => {
  return auth().signOut();
};

export const registerUserData = async (name, email) => {
  return database().ref(`users/${auth().currentUser.uid}`).push({
    name,
    email,
  });
};

export const getTransactions = async () => {
  var transactions = [];
  await database()
    .ref(`transactions/${auth().currentUser.uid}`)
    .once('value')
    .then(async (transactionsSnapshot) => {
      if (transactionsSnapshot.val()) {
        transactionsSnapshot.forEach((transactionSnapshot) => {
          var transaction = transactionSnapshot.val();
          transaction.key = transactionSnapshot.key;
          transactions.push(transaction);
        });
      }
    });
  return transactions;
};

export const addNewTransaction = async (transaction) => {
  return database()
    .ref(`transactions/${auth().currentUser.uid}`)
    .push(transaction);
};
