import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';

import {
  FONT_TEXT,
  FONT_TITLE,
  WIDTH,
  SECONDARY_COLOR
} from '../../styles/index'

export default class PaymentWidget extends Component {

  state = {
    total: 0
  }

  updateTotal = () => {
    this.setState({
      total: this.props.subtotal * (1+this.props.tax/100) - this.props.discount
    })
  }

  componentDidMount(){
    this.updateTotal()
  }

  componentDidUpdate(nextProps) {
    if (nextProps !== this.props) {
      this.updateTotal()
    }
  }

  render() {
    return (
      <View style={styles.payment}>
        <View style={styles.horizontal}>
          <Text style={FONT_TEXT}>Subtotal</Text>
          <Text style={FONT_TEXT}>${this.props.subtotal}</Text>
        </View>
        <View style={styles.horizontal}>
          <Text style={FONT_TEXT}>Tax</Text>
          <Text style={FONT_TEXT}>{this.props.tax}%</Text>
        </View>
        <View style={[styles.horizontal,
          {borderBottomColor: 'grey',
           borderBottomWidth: StyleSheet.hairlineWidth}]}>
           <Text style={FONT_TEXT}>Discount</Text>
           <Text style={FONT_TEXT}>- ${this.props.discount}</Text>
        </View>
        <View style={styles.horizontal}>
          <Text style={FONT_TITLE}>Total</Text>
          <Text style={FONT_TITLE}>${this.state.total.toFixed(2)}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  payment: {
    width: WIDTH - 20,
    height: FONT_TEXT.fontSize * 4 * 2.5,
    flexDirection: 'column',
    justifyContent: 'space-around',
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: SECONDARY_COLOR,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  }
});
