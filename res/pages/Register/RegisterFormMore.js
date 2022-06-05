import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';
import React, {Component} from 'react';
import styles from '../styles';
import {LoginFormIllustration, LoginFormIllustration2} from '../../assets';
import {responsiveWidth, responsiveHeight} from '../../utils/widthheight';
import {Jarak, Inputan, Tombol, Pilihan} from '../../components';
import {connect} from 'react-redux';
import {getProvinsiList, getKotaList} from '../../actions/RajaOngkirAction';
import { registerUser } from '../../actions/AuthAction';

class RegisterFormMore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: this.props.route.params.password ? this.props.route.params.password : '',
      nama: this.props.route.params.nama ? this.props.route.params.nama : '',
      email: this.props.route.params.email ? this.props.route.params.email : '',
      nohp: this.props.route.params.nohp ? this.props.route.params.nohp : '',

      alamat: '',
      kota: false,
      provinsi: false,
    };
  }

  componentDidMount() {
    this.props.dispatch(getProvinsiList());
  }

  componentDidUpdate(prevProps) {
    const { registerResult } = this.props;
    
    if(registerResult && prevProps.registerResult !== registerResult) {
      this.props.navigation.replace('MainApp')
    }
  }

  _ubahProvinsi = provinsiInput => {
    this.setState({
      provinsi: provinsiInput,
    }, () => {
    console.log('provinsi state >>> ', this.state.provinsi);
    } );

    this.props.dispatch(getKotaList(provinsiInput));

  };

  _ubahKota = kotaInput => {
    this.setState({
      kota: kotaInput,
    });
  }

  _onContinue = () => {
    const { alamat, kota, provinsi } = this.state;

    if( alamat && kota && provinsi ) {

      const dataInput = {
        nama: this.state.nama ? this.state.nama : '',
        email: this.state.email ? this.state.email : '',
        nohp: this.state.nohp ? this.state.nohp : '',
        alamat: alamat,
        provinsi: provinsi,
        kota: kota,
        status: 'user'
      }

      // console.log('dataInput >>> ',dataInput);

      // this.props.navigation.navigate('MainApp')

      this.props.dispatch(registerUser(dataInput, this.state.password));

    } else {
      Alert.alert('Error : ', 'Harus Diisi Semua')
    }
  }

  render() {
    console.log('dataProvinsi >>> ', this.props.getProvinsiResult);
    console.log('param >>> ', this.props.route.params);
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={[styles.backgroundWhiteColor]}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={[
                styles.backgroundWhiteColor,
                styles.flexInput(1),
                styles.alignItemsCenter,
              ]}>
              <LoginFormIllustration2
                height={responsiveWidth(200)}
                width={responsiveHeight(200)}
              />
              <Text
                style={[
                  styles.fontSizeInput(20),
                  styles.primaryColor,
                  styles.fontWeightBold,
                ]}>
                Isi Alamat
              </Text>
              <Text
                style={[
                  styles.fontSizeInput(20),
                  styles.primaryColor,
                  styles.fontWeightBold,
                ]}>
                Lengkap Anda
              </Text>

              <View style={[styles.wrapperCircle]}>
                <View style={[styles.circleDisabled]}></View>
                <Jarak width={10} />
                <View style={[styles.circlePrimary]}></View>
              </View>

              <View style={[styles.cardRegister]}>
                <Inputan label="Alamat" textArea 
                value={this.state.alamat}
                onChangeText={(alamat) => this.setState({alamat})} />

                <Pilihan
                  label="Provinsi"
                  inputInformation="Provinsi"
                  datas={
                    this.props.getProvinsiResult
                      ? this.props.getProvinsiResult
                      : []
                  }
                  selectedValue={this.state.provinsi}
                  onValueChange={(provinsiValue) => this._ubahProvinsi(provinsiValue)}
                />
                <Pilihan
                  label="Kota/Kab"
                  inputInformation="Kota"
                  datas={
                    this.props.getKotaResult
                      ? this.props.getKotaResult
                      : []
                  }
                  selectedValue={this.state.kota}
                  onValueChange={(kotaInput) => this._ubahKota(kotaInput)}
                />

                <Jarak height={30} />
                <Tombol
                  title="Continue"
                  type="textIcon"
                  icon="submit"
                  padding={10}
                  onPress={() => this._onContinue()}
                  loading={this.props.registerLoading}
                />
              </View>
            </View>
            <Jarak height={30} />
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => ({
  getProvinsiResult: state.RajaOngkirReducer.getProvinsiResult,
  getKotaResult: state.RajaOngkirReducer.getKotaResult,

  registerLoading: state.AuthReducer.registerLoading,
  registerResult: state.AuthReducer.registerResult,
  registerError: state.AuthReducer.registerError,
});

export default connect(mapStateToProps, null)(RegisterFormMore);
