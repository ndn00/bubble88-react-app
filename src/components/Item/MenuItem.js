import React, { Component } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { globalStyles, BUTTON_COLOR } from '../../globalStyles';
import styles from './styles';

import GenericButton from '../Buttons/GenericButton';

export default class MenuItem extends Component {

  handleSubmit = () => {
    this.props.onPress(this.props.item)
  }

  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <Image resizeMode={"contain"} style={styles.image} source={{uri: this.props.item.image}} />
        <View style={styles.textContainer}>
          <View>
            <Text style={globalStyles.subTitle}>{this.props.item.name}</Text>
            <Text style={globalStyles.text}>Description of food</Text>
          </View>
          <View style={{height: 20}}/>
          <View style={styles.lowerContainer}>
            <Text style={globalStyles.subTitle}>${this.props.item.price}</Text>
            <View style={styles.buttonContainer}>
              <GenericButton title={"Order"} onPress={this.handleSubmit}/>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
};
