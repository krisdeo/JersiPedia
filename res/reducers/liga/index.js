import {GET_DETAIL_LIGA, GET_LIST_LIGA} from '../../actions/LigaAction';

const initialState = {
  getListLigaLoading: false,
  getListLigaResult: false,
  getListLigaError: false,

  getDetailLigaLoading: false,
  getDetailLigaResult: false,
  getDetailLigaError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LIST_LIGA:
      console.log('GET_LIST_LIGA >>> ', action);
      return {
        ...state,
        getListLigaLoading: action.payload.loading,
        getListLigaResult: action.payload.data,
        getListLigaError: action.payload.errorMessage,
      };

    case GET_DETAIL_LIGA:
      console.log('GET_DETAIL_LIGA >>> ', action);
      return {
        ...state,
        getDetailLigaLoading: action.payload.loading,
        getDetailLigaResult: action.payload.data,
        getDetailLigaError: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
