import {Alert} from 'react-native';
import FIREBASE from '../config/firebase';
import {
  dispatchError,
  dispatchLoading,
  dispatchSuccess,
} from '../utils/dispatch';
import {storeData} from '../utils/localstorage';

export const MASUK_KERANJANG = 'MASUK_KERANJANG';
export const GET_LIST_KERANJANG = 'GET_LIST_KERANJANG';
export const DELETE_KERANJANG = 'DELETE_KERANJANG';

export const masukKeranjang = data => {
  return dispatch => {
    //Loading
    dispatchLoading(dispatch, MASUK_KERANJANG);

    //Cek apakah keranjang user tsb ada atau tidak
    FIREBASE.database()
      .ref('keranjangs/' + data.uid)
      .once('value', querySnapsot => {
        if (querySnapsot.val()) {
          //Update Keranjang utama
          const keranjangUtama = querySnapsot.val();
          const beratBaru =
            parseFloat(data.jumlah) * parseFloat(data.jersey.berat);
          const hargaBaru = parseInt(data.jumlah) * parseInt(data.jersey.harga);

          FIREBASE.database()
            .ref('keranjangs')
            .child(data.uid)
            .update({
              totalBerat: keranjangUtama.totalBerat + beratBaru,
              totalHarga: keranjangUtama.totalHarga + hargaBaru,
            })
            .then(response => {
              console.log('response 123 >>> ', response);
              //Simpan ke keranjang detail
              dispatch(masukKeranjangDetail(data));
            })
            .catch(error => {
              dispatchError(dispatch, MASUK_KERANJANG, error);
              Alert.alert('ERROR : ', error);
            });
        } else {
          //Simpan Keranjang utama

          const keranjangUtama = {
            user: data.uid,
            tanggal: new Date().toDateString(),
            totalHarga: parseInt(data.jumlah) * parseInt(data.jersey.harga),
            totalBerat: parseFloat(data.jumlah) * parseFloat(data.jersey.berat),
          };

          FIREBASE.database()
            .ref('keranjangs')
            .child(data.uid)
            .set(keranjangUtama)
            .then(response => {
              //Simpan ke keranjang detail
              dispatch(masukKeranjangDetail(data));
            })
            .catch(error => {
              dispatchError(dispatch, MASUK_KERANJANG, error);
              Alert.alert('ERROR : ', error);
            });
        }
      })
      .catch(error => {
        //Error
        dispatchError(dispatch, MASUK_KERANJANG, error.message);

        alert(error.message);
      });
  };
};

export const masukKeranjangDetail = data => {
  return dispatch => {
    const pesanans = {
      product: data.jersey,
      jumlahPesanan: data.jumlah,
      totalHarga: parseInt(data.jumlah) * parseInt(data.jersey.harga),
      totalBerat: parseFloat(data.jumlah) * parseFloat(data.jersey.berat),
      keterangan: data.keterangan,
      ukuran: data.ukuran,
    };

    FIREBASE.database()
      .ref('keranjangs/' + data.uid)
      .child('pesanans')
      .push(pesanans)
      .then(response => {
        //Input ke realtime database
        dispatchSuccess(dispatch, MASUK_KERANJANG, response ? response : []);
      })
      .catch(error => {
        dispatchError(dispatch, MASUK_KERANJANG, error.message);

        alert(error.message);
      });
  };
};

export const getListKeranjang = id => {
  return dispatch => {
    //Loading
    dispatchLoading(dispatch, GET_LIST_KERANJANG);

    FIREBASE.database()
      .ref('keranjangs/' + id)
      .once('value', querySnapsot => {
        console.log('getListKeranjang >>> ', querySnapsot);

        let dataKeranjang = querySnapsot.val() ? querySnapsot.val() : false;

        // let dataListKeranjang = {...dataKeranjang};

        console.log('dataKeranjang >>> ', dataKeranjang);


        dispatchSuccess(dispatch, GET_LIST_KERANJANG, dataKeranjang);
      })
      .catch(error => {
        //Error
        dispatchError(dispatch, GET_LIST_KERANJANG, error.message);

        alert(error.message);
      });
  };
};

export const deleteKeranjang = (keranjang, keranjangUtama, id) => {
    console.log('deleteKeranjang id >>> ', id);
    console.log('deleteKeranjang keranjangUtama >>> ', keranjangUtama);
    console.log('deleteKeranjang keranjang >>> ', keranjang);
    console.log('deleteKeranjang totalBerat >>> ', keranjangUtama.totalBerat);
    console.log('deleteKeranjang totalBerat parse >>> ', parseFloat(keranjangUtama.totalBerat));

  return dispatch => {
    //Loading
    dispatchLoading(dispatch, DELETE_KERANJANG);

    const totalHargaBaru =
      // parseInt(keranjangUtama.totalHarga) - parseInt(keranjang.totalHarga);
      keranjangUtama.totalHarga -  keranjang.totalHarga;
    const totalBeratBaru =
      // parseFloat(keranjangUtama.totalBerat) - parseFloat(keranjang.totalBerat);
      keranjangUtama.totalBerat - keranjang.totalBerat;
      
      console.log('totalHargaBaru >>> ',totalHargaBaru);

    if (totalHargaBaru === 0) {
      //hapus keranjang utama & detail
      FIREBASE.database()
        .ref('keranjangs')
        .child(keranjangUtama.user)
        .remove()
        .then(response => {
          dispatchSuccess(
            dispatch,
            DELETE_KERANJANG,
            'Keranjang Sukses Dihapus',
          );
        })
        .catch(error => {
          dispatchError(dispatch, DELETE_KERANJANG, error.message);

          alert(error.message);
        });
    } else {
      //update total harga & berat keranjang utama
      FIREBASE.database()
        .ref('keranjangs')
        .child(keranjangUtama.user)
        .update({
          totalBerat: totalBeratBaru,
          totalHarga: totalHargaBaru,
        })
        .then(response => {
          //hapus pesanan detail
          dispatch(deleteKeranjangDetail(id, keranjangUtama));
        })
        .catch(error => {
          dispatchError(dispatch, DELETE_KERANJANG, error.message);

          alert(error.message);
        });
    }
  };
};

export const deleteKeranjangDetail = (id, keranjangUtama) => {
    return dispatch => {
   
        FIREBASE.database()
          .ref('keranjangs/'+keranjangUtama.user)
          .child('pesanans')
          .child(id)
          .remove()
          .then(response => {
            dispatchSuccess(
              dispatch,
              DELETE_KERANJANG,
              'Keranjang Sukses Dihapus',
            );
          })
          .catch(error => {
            dispatchError(dispatch, DELETE_KERANJANG, error.message);
  
            alert(error.message);
          });
    };
  };
