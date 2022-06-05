import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {ListKeranjang, Tombol} from '../../components';
import styles from '../styles';
import {numberWithCommas} from '../../utils/constant';
import {responsiveHeight} from '../../utils/widthheight';
import {connect} from 'react-redux';
import {getData} from '../../utils/localstorage';
import {getListKeranjang} from '../../actions/KeranjangAction';

class Keranjang extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    getData('user').then(res => {
      if (res) {
        //get list keranjang
        this.props.dispatch(getListKeranjang(res.uid));
      } else {
        this.props.navigation.replace('Login');
      }
    });
  }

  componentDidUpdate(prevProps) {
    const {deleteKeranjangResult} = this.props;

    if (
      deleteKeranjangResult &&
      prevProps.deleteKeranjangResult !== deleteKeranjangResult
    ) {
      // this.props.navigation.replace('MainApp');
      getData('user').then(res => {
        if (res) {
          //get list keranjang
          this.props.dispatch(getListKeranjang(res.uid));
        } else {
          this.props.navigation.replace('Login');
        }
      });
    }
  }

  _renderListKeranjang = () => {
    if (this.props.getListKeranjangResult) {
      if (this.props.getListKeranjangResult.length !== 0) {
        return <ListKeranjang {...this.props} />;
      } else {
        return (
          <View style={[styles.alignItemsCenter]}>
            <Text>No Data</Text>
          </View>
        );
      }
    } else {
      return <View style={[styles.alignItemsCenter]}><Text>Empty</Text></View>;
    }
  };

  render() {
    console.log(
      'getListKeranjangResult >>> ',
      this.props.getListKeranjangResult,
    );

    console.log(
      'getListKeranjangResult length >>> ',
      this.props.getListKeranjangResult.length,
    );
    return (
      <View style={[styles.listKeranjangView]}>
        {this._renderListKeranjang()}
        {/* <ListKeranjang {...this.props} /> */}
        <View style={[styles.checkoutButton]}>
          <View style={[styles.totalHargaCheckout]}>
            <Text style={[styles.fontBold, styles.fontSizeInput(15)]}>
              Total Harga
            </Text>
            <Text style={[styles.fontBold, styles.fontSizeInput(15)]}>
              <Text>Rp </Text>
              {this.props.getListKeranjangResult
                ? numberWithCommas(this.props.getListKeranjangResult.totalHarga)
                : 0}
            </Text>
          </View>
          <View>
            <Tombol
              title="Checkout"
              type="textIcon"
              icon="keranjang-putih"
              padding={responsiveHeight(15)}
              fontSize={18}
              onPress={() =>
                this.props.navigation.navigate('Checkout', {
                  totalHarga: this.props.getListKeranjangResult.totalHarga,
                  totalBerat: this.props.getListKeranjangResult.totalBerat,
                })
              }
              disabled={!this.props.getListKeranjangResult}
            />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  getListKeranjangLoading: state.KeranjangReducer.getListKeranjangLoading,
  getListKeranjangResult: state.KeranjangReducer.getListKeranjangResult,
  getListKeranjangError: state.KeranjangReducer.getListKeranjangError,

  deleteKeranjangLoading: state.KeranjangReducer.deleteKeranjangLoading,
  deleteKeranjangResult: state.KeranjangReducer.deleteKeranjangResult,
  deleteKeranjangError: state.KeranjangReducer.deleteKeranjangError,
});

export default connect(mapStateToProps, null)(Keranjang);
