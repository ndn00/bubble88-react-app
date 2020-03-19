import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';
export default class PaymentScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the PaymentScreen component</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
