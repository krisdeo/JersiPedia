import {Text, View, Alert} from 'react-native';
import React, {Component} from 'react';
import {Inputan, Tombol, Jarak} from '../../components';
import {JersipediaIcon, SoccerIcon, SoccerLoginIcon} from '../../assets';
import {responsiveHeight} from '../../utils/widthheight';

import styles from '../styles';
import {loginUser} from '../../actions/AuthAction';
import {connect} from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  _login = () => {
    const {email, password} = this.state;

    console.log('_login >>> ', email, '', password)

    if (email && password) {
      //action get user reducer
      this.props.dispatch(loginUser(email, password));
    } else {
      Alert.alert('Error : ', 'Email dan Password Harus Diisi');
    }
  };

  componentDidUpdate(prevProps) {
    const {loginResult} = this.props;

    if (loginResult && prevProps.loginResult !== loginResult) {
      this.props.navigation.replace('MainApp');
    }
  }

  render() {
    return (
      <View style={[styles.login]}>
        <JersipediaIcon />
        <View style={[styles.loginForm]}>
          <Inputan
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({email})}
          />
          <Inputan
            label="Password"
            secureTextEntry
            value={this.state.password}
            onChangeText={password => this.setState({password})}
          />
          <Jarak height={responsiveHeight(20)} />
          <Tombol
            title="Login"
            type="text"
            padding={12}
            loading={this.props.loginLoading}
            onPress={() => this._login()}
          />
        </View>

        <View style={[styles.alignItemsCenter, styles.marginTopInput(10)]}>
          <Text
            style={[
              styles.fontSizeInput(15),
              styles.fontWeightBold,
              styles.primaryColor,
            ]}>
            Belum Punya Akun?
          </Text>
          <Text
            onPress={() => this.props.navigation.navigate('RegisterForm')}
            style={[
              styles.fontSizeInput(15),
              styles.fontWeightBold,
              styles.primaryColor,
            ]}>
            Klik Untuk Daftar
          </Text>
        </View>

        <View style={styles.pictureLogin}>
          <SoccerLoginIcon />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  loginLoading: state.AuthReducer.loginLoading,
  loginResult: state.AuthReducer.loginResult,
  loginError: state.AuthReducer.loginError,
});

export default connect(mapStateToProps, null)(Login);
