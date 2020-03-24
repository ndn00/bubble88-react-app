import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';

import TopLogo from '../../components/toplogo/index';
import CustomPicker from '../../components/custom_picker/index'

import {
  WIDTH,
  MARGIN,
  PRIMARY_COLOR,
  FONT_TITLE
} from '../../styles/index'

export default class CustomizationScreen extends Component {

  state = {
    item: null,
    customizations: [],
    language: 'test'
  }

  componentWillMount() {
    this.populateState()
  }

  populateState = () => {
    var customizations = []
    var params = this.props.route.params
    for (const i of params.item['customizations']){
      customizations.push(params.customizations[i])
    }
    this.setState({item: this.props.route.params.item})
    this.setState({customizations})
  }

  render() {
    return (
      <View style={styles.container}>
        <TopLogo/>
        <ScrollView>
          {
            this.state.customizations.map((item) =>
              <View>
                <View style={{
                  width: WIDTH - 2*MARGIN,
                  backgroundColor: PRIMARY_COLOR,
                  alignSelf: 'center',
                  borderRadius: MARGIN,
                  padding: MARGIN
                }}>
                  <Text style={[FONT_TITLE,{color: 'white'}]}>{item['meta']['name']}</Text>
                  <Text style={[FONT_TITLE,{color: 'white'}]}>{item['meta']['alt_name']}</Text>
                </View>
              </View>
            )
          }
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
