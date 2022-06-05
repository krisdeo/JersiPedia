import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {
  JersipediaIcon,
  SoccerIcon,
  ProfileIcon,
  ShirtIcon,
  HomeIcon,
  ProfileIconSelected,
  ShirtIconSelected,
  HomeIconSelected,
} from '../../../assets';
import styles from '../../styles';

const TabItem = ({index, isFocused, onLongPress, onPress, label}) => {
  const Icon = () => {
    if (label === 'Home') {
      return isFocused ? <HomeIconSelected /> : <HomeIcon />;
    }

    if (label === 'Jersey') {
      return isFocused ? <ShirtIconSelected /> : <ShirtIcon />;
    }

    if (label === 'Profile') {
      return isFocused ? <ProfileIconSelected /> : <ProfileIcon />;
    }

    return <HomeIconSelected />;
  };

  return (
    <TouchableOpacity
      key={index}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.containerNavigator}>
      <Icon />
      {isFocused ? (
        <Text style={(styles.textNavigator, styles.whiteColor)}>{label}</Text>
      ) : (
        <Text style={(styles.textNavigator, styles.mainColor)}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};

export default TabItem;
