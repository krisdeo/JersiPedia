import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "../../styles";
import { connect } from 'react-redux';
import { getJerseyByLiga } from '../../../actions/JerseyAction';

const CardLiga = ({liga, navigation, id, dispatch}) => {

  const toJerseyByLiga = (id, namaLiga) => {
    //ke jersey action
    dispatch(getJerseyByLiga(id, namaLiga));

    navigation.navigate('ListJersey');
  }

  return (
    <TouchableOpacity style={styles.ligaTouchable} onPress={() => toJerseyByLiga(id, liga.namaLiga)}>
      <Image source={{uri:liga.image}} style={styles.ligaGambar}/>
    </TouchableOpacity>
  )
}

export default connect() (CardLiga)
