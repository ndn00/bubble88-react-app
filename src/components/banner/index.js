import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

import {BANNER_SIZE, FONT_TEXT} from '../../styles/index';

export default class Banner extends Component {
  render() {
    return (
      <View>
        <Image
          style={styles.bannerImage}
          source={this.props.image}
        />
        <View style={styles.textContainer}>
          <Text style={FONT_TEXT}>{this.props.englishName}</Text>
          <Text style={FONT_TEXT}>{this.props.altName}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bannerImage: {
    width: null,
    height: BANNER_SIZE,
    resizeMode: 'contain',
  },
  textContainer: {
    alignItems: 'center',
  },
});
