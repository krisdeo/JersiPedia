import { GET_KOTA, GET_PROVINSI, GET_DETAIL_KOTA, POST_ONGKIR } from '../../actions/RajaOngkirAction';

const initialState = {
  getProvinsiLoading: false,
  getProvinsiResult: false,
  getProvinsiError: false,

  getKotaLoading: false,
  getKotaResult: false,
  getKotaError: false,

  getDetailKotaLoading: false,
  getDetailKotaResult: false,
  getDetailKotaError: false,

  ongkirLoading: false,
  ongkirResult: false,
  ongkirError: false,
};


export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PROVINSI:
      console.log('GET_PROVINSI >>> ', action);
      return {
        ...state,
        getProvinsiLoading: action.payload.loading,
        getProvinsiResult: action.payload.data,
        getProvinsiError: action.payload.errorMessage,
      };

      case GET_KOTA:
      console.log('GET_KOTA >>> ', action);
      return {
        ...state,
        getKotaLoading: action.payload.loading,
        getKotaResult: action.payload.data,
        getKotaError: action.payload.errorMessage,
      };

      case GET_DETAIL_KOTA:
      console.log('GET_DETAIL_KOTA >>> ', action);
      return {
        ...state,
        getDetailKotaLoading: action.payload.loading,
        getDetailKotaResult: action.payload.data,
        getDetailKotaError: action.payload.errorMessage,
      };

      case POST_ONGKIR:
      console.log('POST_ONGKIR >>> ', action);
      return {
        ...state,
        ongkirLoading: action.payload.loading,
        ongkirResult: action.payload.data,
        ongkirError: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
