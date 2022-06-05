import {Text, StyleSheet, View, ScrollView, Image, Alert} from 'react-native';
import React, {Component} from 'react';
import {DummyProfile} from '../../data';
import styles from '../styles';
import {Inputan, Pilihan, Tombol} from '../../components';
import {responsiveHeight} from '../../utils/widthheight';
import { connect } from 'react-redux';
import { getData } from '../../utils/localstorage';
import { changePassword } from '../../actions/ProfileAction';

class ChangePassword extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       password: '',
       newPassword: '',
       newPasswordConcfirmation: ''
    }
  }


  _onSubmit = () => {
    const {password, newPassword, newPasswordConcfirmation} = this.state;
    
    if(newPassword !== newPasswordConcfirmation) {
      Alert.alert('Error : ', 'Password Baru Harus Sama Dengan Konformasi Password Baru');
    } else if(password && newPassword && newPasswordConcfirmation) {
    
      getData('user')
      .then((res) => {
        const newPasswordParam = {
          email: res.email,
          password: password,
          newPassword: newPassword
        }

        this.props.dispatch(changePassword(newPasswordParam));
      })
      
    } else {
      Alert.alert('Error : ', 'Password Lama, Password Baru, Konformasi Password Baru Harap Diisi');
    }
  }

  componentDidUpdate(prevProps) {
    const { changePasswordResult } = this.props;
    
    if(changePasswordResult && prevProps.changePasswordResult !== changePasswordResult) {
      Alert.alert('Sukses ', 'Password Berhasil Diganti');
      this.props.navigation.replace('MainApp');
    }
  }

  render() {
    return (
      <View style={[styles.editProfilePage]}>
            <View>
          <Inputan label="Password Lama" secureTextEntry value={this.state.password} onChangeText={(password) => this.setState({password})}/>
          <Inputan label="Password Baru" secureTextEntry value={this.state.newPassword} onChangeText={(newPassword) => this.setState({newPassword})}/>
          <Inputan label="Konfirmasi Password Baru" secureTextEntry value={this.state.newPasswordConcfirmation} onChangeText={(newPasswordConcfirmation) => this.setState({newPasswordConcfirmation})}/>
          </View>

          <View>

          <View style={[styles.marginVerticalInput(30)]}>
            <Tombol
              title="Submit"
              type="textIcon"
              icon="submit"
              padding={responsiveHeight(10)}
              onPress={() => this._onSubmit()}
              loading={this.props.changePasswordLoading}
            />
          </View>

          </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  changePasswordLoading: state.ProfileReducer.changePasswordLoading,
  changePasswordResult: state.ProfileReducer.changePasswordResult,
  changePasswordError: state.ProfileReducer.changePasswordError,
})

export default connect(mapStateToProps, null) (ChangePassword)
