import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from '../../styles';
import {numberWithCommas} from '../../../utils/constant';
import {Jarak} from '../../';
import {responsiveWidth} from '../../../utils/widthheight';

const CardHistory = ({pesanan}) => {
  return (
    <View style={[styles.CardHistoryContainer]}>
      <Text style={[styles.fontSizeInput(17), styles.fontWeightBold]}>
        {pesanan.tanggalPemesanan}
      </Text>
      <Jarak height={10} />
      {pesanan.pesanans.map((history, index) => {
        return (
          <View key={index + 1} style={[styles.flexDirectionRow]}>
            <Text>{index + 1}.</Text>
            <Image
              source={history.product.gambar[0]}
              style={[
                styles.responsiveHeightInput(65),
                styles.responsiveWidthInput(65),
              ]}
            />
            <View style={[styles.marginLeftInput(responsiveWidth(5))]}>
              <Text
                style={[
                  styles.fontSizeInput(15),
                  styles.fontWeightBold,
                  styles.textTransformCapitalize,
                ]}>
                {history.product.nama}
              </Text>
              <Text>Rp. {numberWithCommas(history.product.harga)}</Text>
              <Jarak height={10} />
              <Text style={[styles.fontWeightBold]}>
                Pemesanan : {history.jumlahPesan}
              </Text>
              <Text style={[styles.fontWeightBold]}>
                Total Harga : Rp. {numberWithCommas(history.totalHarga)}
              </Text>
              <Jarak height={10} />
            </View>
          </View>
        );
      })}
      <Jarak height={10} />
      <View style={[styles.flexDirectionRow]}>
      <View style={[styles.flexInput(1)]}>
        <Text style={[styles.primaryColor, styles.fontWeightBold, styles.textAlignRight]}>Status : </Text>
        <Text style={[styles.primaryColor, styles.fontWeightBold, styles.textAlignRight]}>Ongkir (2-3 Hari) : </Text>
        <Text style={[styles.primaryColor, styles.fontWeightBold, styles.textAlignRight]}>Total Harga : </Text>
      </View>
      <View style={[styles.flexInput(1)]}>
        <Text style={[styles.textTransformUpperCase, styles.textAlignRight]}>{pesanan.status}</Text>
        <Text style={[styles.textAlignRight]}>Rp. 15.000,00</Text>
        <Text style={[styles.textAlignRight]}>Rp. {numberWithCommas(pesanan.totalHarga)}</Text>
      </View> 
      </View>
    </View>
  );
};

export default CardHistory;
