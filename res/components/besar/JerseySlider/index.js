import {Text, StyleSheet, View, Modal} from 'react-native';
import React, {Component} from 'react';
import ImageViewer from 'react-native-image-zoom-viewer';
import {SliderBox} from 'react-native-image-slider-box';
import {responsiveWidth, responsiveHeight} from '../../../utils/widthheight';
import {PRIMARY_COLOR} from '../../../utils/colors';

export default class JerseySlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openImage: false,
      previewImage: false,
    };
  }

  clickPreview = index => {
    this.setState({
      openImage: true,
      previewImage: [
        {
          url: this.props.images[index],
          props: {
            // Or you can set source directory.
            source: this.props.images[index],
          },
        },
      ],
    });
  };

  render() {
    const {images} = this.props;
    return (
      <View>
        <SliderBox
          images={images}
          autoplay
          sliderBoxHeight={responsiveHeight(400)}
          ImageComponentStyle={styles.slider}
          dotStyle={styles.dotSlider}
          dotColor={PRIMARY_COLOR}
          onCurrentImagePressed={index => this.clickPreview(index)}
        />
        <Modal visible={this.state.openImage} transparent={true} onRequestClose={() => this.setState({openImage: false})}>
          <ImageViewer
            imageUrls={this.state.previewImage}
            backgroundColor={PRIMARY_COLOR}
            onClick={() => this.setState({openImage: false})}
            enableSwipeDown
            onSwipeDown={() => this.setState({openImage: false})}
          />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
