import createDataContext from './createDataContext';

const userReducer = (state, action) => {
  switch (action.type) {
    case 'reset_user_info':
      return {...state, name: '', email: '', image: undefined};
    case 'set_name':
      return {...state, name: action.payload};
    case 'set_email':
      return {...state, email: action.payload};
    default:
      return state;
  }
};

const setUserInfo = (dispatch) => (name, email) => {
  dispatch({type: 'set_name', payload: name});
  dispatch({type: 'set_email', payload: email});
};

const resetUserInfo = (dispatch) => () => {
  console.log('fui chamado');
  dispatch({type: 'reset_user_info'});
};

export const {Provider, Context} = createDataContext(
  userReducer,
  {
    //methods
    setUserInfo,
    resetUserInfo,
  },
  {
    //initial state
    name: '',
    email: '',
    image: undefined,
  },
);
