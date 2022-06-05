import { LOGIN_USER, REGISTER_USER } from '../../actions/AuthAction';

const initialState = {
  registerLoading: false,
  registerResult: false,
  registerError: false,

  loginLoading: false,
  loginResult: false,
  loginError: false,
};


export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER:
      console.log('REGISTER_USER >>> ', action);
      return {
        ...state,
        registerLoading: action.payload.loading,
        registerResult: action.payload.data,
        registerError: action.payload.errorMessage,
      };
     
      case LOGIN_USER:
        console.log('LOGIN_USER >>> ', action);
        return {
          ...state,
          loginLoading: action.payload.loading,
          loginResult: action.payload.data,
          loginError: action.payload.errorMessage,
        };

    default:
      return state;
  }
}