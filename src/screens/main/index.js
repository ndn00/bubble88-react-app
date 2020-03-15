import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StatusBar,
  Dimensions,
  StyleSheet,
} from 'react-native'

import Constants from 'expo-constants';
import Swiper from 'react-native-swiper'

import TopLogo from '../../components/toplogo/index'

//TODO: Refactor
const { width, height } = Dimensions.get('window');
const MARGIN = 20
const BANNER_SIZE = 200

export default class MainScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor:'white' }}>
        <StatusBar hidden={true} />
        <TopLogo />
        <Text style={{fontSize: 22, fontFamily: 'Roboto', fontWeight: 'bold'}}>Featured Dishes</Text>
        <Text style={{fontSize: 22, fontFamily: 'Roboto', fontWeight: 'bold'}}>廚師推薦</Text>
        <Swiper style={{
            height: BANNER_SIZE + MARGIN*3
        }}
        >

          <View>
            <Image
              style={
                {
                  width: null,
                  height: BANNER_SIZE,
                  resizeMode: 'contain'
                }
              }
              source={require('../../../assets/noodle.jpg')}
            />
            <View style={
              {
                alignItems: 'center'
              }
            }>
              <Text style={{fontSize: 17, fontFamily: 'Roboto'}}>House beef brisket noodle</Text>
              <Text style={{fontSize: 17, fontFamily: 'Roboto'}}>88牛錦麵</Text>
            </View>
          </View>

          <View>
            <Image
              style={
                {
                  width: null,
                  height: BANNER_SIZE,
                  resizeMode: 'contain'
                }
              }
              source={require('../../../assets/hotpot.jpg')}
            />
            <View style={
              {
                alignItems: 'center'
              }
            }>
              <Text style={{fontSize: 17, fontFamily: 'Roboto'}}>House beef brisket noodle</Text>
              <Text style={{fontSize: 17, fontFamily: 'Roboto'}}>88牛錦麵</Text>
            </View>
          </View>

        </Swiper>



      </View>
    )
  }
}

/*
const styles = StyleSheet.create({

})
*/
