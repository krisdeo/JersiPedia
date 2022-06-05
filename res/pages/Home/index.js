import {Text, StyleSheet, View, ScrollView, BackHandler} from 'react-native';
import React, {Component} from 'react';
import styles from '../styles';
import {
  HeaderComponent,
  BannerSlider,
  ListLiga,
  ListJerseys,
} from '../../components';
import { Jarak, Tombol } from "../../components";
import {PRIMARY_COLOR, WHITE_COLOR} from "../../utils/colors"
import { connect } from 'react-redux';
import { getListLiga } from '../../actions/LigaAction';
import { getListJersey, getListJerseyLimit } from '../../actions/JerseyAction';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.props.dispatch(getListLiga());
      this.props.dispatch(getListJerseyLimit());
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  render() {
    return (
      <View style={styles.headerComponent}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HeaderComponent navigation={this.props.navigation} page='Home'/>
          <BannerSlider />

          <View style={styles.ligaContainer}>
            <Text style={styles.ligaText}>Pilih Liga</Text>
            <ListLiga navigation={this.props.navigation}/>
          </View>

          <View style={styles.jerseyContainer}>
            <Text style={styles.ligaText}>Pilih Jersey yang Anda Inginkan</Text>
            <ListJerseys navigation={this.props.navigation}/>

            <Tombol title="Lihat Semua" type="text" padding={7}/>
          </View>

          <Jarak height={10} />
        </ScrollView>
      </View>
    );
  }
}


export default connect() (Home)