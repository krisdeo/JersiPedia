import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import React, {Component} from 'react';
import styles from '../styles';
import {LoginFormIllustration, LoginFormIllustration2} from '../../assets';
import {responsiveWidth, responsiveHeight} from '../../utils/widthheight';
import {Jarak, Inputan, Tombol} from '../../components';

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nama: '',
      email: '',
      nohp: '',
      password: '',
    };
  }

  _onContinue = () => {
    const { nama, email, nohp, password } = this.state;
    console.log("_onContinue >>> ", nama, email, nohp, password );

    if( nama && email && nohp && password ) {
      this.props.navigation.navigate('RegisterFormMore', this.state)
    } else {
      Alert.alert('Error : ', 'Form Harus Diisi Semua')
    }
  } 
  render() {
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
              <LoginFormIllustration
                height={responsiveWidth(200)}
                width={responsiveHeight(200)}
              />
              <Text
                style={[
                  styles.fontSizeInput(20),
                  styles.primaryColor,
                  styles.fontWeightBold,
                ]}>
                Daftar
              </Text>
              <Text
                style={[
                  styles.fontSizeInput(20),
                  styles.primaryColor,
                  styles.fontWeightBold,
                ]}>
                Isi Daftar Diri Anda
              </Text>

              <View style={[styles.wrapperCircle]}>
                <View style={[styles.circlePrimary]}></View>
                <Jarak width={10} />
                <View style={[styles.circleDisabled]}></View>
              </View>

              <View style={[styles.cardRegister]}>
                <Inputan
                  label="Nama"
                  value={this.state.nama}
                  onChangeText={(nama) => this.setState({nama})}
                />
                <Inputan
                  label="Email"
                  value={this.state.email}
                  onChangeText={(email) => this.setState({email})}
                />
                <Inputan
                  label="No. Handphone"
                  keyboardType="number-pad"
                  value={this.state.nohp}
                  onChangeText={(nohp) => this.setState({nohp})}
                />
                <Inputan
                  label="Password"
                  secureTextEntry
                  value={this.state.password}
                  onChangeText={(password) => this.setState({password})}
                />
                <Jarak height={30} />
                <Tombol
                  title="Continue"
                  type="textIcon"
                  icon="submit"
                  padding={10}
                  onPress={() => this._onContinue()}
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
