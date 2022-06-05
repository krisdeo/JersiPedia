import {Text, StyleSheet, View, TextInput} from 'react-native';
import React, {Component} from 'react';
import styles from '../../styles';
import {SearchIcon} from '../../../assets';
import {Tombol, Jarak} from '../../../components';
import {PRIMARY_COLOR, WHITE_COLOR} from '../../../utils/colors';
import {connect} from 'react-redux';
import {saveKeywordJersey} from '../../../actions/JerseyAction';
import {getData} from '../../../utils/localstorage';
import { getListKeranjang } from '../../../actions/KeranjangAction';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };
  }

  componentDidMount() {
    console.log('HeaderComponent >>>');
    getData('user').then(res => {
    console.log('HeaderComponent res >>>', res);

      if (res)
        //get list keranjang
        this.props.dispatch(getListKeranjang(res.uid));
    });
  }

  _search = () => {
    console.log('search >>> ', this.state.search);

    //action save keyword
    this.props.dispatch(saveKeywordJersey(this.state.search));

    if (this.props.page !== 'ListJersey') {
      this.props.navigation.navigate('ListJersey');
    }

    // return state ke string kosong
    this.setState({
      search: '',
    });
  };

  render() {
    console.log(
      'getListKeranjangResult home >>> ',
      this.props.getListKeranjangResult,
    );

    let totalKeranjang = this.props.getListKeranjangResult.pesanans
      ? Object.keys(this.props.getListKeranjangResult.pesanans).length
      : 0;

    console.log('totalKeranjang A >>> ', totalKeranjang);
    return (
      <View style={styles.headerContainer}>
        <View style={styles.headerWrapper}>
          <View style={styles.searchSection}>
            <SearchIcon />
            <TextInput
              placeholder="Cari Jersey . . . "
              style={styles.input}
              value={this.state.search}
              onChangeText={search => this.setState({search})}
              onSubmitEditing={() => this._search()}
            />
          </View>
          <Jarak width={10} />
          <Tombol
            icon="keranjang"
            totalKeranjang={totalKeranjang}
            padding={10}
            color="white"
            onPress={() => this.props.navigation.navigate('Keranjang')}
            // totalKeranjang={totalKeranjang}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  getListKeranjangLoading: state.KeranjangReducer.getListKeranjangLoading,
  getListKeranjangResult: state.KeranjangReducer.getListKeranjangResult,
  getListKeranjangError: state.KeranjangReducer.getListKeranjangError,
});

export default connect(mapStateToProps, null)(HeaderComponent);
