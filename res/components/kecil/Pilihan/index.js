import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import styles from '../../styles';
import {Picker} from '@react-native-picker/picker';

const Pilihan = ({label, datas, width, height, fontSize, selectedValue, onValueChange, inputInformation}) => {
  // const [selectedValue, setSelectedValue] = useState('');
  return (
    <View style={[styles.marginTopInput(10)]}>
      <Text style={[styles.fontSizeInput(fontSize)]}>{label} :</Text>
      <View style={[styles.wrapperPicker]}>
        <Picker
          selectedValue={selectedValue}
          style={[styles.pickerSizeBaju(width, height, fontSize)]}
          // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          onValueChange={onValueChange}>
          <Picker.Item label="Pilih Salah Satu" value="" />
          {datas.map((item, index) => {
            if (inputInformation === 'Provinsi') {
              return (
                <Picker.Item
                  label={item.province}
                  value={item.province_id}
                  key={item.province_id}
                />
              );
            } else if (inputInformation === 'Kota') {
              return (
                <Picker.Item
                  label={item.type + ' ' + item.city_name}
                  value={item.city_id}
                  key={item.city_id}
                />
              );
            } else if (inputInformation === 'Ekspedisi') {
              return (
                <Picker.Item
                  label={item.label}
                  value={item}
                  key={item.id}
                />
              );
            } else {
              return <Picker.Item label={item} value={item} key={item} />;
            }
          })}
        </Picker>
      </View>
    </View>
  );
};

export default Pilihan;
