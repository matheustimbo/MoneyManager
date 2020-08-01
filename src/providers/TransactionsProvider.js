import createDataContext from './createDataContext';

const transactionsReducer = (state, action) => {
  switch (action.type) {
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

export const {Provider, Context} = createDataContext(
  transactionsReducer,
  {
    //methods
    changeNewTransactionType,
  },
  {
    //initial state
    transactions: [],
    newTransaction: {
      date: new Date(),
      value: 0.0,
      description: '',
      type: 'revenue',
    },
  },
);
