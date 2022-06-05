import {View, Text, ScrollView, ActivityIndicator} from 'react-native';
import React from 'react';
import {CardKeranjang} from '../../index';
import styles from '../../styles';
import { PRIMARY_COLOR } from '../../../utils/colors';

const ListKeranjang = ({
  getListKeranjangLoading,
  getListKeranjangResult,
  getListKeranjangError,
}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[styles.marginVerticalInput(10)]}>
        {/* {keranjangs.map(keranjang => {
          return <CardKeranjang keranjang={keranjang} key={keranjang.id} />;
        })} */}

        {getListKeranjangResult ? (
          Object.keys(getListKeranjangResult.pesanans).map(key => {
            return (
              <CardKeranjang
                keranjang={getListKeranjangResult.pesanans[key]}
                keranjangUtama={getListKeranjangResult}
                key={key}
                id={key}
              />
            );
          })
        ) : getListKeranjangLoading ? (
          <View style={{flex: 1, marginTop: 10, marginBottom: 30}}>
            <ActivityIndicator color={PRIMARY_COLOR} />
          </View>
        ) : getListKeranjangError ? (
          <Text>{getListKeranjangError}</Text>
        ) : (
          <Text>Data Kosong</Text>
        )}
      </View>
    </ScrollView>
  );
};

export default ListKeranjang;
