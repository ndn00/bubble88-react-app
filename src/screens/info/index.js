import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native';

import TopLogo from '../../components/toplogo/index'

export default class InfoScreen extends Component {
  render() {
    return (
      <View>
        <TopLogo />
        <View style={styles.mapContainer}>
          <MapView
            style={styles.mapStyle}
            initialRegion={{
             latitude: 49.188173,
             longitude: -122.846545,
             latitudeDelta: 0.0230,
             longitudeDelta: 0.0105,
            }}
          >
          <Marker coordinate={{
            latitude: 49.188173,
            longitude: -122.846545
          }}>
            <Image
              styles={{height: 100, width: null}}
              source={require('../../../assets/location_box.png')}
            />
          </Marker>
          </MapView>
        </View>
      </View>
    );
  }
}

const { width, height } = Dimensions.get('window');
const MARGIN = 20

const styles = StyleSheet.create({
  mapContainer: {
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
     width: width,
     height: width - MARGIN * 3,
  },
});
