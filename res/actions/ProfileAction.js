import FIREBASE from '../config/firebase';
import {Alert} from 'react-native';
import {storeData} from '../utils/localstorage';
import {
  dispatchError,
  dispatchLoading,
  dispatchSuccess,
} from '../utils/dispatch';

export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';

export const updateProfile = data => {
  return dispatch => {
    //Loading
    dispatchLoading(dispatch, UPDATE_PROFILE);

    const dataBaru = {
      uid: data.uid,
      nama: data.nama,
      alamat: data.alamat,
      nohp: data.nohp,
      kota: data.kota,
      provinsi: data.provinsi,
      email: data.email,
      status: 'user',
      avatar: data.updateAvatar ? data.avatarForDB : data.avatarLama,
    };

    FIREBASE.database()
      .ref('users/' + dataBaru.uid)
      .update(dataBaru)
      .then(response => {
        //Success
        dispatchSuccess(dispatch, UPDATE_PROFILE, response ? response : []);

        storeData('user', dataBaru);
      })
      .catch(error => {
        //Error
        dispatchError(dispatch, UPDATE_PROFILE, error.message);

        //   alert(error.message)
        Alert.alert('Error : ', error.message);
      });
  };
};

export const changePassword = data => {
  return dispatch => {
    //Loading
    dispatchLoading(dispatch, CHANGE_PASSWORD);

    //check email dan password nya sama dengan data user atau tidak (dari login)
    FIREBASE.auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(res => {
        //sukses login
        var user = FIREBASE.auth().currentUser;

        user
          .updatePassword(data.newPassword)
          .then(updateResponse => {
            dispatchSuccess(
              dispatch,
              CHANGE_PASSWORD,
              'Password Berhasil Diganti',
            );
          })
          .catch(errorUpdate => {
            //Error
            dispatchError(dispatch, CHANGE_PASSWORD, errorUpdate.message);

            //   alert(error.message)
            Alert.alert('Error : ', errorUpdate.message);
          });
      })
      .catch(error => {
        //Error
        dispatchError(dispatch, CHANGE_PASSWORD, error.message);

        //   alert(error.message)
        Alert.alert('Error : ', error.message);
      });
  };
};
