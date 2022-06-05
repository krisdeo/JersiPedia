import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { DummyPesanans } from '../../data';
import styles from "../styles";
import { ListHistory } from '../../components';

export default class History extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         pesanans: DummyPesanans
      }
    }
  render() {
    return (
      <View style={[styles.historyPage]}>
        <ListHistory pesanans={this.state.pesanans}/>
      </View>
    )
  }
}