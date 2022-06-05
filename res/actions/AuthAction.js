import FIREBASE from '../config/firebase';
import { dispatchError, dispatchLoading, dispatchSuccess } from '../utils/dispatch';
import {storeData} from '../utils/localstorage';

export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';

export const registerUser = (data, password) => {
  return dispatch => {

    //Loading
    dispatchLoading(dispatch, REGISTER_USER);

    FIREBASE.auth()
      .createUserWithEmailAndPassword(data.email, password)
      .then(res => {
        //ambil UID buat data baru (data+uid)
        const newUser = {
          ...data,
          uid: res.user.uid,
        };

        //simpan ke realtime database
        FIREBASE.database().ref('users/' + res.user.uid).set(newUser);

        //Success
        dispatchSuccess(dispatch, REGISTER_USER, newUser);

        //local storage pakai async storage
        storeData('user', newUser);
      })
      .catch(error => {

        //Error
        dispatchError(dispatch, REGISTER_USER, error.message);

        alert(error.message);
      });
  };
};

export const loginUser = (email, password) => {
  return dispatch => {
    dispatch({
      type: LOGIN_USER,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    FIREBASE.auth()
      .signInWithEmailAndPassword(email, password)
      .then(signInRes => {
        console.log('loginUser >>> ', email , ' ', password);
        console.log('loginUser res >>> ', signInRes);
        
        //Login Sukses
        FIREBASE.database()
          .ref('/users/' + signInRes.user.uid)
          .once('value')
          .then(resDB => {
            console.log('resDB >>> ', resDB);
            if (resDB.val()) {
              dispatch({
                type: LOGIN_USER,
                payload: {
                  loading: false,
                  data: resDB.val(),
                  errorMessage: false,
                },
              });

              //local storage pakai async storage

              storeData('user', resDB.val());
            } else {
              dispatch({
                type: LOGIN_USER,
                payload: {
                  loading: false,
                  data: false,
                  errorMessage: 'Data User Not Found',
                },
              });

              alert('Data User Not Found');
            }
          });
      })
      .catch(error => {
        dispatch({
          type: LOGIN_USER,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });

        alert(error.message);
      });
  };
};
