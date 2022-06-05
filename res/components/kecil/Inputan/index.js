import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import styles from '../../styles';

const Inputan = ({
  textArea,
  width,
  height,
  fontSize,
  placeholder,
  label,
  value,
  secureTextEntry,
  keyboardType,
  onChangeText,
  disabled
}) => {
  console.log('width, height >>> ', width, height);
  if (textArea) {
    return (
      <View style={[styles.marginTopInput(10)]}>
        <Text style={[styles.fontSizeInput(fontSize)]}>{label} :</Text>
        <TextInput
          style={[styles.inputTextArea]}
          multiline={true}
          numberOfLines={3}
          value={value}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          editable={disabled ? false : true}
        />
      </View>
    );
  }
  return (
    <View style={[styles.marginTopInput(10)]}>
      <Text style={[styles.fontSizeInput(fontSize)]}>{label} :</Text>
      <TextInput
        style={[
          styles.widthInput(width),
          styles.heightInput(height),
          styles.inputTextBox,
        ]}
        value={value}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        editable={disabled ? false : true}
      />
    </View>
  );
};

export default Inputan;
