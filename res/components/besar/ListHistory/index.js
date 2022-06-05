import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { CardHistory } from '../../';
import styles from '../../styles';

const ListHistory = ({pesanans}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    
    <View style={[styles.marginHorizontalInput(30), styles.marginBottomInput(30)]}>
      {pesanans.map((pesanan) => {
        return <CardHistory pesanan={pesanan} key={pesanan.id}/>
      })}
    </View>
    </ScrollView>
  )
}

export default ListHistory