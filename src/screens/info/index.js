import React, {Component} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';

import TopLogo from '../../components/toplogo/index';
import {
  LATITUDE,
  LONGITUDE,
  LATITUDE_DELTA,
  LONGITUDE_DELTA,
  MARGIN,
  WIDTH,
} from '../../styles/index';

export default class InfoScreen extends Component {
  render() {
    return (
      <View>
        <TopLogo />
        <View style={styles.mapContainer}>
          <MapView
            style={styles.mapStyle}
            initialRegion={{
              latitude: LATITUDE,
              longitude: LONGITUDE,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }}
          >
            <Marker coordinate={{
              latitude: LATITUDE,
              longitude: LONGITUDE,
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


const styles = StyleSheet.create({
  mapContainer: {
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: WIDTH,
    height: WIDTH-MARGIN*3,
  },
});
