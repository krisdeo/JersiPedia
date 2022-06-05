import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from '../../styles';
import {CrossIcon} from '../../../assets';
import {numberWithCommas} from '../../../utils/constant';
import { Jarak } from "../../../components";
import { responsiveHeight } from "../../../utils/widthheight";
import { connect } from 'react-redux';
import { deleteKeranjang } from '../../../actions/KeranjangAction';

const CardKeranjang = ({keranjang, keranjangUtama, id, dispatch}) => {

  const _hapusKeranjang = () => {
    console.log('_hapusKeranjang >>> ', keranjang);
    dispatch(deleteKeranjang(keranjang, keranjangUtama, id))
  }

  return (
    <View style={[styles.cardContainer, styles.alignItemsCenter]}>
      <Image
        source={{uri: keranjang.product.gambar[0]}}
        style={[
          styles.responsiveWidthInput(77),
          styles.responsiveHeightInput(88),
          styles.resizeModeContain,
        ]}
      />
      <View style={[styles.responsiveWidthInput(160)]}>
        <Text style={[styles.fontSizeInput(12), styles.fontWeight900]}>
          {keranjang.product.nama}
        </Text>

        <Text style={[styles.fontSizeInput(11)]}>
          Rp. {numberWithCommas(keranjang.product.harga)}
        </Text>

        <Jarak height={responsiveHeight(5)}/>

        <Text style={[styles.fontSizeInput(11), styles.fontWeight900]}>
          Pesan : {''}
          <Text style={[styles.fontWeight100]}>{keranjang.jumlahPesan}</Text>
        </Text>

        <Text style={[styles.fontSizeInput(11), styles.fontWeight900]}>
          Ukuran : {''}
          <Text style={[styles.fontWeight100]}>{keranjang.ukuran}</Text>
        </Text>

        <Text style={[styles.fontSizeInput(11), styles.fontWeight900]}>
          Total Harga : {''}
          <Text style={[styles.fontWeight100]}>
            Rp. {numberWithCommas(keranjang.totalHarga)}
          </Text>
        </Text>

        <Text style={[styles.fontSizeInput(11), styles.fontWeight900]}>
          Keterangan : {''}
          <Text style={[styles.fontWeight100]}>{keranjang.keterangan}</Text>
        </Text>

      </View>
      <TouchableOpacity style={[styles.hapusIcon]} onPress={() => _hapusKeranjang()}>
        <CrossIcon />
      </TouchableOpacity>
    </View>
  );
};

export default connect() (CardKeranjang);
