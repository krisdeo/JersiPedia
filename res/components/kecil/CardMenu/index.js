import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import {RightArrowIcon} from '../../../assets';
import styles from '../../styles';
import FIREBASE from '../../../config/firebase';
import {clearStorage} from '../../../utils/localstorage';

const CardMenu = ({menu, navigation}) => {
  const _onSubmit = () => {
    if (menu.halaman === 'Login') {
      FIREBASE.auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
          clearStorage();
          navigation.replace('Login');
        })
        .catch(error => {
          // An error happened.
          Alert.alert('Error : ', error);
        });
    } else {
      navigation.navigate(menu.halaman);
    }
  };

  return (
    <TouchableOpacity
      style={[styles.cardContainer, styles.justifyContentSpaceBetween]}
      onPress={() => _onSubmit()}>
      <View style={[styles.cardMenuTextView]}>
        {menu.gambar}
        <Text
          style={[
            styles.fontSize15,
            styles.fontWeight900,
            styles.marginLeft10,
          ]}>
          {menu.nama}
        </Text>
      </View>

      <RightArrowIcon />
    </TouchableOpacity>
  );
};

export default CardMenu;
