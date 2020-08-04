import createDataContext from './createDataContext';
import {getTransactions} from '../api/firebase';
import {categories} from '../utils/categories';
import moment from 'moment';
import {texts} from '../utils/texts';

const transactionsReducer = (state, action) => {
  switch (action.type) {
    case 'change_new_transaction_category':
      return {
        ...state,
        newTransaction: {...state.newTransaction, category: action.payload},
      };
    case 'reset_state':
      return {
        ...state,
        transactions: [],
        loadingTransactions: false,
        balance: 0,
        maskedBalance: 'R$ 0',
        newTransaction: {
          date: moment(new Date()).valueOf(),
          value: 0,
          currency: 'BRL',
          description: '',
          type: 'revenue',
          category: undefined,
        },
      };
    case 'set_balance':
      return {
        ...state,
        balance: action.payload,
        maskedBalance: Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(action.payload / 100),
      };
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

const changeNewTransactionCategory = (dispatch) => (newCategory) => {
  dispatch({type: 'change_new_transaction_category', payload: newCategory});
};

const resetNewTransaction = (dispatch) => () => {
  dispatch({type: 'reset_new_transaction'});
};

const loadTransactions = (dispatch) => async () => {
  dispatch({type: 'set_loading_transactions', payload: true});
  let transactions = await getTransactions();
  let balance = 0;
  for (var i = 0; i < transactions.length; i++) {
    var value =
      transactions[i].type === texts.revenue
        ? parseInt(transactions[i].value, 10)
        : -parseInt(transactions[i].value, 10);
    balance = parseInt(balance, 10) + value;
  }
  dispatch({type: 'set_balance', payload: balance});
  dispatch({type: 'set_transactions', payload: transactions});
};

const resetState = (dispatch) => () => {
  dispatch({type: 'reset_state'});
};

export const {Provider, Context} = createDataContext(
  transactionsReducer,
  {
    //methods
    changeNewTransactionType,
    changeNewTransactionDescription,
    changeNewTransactionValue,
    changeNewTransactionDate,
    changeNewTransactionCategory,
    resetNewTransaction,
    loadTransactions,
    resetState,
  },
  {
    //initial state
    transactions: [],
    loadingTransactions: false,
    balance: 0,
    maskedBalance: 'R$ 0',
    newTransaction: {
      date: moment(new Date()).valueOf(),
      value: 0,
      currency: 'BRL',
      description: '',
      type: texts.revenue,
      category: undefined,
    },
  },
);
