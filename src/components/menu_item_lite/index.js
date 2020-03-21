import React, {Component} from 'react';
import {TouchableOpacity, Text, View, Image, StyleSheet} from 'react-native';
import SmallButton from '../buttons/smallbutton';
import {PRIMARY_COLOR,
  SECONDARY_COLOR,
  FONT_BUTTON_SMALL,
  FONT_TEXT,
  WIDTH} from '../../styles/index';

export default class MenuItemLite extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container} activeOpacity={1}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: MARGIN}}>
          {this.props.item.name.length < 40 &&
            <Text style={FONT_TEXT}>{this.props.item.name}</Text>
          }
          {this.props.item.name.length > 40 &&
            <Text>{this.props.item.name}</Text>
          }
          <Text style={FONT_TEXT, {fontWeight: 'bold'}}>${this.props.item.price}</Text>
        </View>
        <View style={styles.lowerContainer}>
          <SmallButton title={'Remove 删除'} onPress={this.props.item.handleSubmit}/>
        </View>
      </TouchableOpacity>
    );
  }
};
const MARGIN = 10;
const styles = StyleSheet.create({
  container: {
    width: WIDTH-MARGIN*2,
    height: WIDTH/4.5,
    margin: MARGIN,
    borderRadius: MARGIN,
    backgroundColor: SECONDARY_COLOR,
    flexDirection: 'column',
  },
  lowerContainer: {
    top: -MARGIN*2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
