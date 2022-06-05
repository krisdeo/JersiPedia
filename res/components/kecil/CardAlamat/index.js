import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../../styles';

const CardAlamat = ({alamat, provinsi, kota, navigation}) => {
  return (
    <View style={[styles.cardAlamatContainer]}>
      <Text style={[styles.cardAlamatTitle]}>Alamat Saya : </Text>
        <Text>Alamat : {alamat}</Text>
        <Text>Kota/Kab : {kota}</Text>
        <Text>Provinsi : {provinsi}</Text>

      <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
        <Text style={[styles.ubahAlamat]}>Ubah Alamat</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardAlamat;
