import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import TopLogo from '../../components/toplogo';
import {FONT_TITLE, FONT_TEXT, PRIMARY_COLOR, TERTIARY_COLOR, MARGIN, WIDTH} from '../../styles';
import BigButton from '../../components/buttons/bigbutton';

export default class ConfirmScreen extends Component {

  state = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    isFormValid: false
  }

  getHandler = key => val => {
    this.setState({[key]: val})
    this.validateForm()
  }

  onSumbit = () => {
    console.log(this.state)
  }

  validateForm = () => {
    const input = this.state
    if (input.phoneNumber.length === 10 &&
       input.firstName.length >= 2 &&
       input.lastName.length >= 2) {
         this.setState({isFormValid: true})
       }
    this.setState({isFormValid: true})
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={[styles.centered]}>
          <Text style={FONT_TITLE}>Order Confirmation</Text>
        </View>
        <View style={[styles.container, styles.contentWrapper]}>
          <View style={styles.formWrapper}>
            <Text style={FONT_TITLE}>First Name</Text>
            <TextInput
              mode='outlined'
              placeholder='Enter your first name'
              onChangeText={this.getHandler('firstName')}
              theme={{colors: {primary: TERTIARY_COLOR, underlineColor: 'transparent'}}}
            />
          </View>
          <View style={styles.formWrapper}>
            <Text style={FONT_TITLE}>Last Name</Text>
            <TextInput
              mode='outlined'
              placeholder='Enter your last name'
              onChangeText={this.getHandler('lastName')}
              theme={{colors: {primary: TERTIARY_COLOR, underlineColor: 'transparent'}}}
            />
          </View>
          <View style={styles.formWrapper}>
            <Text style={FONT_TITLE}>Phone Number</Text>
            <TextInput
              mode='outlined'
              placeholder='Enter your phone number'
              onChangeText={this.getHandler('phoneNumber')}
              keyboardType={'numeric'}
              theme={{colors: {primary: TERTIARY_COLOR, underlineColor: 'transparent'}}}
            />
          </View>
          <View style={[styles.centered]}>
            <BigButton title='Confirm' onPress={this.onSumbit} disabled={!this.state.isFormValid}/>
          </View>
        </View>
      </KeyboardAvoidingView>
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
