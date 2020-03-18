import React, {Component} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

import TopLogo from '../../components/toplogo/index';
<<<<<<< HEAD
import {
  LATITUDE,
  LONGITUDE,
  LATITUDE_DELTA,
  LONGITUDE_DELTA,
  MARGIN,
  WIDTH
} from '../../styles/index'
=======
>>>>>>> 12854196db2bba4f15c1fe270ec0d17b8884f363

export default class InfoScreen extends Component {
  render() {
    return (
      <View>
        <TopLogo />
        <View style={styles.mapContainer}>
          <MapView
            style={styles.mapStyle}
            initialRegion={{
<<<<<<< HEAD
              latitude: LATITUDE,
              longitude: LONGITUDE,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }}
          >
            <Marker coordinate={{
              latitude: LATITUDE,
              longitude: LONGITUDE,
=======
              latitude: 49.188173,
              longitude: -122.846545,
              latitudeDelta: 0.0230,
              longitudeDelta: 0.0105,
            }}
          >
            <Marker coordinate={{
              latitude: 49.188173,
              longitude: -122.846545,
>>>>>>> 12854196db2bba4f15c1fe270ec0d17b8884f363
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

<<<<<<< HEAD
=======
const {width, height} = Dimensions.get('window');
const MARGIN = 20;

>>>>>>> 12854196db2bba4f15c1fe270ec0d17b8884f363
const styles = StyleSheet.create({
  mapContainer: {
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
<<<<<<< HEAD
    width: WIDTH,
    height: WIDTH-MARGIN*3,
=======
    width: width,
    height: width - MARGIN * 3,
>>>>>>> 12854196db2bba4f15c1fe270ec0d17b8884f363
  },
});
