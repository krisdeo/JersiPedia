import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {SliderImage1, SliderImage2} from '../../../assets';
import {SliderBox} from 'react-native-image-slider-box';
import {responsiveHeight} from '../../../utils/widthheight';
import {PRIMARY_COLOR, WHITE_COLOR, SHADOW_GREY, RED} from '../../../utils/colors';
import styles from '../../styles';

export default class BannerSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [SliderImage1, SliderImage2],
    };
  }
  render() {
    return (
      <View style={styles.sliderContainer}>
        <SliderBox
          images={this.state.images}
          autoplay
          circleLoop
          sliderBoxHeight={responsiveHeight(132)}
          ImageComponentStyle={styles.slider}
          dotStyle={styles.dotSlider}
          dotColor={PRIMARY_COLOR}
        />
      </View>
    );
  }
}
