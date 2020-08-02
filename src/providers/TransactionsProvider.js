import createDataContext from './createDataContext';
import {getTransactions} from '../api/firebase';
import {categories} from '../utils/categories';
import moment from 'moment';

const transactionsReducer = (state, action) => {
  switch (action.type) {
    case 'set_transactions':
      return {
        ...state,
        loadingTransactions: false,
        transactions: [...action.payload],
      };
    case 'set_loading_transactions':
      return {...state, loadingTransactions: action.payload};
    case 'change_new_transaction_type':
      return {
        ...state,
        newTransaction: {...state.newTransaction, type: action.payload},
      };
    case 'change_new_transaction_description':
      return {
        ...state,
        newTransaction: {...state.newTransaction, description: action.payload},
      };
    case 'change_new_transaction_value':
      return {
        ...state,
        newTransaction: {...state.newTransaction, value: action.payload},
      };
    case 'change_new_transaction_date':
      return {
        ...state,
        newTransaction: {...state.newTransaction, date: action.payload},
      };
    case 'reset_new_transaction':
      return {
        ...state,
        newTransaction: {
          date: new Date(),
          value: 0.0,
          description: '',
        },
      };
    default:
      return state;
  }
};

const changeNewTransactionType = (dispatch) => (newType) => {
  dispatch({type: 'change_new_transaction_type', payload: newType});
};

const changeNewTransactionDescription = (dispatch) => (newDescription) => {
  dispatch({
    type: 'change_new_transaction_description',
    payload: newDescription,
  });
};

const changeNewTransactionValue = (dispatch) => (newValue) => {
  dispatch({type: 'change_new_transaction_value', payload: newValue});
};

const changeNewTransactionDate = (dispatch) => (newDate) => {
  dispatch({type: 'change_new_transaction_date', payload: newDate});
};

const resetNewTransaction = (dispatch) => () => {
  dispatch({type: 'reset_new_transaction'});
};

const loadTransactions = (dispatch) => async () => {
  dispatch({type: 'set_loading_transactions', payload: true});
  let transactions = await getTransactions();
  dispatch({type: 'set_transactions', payload: transactions});
};

export const {Provider, Context} = createDataContext(
  transactionsReducer,
  {
    //methods
    changeNewTransactionType,
    changeNewTransactionDescription,
    changeNewTransactionValue,
    changeNewTransactionDate,
    resetNewTransaction,
    loadTransactions,
  },
  {
    //initial state
    transactions: [],
    loadingTransactions: false,
    newTransaction: {
      date: moment(new Date()).valueOf(),
      value: 0,
      currency: 'BRL',
      description: '',
      type: 'revenue',
      category: undefined,
    },
  },
);
