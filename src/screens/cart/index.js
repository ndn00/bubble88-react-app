import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Button,
} from 'react-native';

import TopLogo from '../../components/toplogo/index';
import PaymentWidget from '../../components/payment_widget/index';

export default class CartScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <TopLogo />
        </View>
        <View>
          <PaymentWidget subtotal={42.00} tax={5} discount={10.00}/>
          <Button title="Pay"/>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
});
