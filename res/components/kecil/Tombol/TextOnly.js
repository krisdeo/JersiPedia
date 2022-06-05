import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
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
} from '../../../assets';

const TextOnly = ({padding, title, onPress}) => {

  return (
    <TouchableOpacity style={styles.iconContainer(padding)} onPress={onPress}>
        <Text style={styles.iconText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TextOnly;
