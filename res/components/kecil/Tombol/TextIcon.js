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
  KeranjangPutihIcon,
  BackIcon,
  ArrowRight
} from '../../../assets';
import {PRIMARY_COLOR, WHITE_COLOR} from '../../../utils/colors';

import TextOnly from './TextOnly';

const TextIcon = ({icon, padding, type, color, title, onPress, disabled}) => {
  console.log('disabled >>> ',disabled );
  const Icon = () => {
    if (icon === 'keranjang') {
      return <KeranjangIcon />;
    }

    if (icon === 'search') {
      return <SearchIcon />;
    }

    if (icon === 'back') {
      return <BackIcon />;
    }

    if (icon === 'keranjang-putih') {
      return <KeranjangPutihIcon />;
    }

    if (icon === 'submit') {
      return <ArrowRight />;
    }

    return <KeranjangIcon />;
  };

  if (type === 'text') {
    return <TextOnly {...props} onPress={onPress} />;
  }

  return (
    <TouchableOpacity
      style={styles.iconContainer(padding, color, disabled)}
      onPress={onPress}
      disabled={disabled}>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent: 'center',}}>
      <Icon />

      <Text style={[styles.iconText]}>{title}</Text>
      </View>

    </TouchableOpacity>
  );
};

export default TextIcon;
