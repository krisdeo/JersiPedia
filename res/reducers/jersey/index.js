import {
  DELETE_KEYWORD_JERSEY,
  DELETE_PARAMETER_JERSEY,
  GET_LIST_JERSEY,
  GET_LIST_JERSEY_BY_LIGA,
  GET_LIST_JERSEY_LIMIT,
  SAVE_KEYWORD_JERSEY,
} from '../../actions/JerseyAction';

const initialState = {
  getListJerseyLoading: false,
  getListJerseyResult: false,
  getListJerseyError: false,

  getListJerseyLimitLoading: false,
  getListJerseyLimitResult: false,
  getListJerseyLimitError: false,

  idLiga: false,
  namaLiga: false,

  keywordSearch: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LIST_JERSEY:
      console.log('GET_LIST_JERSEY >>> ', action);
      return {
        ...state,
        getListJerseyLoading: action.payload.loading,
        getListJerseyResult: action.payload.data,
        getListJerseyError: action.payload.errorMessage,
      };

    case GET_LIST_JERSEY_LIMIT:
      console.log('GET_LIST_JERSEY_LIMIT >>> ', action);
      return {
        ...state,
        getListJerseyLimitLoading: action.payload.loading,
        getListJerseyLimitResult: action.payload.data,
        getListJerseyLimitError: action.payload.errorMessage,
      };

    case GET_LIST_JERSEY_BY_LIGA:
      console.log('GET_LIST_JERSEY_BY_LIGA >>> ', action);
      return {
        ...state,
        idLiga: action.payload.idLiga,
        namaLiga: action.payload.namaLiga,
      };

    case DELETE_PARAMETER_JERSEY:
      console.log('DELETE_PARAMETER_JERSEY >>> ', action);
      return {
        ...state,
        idLiga: false,
        namaLiga: false,
      };

    case SAVE_KEYWORD_JERSEY:
      console.log('SAVE_KEYWORD_JERSEY >>> ', action);
      return {
        ...state,
        keywordSearch: action.payload.data,
      };

    case DELETE_KEYWORD_JERSEY:
      console.log('DELETE_KEYWORD_JERSEY >>> ', action);
      return {
        ...state,
        keywordSearch: false,
      };

    default:
      return state;
  }
}
