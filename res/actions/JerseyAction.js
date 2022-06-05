import FIREBASE from '../config/firebase';
import {
  dispatchError,
  dispatchLoading,
  dispatchSuccess,
} from '../utils/dispatch';
import {storeData} from '../utils/localstorage';

export const GET_LIST_JERSEY = 'GET_LIST_JERSEY';
export const GET_LIST_JERSEY_LIMIT = 'GET_LIST_JERSEY_LIMIT';
export const GET_LIST_JERSEY_BY_LIGA = 'GET_LIST_JERSEY_BY_LIGA';
export const DELETE_PARAMETER_JERSEY = 'DELETE_PARAMETER_JERSEY';
export const SAVE_KEYWORD_JERSEY = 'SAVE_KEYWORD_JERSEY';
export const DELETE_KEYWORD_JERSEY = 'DELETE_KEYWORD_JERSEY';

export const getListJersey = (idLiga, keywordSearch) => {
  return dispatch => {
    //Loading
    dispatchLoading(dispatch, GET_LIST_JERSEY);

    if (idLiga) {
      FIREBASE.database()
        .ref('data/jerseys')
        .orderByChild('liga')
        .equalTo(idLiga)
        .once('value', querySnapsot => {
          let dataJersey = querySnapsot.val() ? querySnapsot.val() : [];

          let dataListJersey = {...dataJersey};

          dispatchSuccess(dispatch, GET_LIST_JERSEY, dataListJersey);
        })
        .catch(error => {
          //Error
          dispatchError(dispatch, GET_LIST_JERSEY, error.message);

          alert(error.message);
        });
    } else if (keywordSearch) {
      console.log('keywordSearch >>>', keywordSearch);
      FIREBASE.database()
        .ref('data/jerseys')
        .orderByChild('klub')
        .equalTo(keywordSearch.toUpperCase())
        // .startAt(keywordSearch.toUpperCase())
        // .endAt(keywordSearch.toUpperCase()+'\uf8ff')
        .once('value', querySnapsot => {
          let dataJersey = querySnapsot.val() ? querySnapsot.val() : [];

          let dataListJersey = {...dataJersey};

          dispatchSuccess(dispatch, GET_LIST_JERSEY, dataListJersey);
        })
        .catch(error => {
          //Error
          dispatchError(dispatch, GET_LIST_JERSEY, error.message);

          alert(error.message);
        });
    } else {
      FIREBASE.database()
        .ref('data/jerseys')
        .once('value', querySnapsot => {
          let dataJersey = querySnapsot.val() ? querySnapsot.val() : [];

          let dataListJersey = {...dataJersey};

          dispatchSuccess(dispatch, GET_LIST_JERSEY, dataListJersey);
        })
        .catch(error => {
          //Error
          dispatchError(dispatch, GET_LIST_JERSEY, error.message);

          alert(error.message);
        });
    }
  };
};

export const getListJerseyAll = () => {
  return dispatch => {
    //Loading
    dispatchLoading(dispatch, GET_LIST_JERSEY);

    FIREBASE.database()
      .ref('data/jerseys')
      .once('value', querySnapsot => {
        let dataJersey = querySnapsot.val() ? querySnapsot.val() : [];

        let dataListJersey = {...dataJersey};

        dispatchSuccess(dispatch, GET_LIST_JERSEY, dataListJersey);
      })
      .catch(error => {
        //Error
        dispatchError(dispatch, GET_LIST_JERSEY, error.message);

        alert(error.message);
      });
  };
};

export const getListJerseyLimit = () => {
  return dispatch => {
    //Loading
    dispatchLoading(dispatch, GET_LIST_JERSEY);

    FIREBASE.database()
      .ref('data/jerseys')
      .limitToLast(6)
      .once('value', querySnapsot => {
        let dataJerseyLimit = querySnapsot.val() ? querySnapsot.val() : [];

        let dataListJerseyLimit = {...dataJerseyLimit};

        dispatchSuccess(dispatch, GET_LIST_JERSEY, dataListJerseyLimit);
      })
      .catch(error => {
        //Error
        dispatchError(dispatch, GET_LIST_JERSEY, error.message);

        alert(error.message);
      });
  };
};

export const getJerseyByLiga = (id, namaLiga) => ({
  type: GET_LIST_JERSEY_BY_LIGA,
  payload: {
    idLiga: id,
    namaLiga: namaLiga,
  },
});
// return dispatch => {

//   //Loading
//   dispatchLoading(dispatch, GET_LIST_JERSEY_BY_LIGA);

//   FIREBASE.database()
//     .ref('data/jerseys')
//     .limitToLast (6)
//     .once('value', (querySnapsot) => {

//       let dataJerseyLimit = querySnapsot.val() ? querySnapsot.val() : [];

//       let dataListJerseyLimit =  {...dataJerseyLimit}

//       console.log('dataJerseyLimit >>> ',dataJerseyLimit);
//       console.log('dataListJerseyLimit >>> ',dataListJerseyLimit);

//       dispatchSuccess(dispatch, GET_LIST_JERSEY_BY_LIGA, dataListJerseyLimit);
//     })
//     .catch(error => {

//       //Error
//       dispatchError(dispatch, GET_LIST_JERSEY_BY_LIGA, error.message);

//       alert(error.message);
//     });
// };
// };

export const deleteParameterJersey = () => ({
  type: DELETE_PARAMETER_JERSEY,
});

export const saveKeywordJersey = searchKeyword => ({
  type: SAVE_KEYWORD_JERSEY,
  payload: {
    data: searchKeyword,
  },
});

export const deleteKeywordJersey = () => ({
  type: DELETE_KEYWORD_JERSEY,
});
