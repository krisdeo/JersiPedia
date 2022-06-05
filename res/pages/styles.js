import {Text, StyleSheet, View, Dimensions} from 'react-native';
import React, {Component} from 'react';
import {PRIMARY_COLOR, WHITE_COLOR, SHADOW_GREY} from '../utils/colors';
import {responsiveWidth, responsiveHeight} from '../utils/widthheight';

const styles = StyleSheet.create({
  headerComponent: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: WHITE_COLOR,
  },
  login: {
    flex: 1,
    // justifyContent: 'center',
    paddingTop: 80,
    alignItems: 'center',
    backgroundColor: WHITE_COLOR,
  },
  picture: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  pictureLogin: {
    // position: 'absolute',
    bottom: 7,
    right: -100,
  },
  input: {
    fontSize: 16,
  },
  searchSection: {
    backgroundColor: WHITE_COLOR,
    borderRadius: 5,
  },
  headerContainer: {
    backgroundColor: WHITE_COLOR,
    height: responsiveHeight(125),
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

  checkoutButton: {
    paddingHorizontal: responsiveHeight(30),
    backgroundColor: WHITE_COLOR,

    // marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.62,
    elevation: 10,
    paddingBottom: 10,
  justifyContent: 'flex-end',
  },

  totalHargaCheckout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },

  biayaCheckout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  whiteColor: {
    color: WHITE_COLOR,
  },
  backgroundWhiteColor: {
    backgroundColor: WHITE_COLOR,
  },

  containerNavigator: {
    alignItems: 'center',
  },
  textNavigator: {
    fontSize: 11,
    marginTop: 4,
  },
  whiteColor: {
    color: 'white',
  },
  mainColor: {
    color: '#6AB1D7',
  },
  fontBold: {
    fontWeight: 'bold',
  },
  fontNormal: {
    fontWeight: 'normal',
  },

  ligaContainer: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  ligaText: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  loginForm: {
    width: '80%',
    padding: 30,
    borderRadius: 5,
    shadowColor: SHADOW_GREY,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5.62,
    elevation: 2,
  },

  jerseyContainer: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  jerseyPageScroll: {
    marginTop: -30,
  },

  profilePage: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
  },
  editProfilePage: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
    paddingHorizontal: 30,
    paddingTop: 10,
    justifyContent: 'space-between',
  },
  profileContainer: {
    position: 'absolute',
    bottom: 0,
    height: responsiveHeight(400),
    width: '100%',
    backgroundColor: WHITE_COLOR,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  profilePicture: {
    width: responsiveWidth(150),
    height: responsiveHeight(150),
    borderRadius: 40,
    alignSelf: 'center',
    marginTop: -responsiveHeight(75),
  },
  profileInfo: {
    marginTop: 10,
    alignItems: 'center',
  },

  backgroundColorPrimary: {
    backgroundColor: PRIMARY_COLOR,
  },

  jerseyDetailContainer: {
    // position: 'absolute',
    bottom: 0,
    // height: responsiveHeight(300),
    // height: responsiveHeight(Dimensions.get('window').height / 2),
    width: '100%',
    height: '100%',
    backgroundColor: WHITE_COLOR,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  jerseyDetailPage: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
  },
  jerseyDetailBackButton: {
    position: 'absolute',
    marginTop: 30,
    marginLeft: 30,
  },
  garis: {
    borderWidth: 0.2,
    marginTop: 10,
  },

  listKeranjangView: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
    justifyContent: 'flex-end',
  },

  historyPage: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },

  flexDirectionRow: {
    flexDirection: 'row',
  },
  justifyContentSpaceBetween: {
    justifyContent: 'space-between',
  },

  height100: {
    height: '100%',
  },

  profilePic: {
    width: responsiveWidth(150),
    height: responsiveHeight(150),
    borderRadius: 40,
  },

  wrapperProfilePic: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },

  tombolChangePhoto: {
    marginLeft: 20,
    flex: 1,
  },

  primaryColor: {
    color: PRIMARY_COLOR,
  },

  fontWeightBold: {
    fontWeight: 'bold',
  },

  heightScreenResponsive: {
    height: Dimensions.get('window').height,
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  responsiveHeightInput: responsiveHeightInput => ({
    height: responsiveHeight(responsiveHeightInput),
  }),
  marginVerticalInput: marginVerticalInput => ({
    marginVertical: marginVerticalInput,
  }),
  marginLeftInput: marginLeftInput => ({
    marginLeft: marginLeftInput,
  }),
  marginRightInput: marginRightInput => ({
    marginRight: marginRightInput,
  }),
  marginBottomInput: marginBottomInput => ({
    marginBottom: marginBottomInput,
  }),
  marginTopInput: marginTopInput => ({
    marginTop: marginTopInput,
  }),
  marginHorizontalInput: marginHorizontalInput => ({
    marginHorizontal: marginHorizontalInput,
  }),
  fontSizeInput: fontSizeInput => ({
    fontSize: fontSizeInput,
  }),
  fontWeightInput: fontWeightInput => ({
    fontWeight: fontWeightInput,
  }),

  paddingHorizontalInput: paddingHorizontalInput => ({
    paddingHorizontal: paddingHorizontalInput,
  }),

  paddingVerticalInput: paddingVerticalInput => ({
    paddingVertical: paddingVerticalInput,
  }),

  flexInput: flexInput => ({
    flex: flexInput,
  }),

  paddingTopInput: paddingTopInput => ({
    paddingTop: paddingTopInput,
  }),

  textTransformCapitalize: {
    textTransform: 'capitalize',
  },
  alignItemsFlexEnd: {
    alignItems: 'flex-end',
  },

  wrapperCircle: {
    flexDirection: 'row',
    marginTop: 10
  },
  circlePrimary: {
    backgroundColor: PRIMARY_COLOR,
    width: responsiveWidth(11),
    height: responsiveHeight(11),
    borderRadius: 10
  },
  circleDisabled: {
    backgroundColor: 'lightgrey',
    width: responsiveWidth(11),
    height: responsiveHeight(11),
    borderRadius: 10
  },

  cardRegister: {
    width: '80%',
  },
});

export default styles;
