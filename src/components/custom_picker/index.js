import React, { Component } from 'react';
import {
  View,
  Text,
  Picker,
  StyleSheet,
} from 'react-native';

export default class CustomPicker extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Picker
          selectedValue={this.state.language}
          style={{height: 50, width: WIDTH - 2*MARGIN}}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({language: itemValue})
          }>
          <Picker.Item label="None" value="none" />
          {
            item['options'].map((choice)=>
              <Picker.Item label={choice.english_name} value={choice.english_name} />
            )
          }
        </Picker>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
