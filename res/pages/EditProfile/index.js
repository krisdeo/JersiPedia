import {Text, StyleSheet, View, ScrollView, Image, Alert} from 'react-native';
import React, {Component} from 'react';
import styles from '../styles';
import {Inputan, Pilihan, Tombol} from '../../components';
import {responsiveHeight} from '../../utils/widthheight';
import {getData} from '../../utils/localstorage';
import {connect} from 'react-redux';
import {getProvinsiList, getKotaList} from '../../actions/RajaOngkirAction';
import {DefaultProfile} from '../../assets';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { updateProfile } from '../../actions/ProfileAction';

class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nama: '',
      email: '',
      nohp: '',
      alamat: '',
      provinsi: false,
      kota: false,
      avatar: false,
      avatarForDB: '',
      avatarLama: '',
      updateAvatar: false,
      // profile: DummyProfile,
    };
  }

  _getUserData = () => {
    getData('user').then(res => {
      console.log('_getUserData >>> ', res);
      this.setState({
        uid: res.uid,
        nama: res.nama,
        email: res.email,
        nohp: res.nohp,
        alamat: res.alamat,
        kota: res.kota,
        provinsi: res.provinsi,
        avatar: res.avatar,
        avatarLama: res.avatar,
        updateAvatar: res.avatar,
      });

      this.props.dispatch(getKotaList(res.provinsi));
    });
  };

  _ubahProvinsi = provinsiInput => {
    this.setState(
      {
        provinsi: provinsiInput,
      },
      () => {
        console.log('provinsi state >>> ', this.state.provinsi);
      },
    );

    this.props.dispatch(getKotaList(provinsiInput));
  };

  _ubahKota = kotaInput => {
    this.setState({
      kota: kotaInput,
    });
  };

  _getPhoto = () => {
    launchImageLibrary(
      {quality: 1, maxWidth: 500, maxHeight: 500, includeBase64: true, selectionLimit: 1, cameraType: 'front'},
      response => {
        console.log('_getPhoto response >>> ', response);

        if (response.didCancel || response.errorMessage || response.errorCode) {
          Alert.alert('Error : ', 'No Selected Photo');
        } else {
          const profileImage = response.assets[0].uri;
          console.log('profileImage >>> ', profileImage);

          //image picker versi lama
          // const fileString = `data:${response.type};base64,${response.data}`;

          //image picker versi baru
          const fileString = `data:${response.assets[0].type};base64,${response.assets[0].base64}`;

          this.setState({
            avatar: profileImage,
            avatarForDB: fileString,
            updateAvatar: true
          });
        }
      },
    );
  };

  _onSubmit = () => {
    const {nama, nohp, alamat, provinsi, kota} = this.state;

    if (nama && nohp && alamat && provinsi && kota) {
      this.props.dispatch(updateProfile(this.state));
    } else {
      Alert.alert(
        'Error : ',
        'Nama, Nomor HP, Alamat, Provinsi dan Kota Harus Diisi',
      );
    }
  };

  componentDidMount() {
    this._getUserData();
    this.props.dispatch(getProvinsiList());
  }

  componentDidUpdate(prevProps) {
    const { updateProfileResult } = this.props;
    
    if(updateProfileResult && prevProps.updateProfileResult !== updateProfileResult) {
      Alert.alert('Sukses', 'Update Profile Sukses');
      this.props.navigation.replace('MainApp');
    }
  }

  render() {
    return (
      <View style={[styles.editProfilePage]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Inputan
            label="Nama"
            value={this.state.nama}
            onChangeText={nama => this.setState({nama})}
          />
          <Inputan label="Email" value={this.state.email} disabled />
          <Inputan
            label="No. Handphone"
            value={this.state.nohp}
            keyboardType="number-pad"
            onChangeText={nohp => this.setState({nohp})}
          />
          <Inputan
            label="Alamat"
            value={this.state.alamat}
            onChangeText={alamat => this.setState({alamat})}
          />
          <Pilihan
            label="Provinsi"
            inputInformation="Provinsi"
            datas={
              this.props.getProvinsiResult ? this.props.getProvinsiResult : []
            }
            selectedValue={this.state.provinsi}
            onValueChange={provinsiValue => this._ubahProvinsi(provinsiValue)}
          />
          <Pilihan
            label="Kota/Kab"
            inputInformation="Kota"
            datas={this.props.getKotaResult ? this.props.getKotaResult : []}
            selectedValue={this.state.kota}
            onValueChange={kotaInput => this._ubahKota(kotaInput)}
          />

          <View>
            <View style={[styles.marginTopInput(20)]}>
              <Text>Foto Profile : </Text>
              <View style={[styles.wrapperProfilePic]}>
                <Image
                  style={[styles.profilePic]}
                  source={
                    this.state.avatar
                      ? {uri: this.state.avatar}
                      : DefaultProfile
                  }
                />
                <View style={[styles.tombolChangePhoto]}>
                  <Tombol
                    title="Change Photo"
                    type="text"
                    padding={5}
                    onPress={() => this._getPhoto()}
                  />
                </View>
              </View>
            </View>
          </View>

          <View style={[styles.marginVerticalInput(30)]}>
            <Tombol
              loading={this.props.updateProfileLoading}
              title="Submit"
              type="textIcon"
              icon="submit"
              padding={responsiveHeight(10)}
              onPress={() => this._onSubmit()}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  getProvinsiResult: state.RajaOngkirReducer.getProvinsiResult,
  getKotaResult: state.RajaOngkirReducer.getKotaResult,

  updateProfileLoading: state.ProfileReducer.updateProfileLoading,
  updateProfileResult: state.ProfileReducer.updateProfileResult,
  updateProfileError: state.ProfileReducer.updateProfileError,
});

export default connect(mapStateToProps, null)(EditProfile);
