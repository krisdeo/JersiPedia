import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import {JersipediaIcon, SoccerIcon} from '../../assets';

import styles from '../styles'

export default class Splash extends Component {

  componentDidMount() {
      setTimeout(() => {
          this.props.navigation.replace('MainApp')
      }, 3000)
  }
    
  render() {
    return (
      <View style={styles.home}>
          <JersipediaIcon />
          <View style={styles.picture}>
              <SoccerIcon />
          </View>
        {/* <Text>Splash Screen</Text> */}
      </View>
    )
  }
}
