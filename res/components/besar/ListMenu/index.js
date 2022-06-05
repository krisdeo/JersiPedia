import { View, Text } from 'react-native'
import React from 'react'
import { CardMenu } from '../../../components';

const ListMenu = ({menus, navigation}) => {
  return (
    <View>
        {menus.map((menu) => {
            return <CardMenu menu={menu} key={menu.id} navigation={navigation}/>
        })}
    </View>
  )
}

export default ListMenu