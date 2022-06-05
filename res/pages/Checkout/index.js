import {Text, View, ScrollView} from 'react-native';
import React, {Component} from 'react';
import styles from '../styles';
import {CardAlamat, Pilihan, Tombol} from '../../components';
import {numberWithCommas} from '../../utils/constant';
import {Picker} from '@react-native-picker/picker';
import {responsiveHeight} from '../../utils/widthheight';
import {getData} from '../../utils/localstorage';
import {connect} from 'react-redux';
import {getKotaDetail, postOngkir} from '../../actions/RajaOngkirAction';
import {couriers} from '../../data';

class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: false,
      ekspedisi: couriers,
      ekspedisiSelected: false,
      ongkir: 0,
      estimasi: '',
      totalHarga: this.props.route.params.totalHarga,
      totalBerat: this.props.route.params.totalBerat,
      kota: '',
      provinsi: '',
      alamat: '',
    };
  }

  componentDidMount() {
    this._getUserData();
  }

  componentDidUpdate(prevProps) {
    const {getDetailKotaResult, ongkirResult} = this.props;

    console.log('getDetailKotaResult >>> ', getDetailKotaResult);

    if (
      getDetailKotaResult &&
      prevProps.getDetailKotaResult !== getDetailKotaResult
    ) {
      this.setState({
        provinsi: getDetailKotaResult.province,
        kota: getDetailKotaResult.type + ' ' + getDetailKotaResult.city_name,
      });
    }

    if (
      ongkirResult &&
      prevProps.ongkirResult !== ongkirResult
    ) {
      this.setState({
        ongkir: ongkirResult.cost[0].value,
        estimasi: ongkirResult.cost[0].etd,
      });
    }
  }

  _getUserData = () => {
    getData('user').then(res => {
      console.log('_getUserData >>> ', res);

      // const dataUser = res;

      if (res) {
        this.setState({
          profile: res,
          alamat: res.alamat,
        });

        this.props.dispatch(getKotaDetail(res.kota));
      } else {
        this.props.navigation.replace('Login');
      }
    });
  };

  _ubahEkspedisi = ekspedisiSelected => {
    if (ekspedisiSelected) {
      this.setState({
        ekspedisiSelected: ekspedisiSelected,
      });

      this.props.dispatch(postOngkir(this.state, ekspedisiSelected));
    }
  };

  render() {
    return (
      <View
        style={[
          styles.flexInput(1),
          styles.backgroundWhiteColor,
          styles.justifyContentSpaceBetween,
          styles.paddingTopInput(10),
        ]}>
        <View style={[styles.paddingHorizontalInput(30)]}>
          <Text style={[styles.fontBold, styles.fontSizeInput(18)]}>
            Apakah Benar Alamat Ini ?
          </Text>
          <CardAlamat
            alamat={this.state.alamat}
            provinsi={this.state.provinsi}
            kota={this.state.kota}
            navigation={this.props.navigation}
          />
          <View style={[styles.totalHargaCheckout]}>
            <Text style={[styles.fontBold, styles.fontSizeInput(15)]}>
              Total Harga
            </Text>
            <Text style={[styles.fontBold, styles.fontSizeInput(15)]}>
              Rp. {numberWithCommas(this.state.totalHarga)}
            </Text>
          </View>
          <Pilihan
            label="Pilih Ekspedisi"
            datas={this.state.ekspedisi}
            inputInformation={'Ekspedisi'}
            selectedValue={this.state.ekspedisiSelected}
            onValueChange={ekspedisiSelected =>
              this._ubahEkspedisi(ekspedisiSelected)
            }
          />
          <View style={[styles.totalHargaCheckout]}>
            <Text style={[styles.fontBold, styles.fontSizeInput(15)]}>
              Biaya Ongkir
            </Text>
          </View>
          <View style={[styles.biayaCheckout]}>
            <Text style={[styles.fontSizeInput(15)]}>
              Untuk Berat : {this.state.totalBerat} Kg{' '}
            </Text>
            <Text style={[styles.fontBold, styles.fontSizeInput(15)]}>
              Rp. {numberWithCommas(this.state.ongkir)}
            </Text>
          </View>
          <View style={[styles.biayaCheckout]}>
            <Text style={[styles.fontSizeInput(15)]}>Estimasi Waktu : </Text>
            <Text style={[styles.fontBold, styles.fontSizeInput(15)]}>
              {this.state.estimasi} Hari
            </Text>
          </View>
        </View>

        <View style={[styles.checkoutButton]}>
          <View style={[styles.totalHargaCheckout]}>
            <Text style={[styles.fontBold, styles.fontSizeInput(15)]}>
              Total Harga
            </Text>
            <Text style={[styles.fontBold, styles.fontSizeInput(15)]}>
              Rp. {numberWithCommas(this.state.totalHarga + this.state.ongkir)}
            </Text>
          </View>
          <View>
            <Tombol
              title="Checkout"
              type="textIcon"
              icon="keranjang-putih"
              padding={responsiveHeight(15)}
              fontSize={18}
              onPress={() => this.props.navigation.navigate('Checkout')}
            />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  getDetailKotaLoading: state.RajaOngkirReducer.getDetailKotaLoading,
  getDetailKotaResult: state.RajaOngkirReducer.getDetailKotaResult,
  getDetailKotaError: state.RajaOngkirReducer.getDetailKotaError,

  ongkirResult: state.RajaOngkirReducer.ongkirResult,
});

export default connect(mapStateToProps, null)(Checkout);
