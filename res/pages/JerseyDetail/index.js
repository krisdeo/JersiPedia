import {View, Text, Image, ScrollView, Alert} from 'react-native';
import React, {Component} from 'react';
import styles from '../styles';
import {
  Tombol,
  CardLiga,
  JerseySlider,
  Pilihan,
  Inputan,
  Jarak,
} from '../../components';
import {numberWithCommas} from '../../utils/constant';
import {responsiveHeight, responsiveWidth} from '../../utils/widthheight';
import { connect } from 'react-redux';
import { getDetailLiga } from '../../actions/LigaAction';
import { getData } from '../../utils/localstorage';
import { masukKeranjang } from '../../actions/KeranjangAction';

class JerseyDetail extends Component {
  constructor(props) {
    super(props);
    console.log('JerseyDetail >>>', this.props.route.params);

    this.state = {
      jersey: this.props.route.params.jerseys,
      images: this.props.route.params.jerseys.gambar,
      jumlah: '',
      ukuran: '',
      keterangan: '',
      uid: ''
    };
  }

  componentDidMount () {
    this.props.dispatch(getDetailLiga(this.state.jersey.liga))
  }

  componentDidUpdate(prevProps) {
    const { saveKeranjangResult } = this.props;
    
    if(saveKeranjangResult && prevProps.saveKeranjangResult !== saveKeranjangResult) {
      this.props.navigation.replace('Keranjang');
    }
  }

  _masukKeranjang = () => {
    const { jumlah, ukuran, keterangan, uid } = this.state;

    console.log('jumlah, ukuran, keterangan >>> ', jumlah, ukuran, keterangan);

    getData('user')
    .then(res => {
      if(res) {

        //Simpan ke local storage
        this.setState({
          uid: res.uid
        })

        if( jumlah && ukuran && keterangan ) {

          this.props.dispatch(masukKeranjang(this.state));

        } else {
          Alert.alert('Error : ', 'Jumlah, Ukuran dan Keterangan Harus Diisi')
        }
      } else {
        Alert.alert('Error : ', 'Silahkan Login Terlebih Dahulu');
        this.props.navigation.replace('Login');
      }
    })

  }

  render() {
    const {jersey, images} = this.state;
    return (
      <View style={styles.jerseyDetailPage}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <JerseySlider images={images} />

          <View style={styles.jerseyDetailBackButton}>
            <Tombol
              icon="back"
              color="white"
              padding={7}
              onPress={() => this.props.navigation.goBack()}
            />
          </View>

          <View style={styles.jerseyDetailContainer}>
            <View style={[styles.marginHorizontalInput(30)]}>
              <View
                style={[
                  styles.alignItemsFlexEnd,
                  styles.marginRightInput(10),
                  styles.marginTopInput(-30),
                ]}>
                <CardLiga liga={this.props.getDetailLigaResult} navigation={this.props.navigation} id={this.state.jersey.liga}/>
              </View>
              <Text
                style={[
                  styles.fontSizeInput(20),
                  styles.fontWeightInput('800'),
                  styles.textTransformCapitalize,
                ]}>
                {jersey.nama}
              </Text>
              <Text>Harga : Rp.{numberWithCommas(jersey.harga)}</Text>

              <View style={[styles.garis]} />
              <View style={[styles.flexDirectionRow]}>
                <Text
                  style={[
                    styles.fontSizeInput(13),
                    styles.marginRightInput(30),
                    styles.marginBottomInput(5),
                  ]}>
                  Jenis : {jersey.jenis}
                </Text>
                <Text
                  style={[
                    styles.fontSizeInput(13),
                    styles.marginRightInput(30),
                    styles.marginBottomInput(5),
                  ]}>
                  Berat : {jersey.berat}
                </Text>
              </View>

              <View
                style={[
                  styles.flexDirectionRow,
                  styles.justifyContentSpaceBetween,
                ]}>
                <Inputan
                  label="Jumlah"
                  width={responsiveWidth(166)}
                  height={responsiveHeight(62)}
                  fontSize={13}
                  value={this.state.jumlah}
                  onChangeText={(jumlah) => this.setState({jumlah})}
                  keyboardType='number-pad'
                />
                <Pilihan
                  label="Pilihan Ukuran"
                  width={responsiveWidth(110)}
                  height={responsiveHeight(50)}
                  fontSize={13}
                  datas={jersey.ukuran}
                  selectedValue={this.state.ukuran}
                  onValueChange={(ukuran) => this.setState({ukuran})}
                />
              </View>

              <Inputan
                textArea
                label="Keterangan"
                placeholder="Isi Jika Ingin Menambahkan Name Tag (Nama dan Nomor Punggung)"
                fontSize={15}
                value={this.state.keterangan}
                onChangeText={(keterangan) => this.setState({keterangan})}
              />

              <Jarak height={15} />

              <Tombol
                title="Masuk Keranjang"
                type="textIcon"
                icon="keranjang-putih"
                padding={responsiveHeight(17)}
                fontSize={18}
                onPress={() => this._masukKeranjang()}
                loading={this.props.saveKeranjangLoading}
              />
              <Jarak height={20} />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  getDetailLigaResult: state.LigaReducer.getDetailLigaResult,

  saveKeranjangLoading: state.KeranjangReducer.saveKeranjangLoading,
  saveKeranjangResult: state.KeranjangReducer.saveKeranjangResult,
  saveKeranjangError: state.KeranjangReducer.saveKeranjangError,
})

export default connect(mapStateToProps, null) (JerseyDetail)
