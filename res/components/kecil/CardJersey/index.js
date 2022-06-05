import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from "../../styles";
import Tombol from "../Tombol";
import {PRIMARY_COLOR, WHITE_COLOR} from "../../../utils/colors"


const CardJersey = ({jerseys, navigation}) => {
  return (
    <View style={(styles.cardView)}>
      <TouchableOpacity style={(styles.cardJersey)}>
          <Image source={{uri: jerseys.gambar[0]}} style={(styles.gambarJersey)}/>
          <Text style={(styles.jerseyText)}>
            {jerseys.nama}
          </Text>
      </TouchableOpacity>
      <Tombol type="text" title="Detail" padding={7} onPress={() => navigation.navigate('JerseyDetail', { jerseys })}/>
    </View>
  )
}

export default CardJersey