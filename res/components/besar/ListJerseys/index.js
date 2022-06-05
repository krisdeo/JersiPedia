import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CardJersey} from '../../../components';
import styles from '../../styles';
import {connect} from 'react-redux';
import { PRIMARY_COLOR } from '../../../utils/colors';

const ListJerseys = ({
  // getListJerseyLimitLoading,
  // getListJerseyLimitResult,
  // getListJerseyLimitError,

  getListJerseyLoading,
  getListJerseyResult,
  getListJerseyError,
  navigation,
}) => {
  console.log('getListJerseyResult >>> ', getListJerseyResult);
  console.log('getListJerseyError >>> ', getListJerseyError);
  // console.log('getListJerseyLimitResult >>> ', getListJerseyLimitResult);
  return (
    <View style={styles.listJerseyView}>
      {getListJerseyResult ? (
        //Kalau database api biasa bisa lgsg di map
        // getListJerseyLimitResult.map(jersey => {

        //Firebase harus dibuat objek mapping (objek key di mapping)
        Object.keys(getListJerseyResult).map(key => {
          return <CardJersey jerseys={getListJerseyResult[key]} key={key} navigation={navigation} />;
        })
      ) : getListJerseyLoading ? (
        <View style={{flex: 1, marginTop: 10, marginBottom: 30}}>
          <ActivityIndicator color={PRIMARY_COLOR} />
        </View>
      ) : getListJerseyError ? (
        <Text>{getListJerseyError}</Text>
      ) : (
        <Text>Data Kosong</Text>
      )}
    </View>
  );
};

const mapStateToProps = state => ({
  // getListJerseyLimitLoading: state.JerseyReducer.getListJerseyLimitLoading,
  // getListJerseyLimitResult: state.JerseyReducer.getListJerseyLimitResult,
  // getListJerseyLimitError: state.JerseyReducer.getListJerseyLimitError,

  getListJerseyLoading: state.JerseyReducer.getListJerseyLoading,
  getListJerseyResult: state.JerseyReducer.getListJerseyResult,
  getListJerseyError: state.JerseyReducer.getListJerseyError,
});

export default connect(mapStateToProps, null)(ListJerseys);
