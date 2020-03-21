import React, {Component} from 'react';
import {TouchableOpacity, Text, View, Image, StyleSheet} from 'react-native';
import SmallButton from '../buttons/smallbutton';
import {PRIMARY_COLOR,
  SECONDARY_COLOR,
  FONT_BUTTON_SMALL,
  FONT_TEXT,
  WIDTH} from '../../styles/index';

export default class MenuItem extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container} activeOpacity={1}>
        <Image
          resizeMode={'contain'}
          style={styles.image}
          source={{uri: this.props.item.image}}
        />
        <View style={styles.textContainer}>
          <View>
            <Text style={FONT_TEXT}>{this.props.item.name}</Text>
          </View>
          <View style={{height: 20}}/>
          <View style={styles.lowerContainer}>
            <Text style={FONT_TEXT, {fontWeight: 'bold'}}>${this.props.item.price}</Text>
            <View style={styles.buttonContainer}>
              <SmallButton title={'Add 添加'} onPress={this.props.item.handleSubmit}/>
            </View>
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
    height: WIDTH/3+MARGIN,
    marginLeft: MARGIN,
    marginTop: MARGIN*1.5,
    borderRadius: MARGIN,
    backgroundColor: SECONDARY_COLOR,
    flexDirection: 'row',
    alignItems: 'center',
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
