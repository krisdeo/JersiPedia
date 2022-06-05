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
  BackIcon,
} from '../../../assets';
import {PRIMARY_COLOR, WHITE_COLOR} from '../../../utils/colors';

import TextOnly from './TextOnly';
import TextIcon from './TextIcon';
import Loading from './Loading';

const Tombol = props => {
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

    return <KeranjangIcon />;
  };

  const {
    icon,
    totalKeranjang,
    padding,
    type,
    color,
    title,
    onPress,
    loading,
    disabled,
  } = props;

  let totalKeranjangTombol = 0;
  if (totalKeranjang !== undefined) {
    totalKeranjangTombol = totalKeranjang !== undefined ? totalKeranjang : 0;
    console.log('totalKeranjangTombol >>> ', totalKeranjangTombol);
  }

  if (loading) {
    return <Loading {...props} />;
  }

  if (type === 'text') {
    return <TextOnly {...props} onPress={onPress} />;
  } else if (type === 'textIcon') {
    return <TextIcon {...props} onPress={onPress} disabled={disabled} />;
  }

  return (
    <TouchableOpacity
      style={styles.iconContainer(padding, color)}
      onPress={onPress}>
      <Icon />
      {totalKeranjangTombol !== 0 && (
        <View style={styles.notificationView}>
          <Text style={styles.notificationText}>{totalKeranjangTombol}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Tombol;
