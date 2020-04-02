import React, {Component} from 'react';
import {TouchableOpacity, Text, View, Image, StyleSheet} from 'react-native';
import {PRIMARY_COLOR,
  SECONDARY_COLOR,
  FONT_BUTTON_SMALL,
  FONT_TEXT,
  WIDTH,
  TERTIARY_COLOR} from '../../styles/index';

export default class OrderItem extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container} activeOpacity={1}>
        <View style={styles.container2}>
          <View style={{alignItems: 'flex-start', flex: 1, justifyContent: 'center'}}>
            <Text style={FONT_TEXT}>Order ID:</Text>
          </View>
          <View style={{alignItems: 'flex-end', flex: 1, justifyContent: 'center'}}>
            <Text style={FONT_TEXT}>{this.props.id}</Text>
          </View>
        </View>
        <View style={styles.container2}>
          <View style={{alignItems: 'flex-start', flex: 1, justifyContent: 'center'}}>
            <Text style={FONT_TEXT}>Status:</Text>
          </View>
          <View style={{alignItems: 'flex-end', flex: 1, justifyContent: 'center'}}>
            <Text style={FONT_TEXT}>{this.props.status==0?"Processing":"Ready to Pickup"}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
};
const MARGIN = 10;
const styles = StyleSheet.create({
  container: {
    width: WIDTH-MARGIN*2,
    height: FONT_TEXT.fontSize*5,
    marginLeft: MARGIN,
    marginTop: MARGIN*1.5,
    borderRadius: MARGIN,
    borderWidth: 1,
    borderColor: TERTIARY_COLOR,
    backgroundColor: SECONDARY_COLOR,
    alignItems: 'center',
  },
  container2: {
    width: WIDTH-MARGIN*2,
    flexDirection: 'row',
    paddingLeft: MARGIN*1.2,
    paddingRight: MARGIN*1.2,
    flex: 1,
  },
  image: {
    width: WIDTH/3,
    height: WIDTH/3,
  },
  textContainer: {
    flex: 1,
    padding: MARGIN,
  },
  lowerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
