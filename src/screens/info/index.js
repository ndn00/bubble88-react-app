import React, {Component} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

import TopLogo from '../../components/toplogo/index';
import {
  LATITUDE,
  LONGITUDE,
  FONT_TITLE,
  FONT_TEXT,
  LATITUDE_DELTA,
  LONGITUDE_DELTA,
  MARGIN,
  WIDTH,
} from '../../styles/index';

export default class InfoScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TopLogo />
        <Image
          style={styles.image}
          source={require('../../../assets/bubble88.jpg')}
        />
        <View style={styles.infoBox}>
          <Text style={FONT_TITLE}>Bubble 88</Text>
          <Text style={FONT_TEXT}>#102 – 10209 King George Blvd , Surrey, BC</Text>
          <Text style={FONT_TEXT}>Phone: (778) 395-8899</Text>
        </View>
        <View style={styles.mapContainer}>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA*0.5,
            longitudeDelta: LONGITUDE_DELTA*0.5,
          }}
          scrollEnabled={false}
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
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: WIDTH - MARGIN*2,
    height: WIDTH * 0.6,
    resizeMode:'cover',
    borderRadius: MARGIN
  },
  infoBox: {
    alignItems: 'center',
    borderWidth: 2,
    padding: MARGIN*0.5,
    borderRadius: MARGIN
  },
  mapContainer: {
    backgroundColor: 'gray',
    justifyContent: 'center',
  },
  mapStyle: {
    width: WIDTH,
    height: WIDTH*0.8,
  },
});
