import { DELETE_KERANJANG, GET_LIST_KERANJANG, MASUK_KERANJANG } from '../../actions/KeranjangAction';
import {GET_DETAIL_LIGA, GET_LIST_LIGA} from '../../actions/LigaAction';

const initialState = {
  saveKeranjangLoading: false,
  saveKeranjangResult: false,
  saveKeranjangError: false,

  getListKeranjangLoading: false,
  getListKeranjangResult: false,
  getListKeranjangError: false,

  deleteKeranjangLoading: false,
  deleteKeranjangResult: false,
  deleteKeranjangError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MASUK_KERANJANG:
      console.log('MASUK_KERANJANG >>> ', action);
      return {
        ...state,
        saveKeranjangLoading: action.payload.loading,
        saveKeranjangResult: action.payload.data,
        saveKeranjangError: action.payload.errorMessage,
      };

      case GET_LIST_KERANJANG:
      console.log('GET_LIST_KERANJANG >>> ', action);
      return {
        ...state,
        getListKeranjangLoading: action.payload.loading,
        getListKeranjangResult: action.payload.data,
        getListKeranjangError: action.payload.errorMessage,
      };

      case DELETE_KERANJANG:
      console.log('DELETE_KERANJANG >>> ', action);
      return {
        ...state,
        deleteKeranjangLoading: action.payload.loading,
        deleteKeranjangResult: action.payload.data,
        deleteKeranjangError: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
