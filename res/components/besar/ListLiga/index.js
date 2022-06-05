import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {CardLiga} from '../../../components';
import styles from '../../styles';
import {connect} from 'react-redux';
import {PRIMARY_COLOR} from '../../../utils/colors';

const ListLiga = ({getListLigaLoading, getListLigaResult, navigation}) => {
  return (
    <View style={styles.listLigaContainer}>
      {getListLigaResult ? (
        //Kalau database api biasa bisa lgsg di map
        // getListLigaResult.map(liga => {

        //Firebase harus dibuat objek mapping (objek key di mapping)
        Object.keys(getListLigaResult).map(key => {
          return (
            <CardLiga
              navigation={navigation}
              liga={getListLigaResult[key]}
              key={key}
              id={key}
            />
          );
        })
      ) : getListLigaLoading ? (
        <View style={{flex: 1, marginTop: 10, marginBottom: 30}}>
          <ActivityIndicator color={PRIMARY_COLOR} />
        </View>
      ) : (
        <Text>Data Kosong</Text>
      )}
    </View>
  );
};

const mapStateToProps = state => ({
  getListLigaLoading: state.LigaReducer.getListLigaLoading,
  getListLigaResult: state.LigaReducer.getListLigaResult,
});

export default connect(mapStateToProps, null)(ListLiga);
