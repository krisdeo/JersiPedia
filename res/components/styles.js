import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {
  PRIMARY_COLOR,
  WHITE_COLOR,
  SHADOW_GREY,
  RED,
  YELLOW,
} from '../utils/colors';
import {primary_bold} from '../utils/fonts';
import {responsiveWidth, responsiveHeight} from '../utils/widthheight';
import {SearchIcon} from '../assets';

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: WHITE_COLOR,
  },
  picture: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  headerContainer: {
    backgroundColor: PRIMARY_COLOR,
    height: responsiveHeight(100),
  },
  primaryColor: {
    color: PRIMARY_COLOR,
  },
  primaryBackgroundColor: {
    backgroundColor: PRIMARY_COLOR,
  },
  input: {
    fontSize: 16,
  },
  searchSection: {
    backgroundColor: WHITE_COLOR,
    borderRadius: 5,
    paddingHorizontal: 15,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerComponent: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  headerWrapper: {
    marginTop: 15,
    marginHorizontal: 30,
    flexDirection: 'row',
  },
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 8,
    paddingHorizontal: 30,
    marginBottom: 30,
    marginHorizontal: 30,
    borderRadius: 5,
    shadowColor: SHADOW_GREY,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.62,
    elevation: 4,
  },
  whiteColor: {
    color: WHITE_COLOR,
  },
  containerNavigator: {
    alignItems: 'center',
  },
  textNavigator: {
    fontSize: 11,
    marginTop: 4,
    fontFamily: primary_bold,
  },
  whiteColor: {
    color: 'white',
  },
  mainColor: {
    color: '#6AB1D7',
  },

  iconContainer: (padding, color, disabled) => ({
    backgroundColor: color === 'white' ? WHITE_COLOR : disabled ? 'lightgrey' : PRIMARY_COLOR,
    padding: padding,
    borderRadius: 5,
  }),
  iconText: {
    color: WHITE_COLOR,
    textAlign: 'center',
    fontSize: 13,
  },
  notificationView: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: RED,
    borderRadius: 3,
    padding: 3,
  },
  notificationText: {
    fontSize: 8,
    color: WHITE_COLOR,
  },

  slider: {
    borderRadius: 10,
    width: responsiveWidth(354),
  },
  sliderContainer: {
    marginTop: -15,
  },
  dotSlider: {
    width: 10,
    height: 5,
    borderRadius: 5,
  },

  jerseySlider: {
    marginTop: 25,
    width: responsiveWidth(354),
  },

  ligaTouchable: {
    backgroundColor: WHITE_COLOR,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    padding: 5,
    elevation: 5,
    borderRadius: 10,
  },
  ligaGambar: {
    width: responsiveWidth(57),
    height: responsiveHeight(57),
  },
  listLigaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  gambarJersey: {
    width: 115,
    height: 115,
  },
  listJerseyView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  jerseyText: {
    fontSize: 13,
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  cardJersey: {
    backgroundColor: YELLOW,
    width: responsiveWidth(130),
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardView: {
    marginBottom: 25,
  },
  cardContainer: {
    flexDirection: 'row',
    marginTop: 15,
    backgroundColor: WHITE_COLOR,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    padding: 5,
    elevation: 3,
    borderRadius: 5,
    marginHorizontal: 30,
    paddingHorizontal: responsiveHeight(15),
    paddingVertical: responsiveHeight(10),
    borderRadius: 10,
  },
  cardAlamatContainer: {
    backgroundColor: WHITE_COLOR,
    shadowColor: SHADOW_GREY,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.62,
    elevation: 4,
    padding: 15,
    borderRadius: 20,
    marginTop: 10
  },
  cardAlamatTitle: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  ubahAlamat: {
    fontSize: 14,
    textAlign: 'right',
    fontWeight: 'bold',
    color: PRIMARY_COLOR
  },
  
  hapusIcon : {
    flex : 1,
    alignItems : 'flex-end'
  },
  
  cardMenuTextView: {
    flexDirection: 'row',
  },
  cardMenuText: {
    fontSize: 15,
    fontWeight: '900',
    marginLeft: 10,
  },
  CardHistoryContainer: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
    shadowColor: SHADOW_GREY,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.62,
    elevation: 5,
    padding: 15,
    borderRadius: 10,
    marginTop: 20
  },
  

  fontSize15: {
    fontSize: 15,
  },
  fontWeight900: {
    fontWeight: '900',
  },
  fontWeight100: {
    fontWeight: '100',
  },
  fontWeightBold: {
    fontWeight: 'bold',
  },
  marginLeft10: {
    marginLeft: 10,
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  resizeModeContain: {
    resizeMode : 'contain'
  },
  flexDirectionRow: {
    flexDirection: 'row',
  },

  textTransformCapitalize: {
    textTransform: 'capitalize',
  },
  textTransformUpperCase: {
    textTransform: 'uppercase',
  },

  textAlignRight: {
    textAlign: 'right',
  },

  marginVerticalInput: marginVerticalInput => ({
    marginVertical: marginVerticalInput,
  }),

  marginBottomInput: marginBottomInput => ({
    marginBottom : marginBottomInput
  }),

  fontSizeInput: fontSizeInput => ({
    fontSize: fontSizeInput,
  }),

  marginTopInput: marginTopInput => ({
    marginTop: marginTopInput,
  }),

  widthInput: widthInput => ({
    width: widthInput,
  }),
  heightInput: heightInput => ({
    height: heightInput,
  }),
  flexInput: flexInput => ({
    flex: flexInput,
  }),

  pickerSizeBaju: (width, height, fontSize) => ({
    width: width,
    height: height, 
    justifyContent: 'flex-end',
    fontSize: fontSize,
  }),
  marginHorizontalInput: marginHorizontalInput => ({
    marginHorizontal: marginHorizontalInput,
  }),

  marginLeftInput: marginLeftInput => ({
    marginLeft: marginLeftInput,
  }),

  responsiveWidthInput : (responsiveWidthInput) => ({
    width: responsiveWidth(responsiveWidthInput)
  }),

  responsiveHeightInput : (responsiveHeightInput) => ({
    height: responsiveHeight(responsiveHeightInput)
  }),

  justifyContentSpaceBetween : {
  justifyContent: 'space-between'
  },

  inputTextArea: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: PRIMARY_COLOR,
    paddingVertical: 5,
    paddingHorizontal: 10,
    textAlignVertical: 'top',
  },

  inputTextBox: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: PRIMARY_COLOR,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  wrapperPicker: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: PRIMARY_COLOR,
    paddingVertical: 5,
    paddingHorizontal: 10,
    textAlignVertical: 'top'
  }
});

export default styles;
