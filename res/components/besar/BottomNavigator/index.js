import React from 'react';
import {View} from 'react-native';
import TabItem from '../TabItem';
import styles from '../../styles';
import { connect } from 'react-redux';
import { deleteParameterJersey, getListJerseyLimit } from '../../../actions/JerseyAction';

const BottomNavigator = ({index, state, descriptors, navigation, dispatch}) => {

  console.log('dispatch >>> ', dispatch);

  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false){
    return null;
  }
  return (
    <View style={{backgroundColor : 'white'}}>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({name: route.name, merge: true});
            }

            if(route.name !== 'ListJersey') {
              
              dispatch(deleteParameterJersey())
              // dispatch(getListJerseyLimit())
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TabItem
              index={index}
              label={label}
              isFocused={isFocused}
              onLongPress={onLongPress}
              onPress={onPress}
            />
          );
        })}
      </View>
    </View>
  );
};

export default connect() (BottomNavigator);
