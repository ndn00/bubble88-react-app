import React, {Component} from 'react';
import {
  View,
  Image,
} from 'react-native';

import styles from './styles';

export default class TopLogo extends Component {
  render() {
    return (
      <View style={styles.topbar} >
        <Image
          style={styles.logo}
          source={require('../../../assets/logo.png')}
        />
      </View>
    );
  }
}
