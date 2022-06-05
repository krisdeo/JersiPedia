import {Text, StyleSheet, View, ScrollView, Alert} from 'react-native';
import React, {Component} from 'react';
import styles from '../styles';
import {
  HeaderComponent,
  BannerSlider,
  ListLiga,
  ListJerseys,
} from '../../components';
import {Jarak, Tombol} from '../../components';
import {getListLiga} from '../../actions/LigaAction';
import {connect} from 'react-redux';
import {deleteKeywordJersey, getListJersey, getListJerseyLimit} from '../../actions/JerseyAction';

class ListJersey extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    //_unsubscribe untuk trigger task saat pindah bottom navigation
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
    const {idLiga, dispatch} = this.props;

      console.log('this.props.idLiga >>> ', idLiga);
      dispatch(getListLiga());
      dispatch(getListJersey(idLiga));
      dispatch(deleteKeywordJersey());

      // if (this.props.idLiga) {
        // this.props.dispatch(getListJersey(this.props.idLiga));
      // } else {
      //   this.props.dispatch(getListJerseyLimit());
      // }
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  componentDidUpdate(prevProps) {
    const {idLiga, keywordSearch} = this.props;

    console.log('idLiga, keywordSearch >>> ',idLiga, keywordSearch);

    if (idLiga && prevProps.idLiga !== idLiga) {
      this.props.dispatch(getListJersey(idLiga, keywordSearch));
    }

    if (keywordSearch && prevProps.keywordSearch !== keywordSearch) {
      this.props.dispatch(getListJersey(idLiga, keywordSearch));
    }
  }

  render() {
    return (
      <View style={styles.headerComponent}>
        <HeaderComponent navigation={this.props.navigation} page="ListJersey" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.jerseyPageScroll}>
          <View style={styles.ligaContainer}>
            <ListLiga navigation={this.props.navigation} />
          </View>

          <View style={styles.jerseyContainer}>
            {this.props.keywordSearch ? (
              <Text style={styles.ligaText}>
                Cari :{' '}
                {this.props.keywordSearch ? this.props.keywordSearch : ''}
              </Text>
            ) : (
              <Text style={styles.ligaText}>
                Pilih Jersey{' '}
                {this.props.namaLiga ? this.props.namaLiga : ' yang Diinginkan'}
              </Text>
            )}
            <ListJerseys navigation={this.props.navigation} />

            <Tombol title="Lihat Semua" type="text" padding={7} />
          </View>

          <Jarak height={10} />
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  idLiga: state.JerseyReducer.idLiga,
  namaLiga: state.JerseyReducer.namaLiga,
  keywordSearch: state.JerseyReducer.keywordSearch,
});

export default connect(mapStateToProps, null)(ListJersey);
