import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import TopLogo from '../../components/toplogo';
import {FONT_TITLE, PRIMARY_COLOR, TERTIARY_COLOR, MARGIN, WIDTH} from '../../styles';
import BigButton from '../../components/buttons/bigbutton';

export default class ConfirmScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.centered]}>
          <Text style={FONT_TITLE}>Order Confirmation</Text>
        </View>
        <View style={[styles.container, styles.contentWrapper]}>
          <View style={styles.formWrapper}>
            <Text style={FONT_TITLE}>First Name</Text>
            <TextInput
              mode='outlined'
              placeholder='Enter your first name'
              theme={{colors: {primary: TERTIARY_COLOR, underlineColor: 'transparent'}}}
            />
          </View>
          <View style={styles.formWrapper}>
            <Text style={FONT_TITLE}>Last Name</Text>
            <TextInput
              mode='outlined'
              placeholder='Enter your last name'
              theme={{colors: {primary: TERTIARY_COLOR, underlineColor: 'transparent'}}}
            />
          </View>
          <View style={styles.formWrapper}>
            <Text style={FONT_TITLE}>Phone Number</Text>
            <TextInput
              mode='outlined'
              placeholder='Enter your phone number'
              theme={{colors: {primary: TERTIARY_COLOR, underlineColor: 'transparent'}}}
            />
          </View>
          <View style={[styles.centered]}>
            <BigButton title='Confirm' onPress={null}/>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: MARGIN*2,
    marginTop: MARGIN*1.2,
  },
  contentWrapper: {
    marginLeft: MARGIN,
    width: WIDTH-MARGIN*2,
  },
  formWrapper: {
    marginBottom: MARGIN*1.5,
  },
  buttonWrapper: {
    flexDirection: 'row',
    marginBottom: MARGIN,
  },
});
