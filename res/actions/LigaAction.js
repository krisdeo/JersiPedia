import FIREBASE from '../config/firebase';
import { dispatchError, dispatchLoading, dispatchSuccess } from '../utils/dispatch';
import {storeData} from '../utils/localstorage';

export const GET_LIST_LIGA = 'GET_LIST_LIGA';
export const GET_DETAIL_LIGA = 'GET_DETAIL_LIGA';

export const getListLiga = () => {
  return dispatch => {

    //Loading
    dispatchLoading(dispatch, GET_LIST_LIGA);

    FIREBASE.database()
      .ref('data/ligas')
      .once('value', (querySnapsot) => {

        let dataLiga = querySnapsot.val() ? querySnapsot.val() : [];

        let dataListLiga =  {...dataLiga}

        console.log('dataLiga >>> ',dataLiga);
        console.log('dataListLiga >>> ',dataListLiga);

        dispatchSuccess(dispatch, GET_LIST_LIGA, dataListLiga);
      })
      .catch(error => {

        //Error
        dispatchError(dispatch, GET_LIST_LIGA, error.message);

        alert(error.message);
      });
  };
};


export const getDetailLiga = (id) => {
  return dispatch => {

    //Loading
    dispatchLoading(dispatch, GET_DETAIL_LIGA);

    FIREBASE.database()
      .ref('data/ligas/'+id)
      .once('value', (querySnapsot) => {

        let dataLiga = querySnapsot.val() ? querySnapsot.val() : [];

        let dataListLiga =  {...dataLiga}

        console.log('dataLiga >>> ',dataLiga);
        console.log('dataListLiga >>> ',dataListLiga);

        dispatchSuccess(dispatch, GET_DETAIL_LIGA, dataListLiga);
      })
      .catch(error => {

        //Error
        dispatchError(dispatch, GET_DETAIL_LIGA, error.message);

        alert(error.message);
      });
  };
};
