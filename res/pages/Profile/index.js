import {View, Text, Image} from 'react-native';
import React, {Component} from 'react';
import styles from '../styles';
import {DummyProfile, DummyMenu} from '../../data';
import {ListMenu} from '../../components';
import {getData} from '../../utils/localstorage';
import {DefaultProfile} from '../../assets';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // profile: DummyProfile,
      profile: false,
      menus: DummyMenu,
    };
  }

  componentDidMount() {
    //_unsubscribe untuk trigger task saat pindah bottom navigation
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      // do something
      console.log('_unsubscribe >>>');
      this._getUserData();
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _getUserData = () => {
    getData('user').then(res => {
      console.log('_getUserData >>> ', res);

      // const dataUser = res;

      if (res) {
        this.setState({
          profile: res,
        });
      } else {
        this.props.navigation.replace('Login');
      }
    });
  };
  
  render() {
    const {profile, menus} = this.state;
    console.log('Profile >>> ', menus);
    return (
      <View style={styles.profilePage}>
        <View style={styles.profileContainer}>
          <Image
            source={profile.avatar ? {uri: profile.avatar} : DefaultProfile}
            style={styles.profilePicture}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.fontBold}>{profile.nama}</Text>
            <Text>
              No. HP :{' '}
              {profile.nohp
                ? profile.nohp
                : profile.nomerHp
                ? profile.nomerHp
                : ''}
            </Text>
            <Text>
              {profile.alamat}, {profile.kota}
            </Text>
          </View>

          <ListMenu menus={menus} navigation={this.props.navigation} />
        </View>
      </View>
    );
  }
}
