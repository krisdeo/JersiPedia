import axios from 'axios';
import {
  API_HEADER_RAJAONGKIR,
  API_HEADER_RAJAONGKIR_COST,
  API_RAJAONGKIR,
  API_TIMEOUT,
  ORIGIN_CITY,
} from '../utils/constant';
import {
  dispatchError,
  dispatchLoading,
  dispatchSuccess,
} from '../utils/dispatch';

export const GET_PROVINSI = 'GET_PROVINSI';
export const GET_KOTA = 'GET_KOTA';
export const GET_DETAIL_KOTA = 'GET_DETAIL_KOTA';
export const POST_ONGKIR = 'POST_ONGKIR';

export const getProvinsiList = () => {
  return dispatch => {
    console.log('getProvinsiList >>>');

    //Loading
    dispatchLoading(dispatch, GET_PROVINSI);

    axios({
      method: 'get',
      url: API_RAJAONGKIR + 'province',
      timeout: API_TIMEOUT,
      headers: API_HEADER_RAJAONGKIR,
    })
      .then(response => {
        if (response.status == 200) {
          //Sukses
          dispatchSuccess(
            dispatch,
            GET_PROVINSI,
            response.data ? response.data.rajaongkir.results : [],
          );
        } else {
          //Error
          dispatchError(dispatch, GET_PROVINSI, response);
        }
      })
      .catch(error => {
        //Error
        dispatchError(dispatch, GET_PROVINSI, error.message);

        alert(error.message);
      });
  };
};

export const getKotaList = provinsi_id => {
  return dispatch => {
    console.log('getKotaList >>>');

    //Loading
    dispatchLoading(dispatch, GET_KOTA);

    axios({
      method: 'get',
      url: API_RAJAONGKIR + 'city?province=' + provinsi_id,
      timeout: API_TIMEOUT,
      headers: API_HEADER_RAJAONGKIR,
    })
      .then(response => {
        if (response.status == 200) {
          //Sukses
          dispatchSuccess(
            dispatch,
            GET_KOTA,
            response.data ? response.data.rajaongkir.results : [],
          );
        } else {
          //Error
          dispatchError(dispatch, GET_KOTA, response);
        }
      })
      .catch(error => {
        //Error
        dispatchError(dispatch, GET_KOTA, error.message);

        alert(error.message);
      });
  };
};

export const getKotaDetail = kota_id => {
  return dispatch => {
    //Loading
    dispatchLoading(dispatch, GET_DETAIL_KOTA);

    axios({
      method: 'get',
      url: API_RAJAONGKIR + 'city?id=' + kota_id,
      timeout: API_TIMEOUT,
      headers: API_HEADER_RAJAONGKIR,
    })
      .then(response => {
        console.log('GET_DETAIL_KOTA >>> ', response);
        if (response.status == 200) {
          //Sukses
          dispatchSuccess(
            dispatch,
            GET_DETAIL_KOTA,
            response.data ? response.data.rajaongkir.results : [],
          );
        } else {
          //Error
          dispatchError(dispatch, GET_DETAIL_KOTA, response);
        }
      })
      .catch(error => {
        //Error
        dispatchError(dispatch, GET_DETAIL_KOTA, error.message);

        alert(error.message);
      });
  };
};

export const postOngkir = (data, ekspedisi) => {
  return dispatch => {
    //Loading
    dispatchLoading(dispatch, POST_ONGKIR);

    const formData = new URLSearchParams();
    formData.append('origin', ORIGIN_CITY);
    formData.append('destination', data.profile.kota);
    formData.append(
      'weight',
      data.totalBerat < 1 ? 1000 : data.totalBerat * 1000,
    );
    formData.append('courier', ekspedisi.kurir);
    
    console.log('formData >>> ',formData);
    console.log('cost url >>> ',API_RAJAONGKIR + 'cost');

    axios({
      method: 'POST',
      url: API_RAJAONGKIR + 'cost',
      timeout: API_TIMEOUT,
      headers: API_HEADER_RAJAONGKIR_COST,
      data: formData.toString(),
    })
      .then(response => {
        console.log('POST_ONGKIR >>> ', response);
        if (response.status == 200) {
          const ongkirResult = response.data.rajaongkir.results[0].costs;

          const selectedOngkir = ongkirResult
            .filter(ongkir => ongkir.service === ekspedisi.service)
            .map(filterOngkir => {
              return filterOngkir;
            });

          //Sukses
          dispatchSuccess(
            dispatch,
            POST_ONGKIR,
            selectedOngkir ? selectedOngkir[0] : false,
          );
        } else {
          //Error
          dispatchError(dispatch, POST_ONGKIR, response);
        }
      })
      .catch(error => {
        //Error
        dispatchError(dispatch, POST_ONGKIR, error.message);

        alert(error.message);
      });
  };
};
