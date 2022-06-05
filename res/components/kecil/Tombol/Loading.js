import {StyleSheet, Text, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from '../../styles';
import {
  JersipediaIcon,
  SoccerIcon,
  ProfileIcon,
  ShirtIcon,
  HomeIcon,
  ProfileIconSelected,
  ShirtIconSelected,
  HomeIconSelected,
  SearchIcon,
  KeranjangIcon,
  KeranjangPutihIcon,
  BackIcon,
  ArrowRight
} from '../../../assets';
import {PRIMARY_COLOR, WHITE_COLOR} from '../../../utils/colors';

import TextOnly from './TextOnly';

const Loading = ({padding}) => {
  
  return (
    <TouchableOpacity
      style={styles.iconContainer(padding, 'lightgrey')}>

          <ActivityIndicator size='small' color='#FFFFFF'/>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent: 'center',}}>
 

      <Text style={[styles.iconText]}>LOADING ...</Text>
      </View>

    </TouchableOpacity>
  );
};

export default Loading;
