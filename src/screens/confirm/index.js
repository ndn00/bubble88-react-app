import React, {Component} from 'react';
import {
  View,
  Text,
  Alert,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import TopLogo from '../../components/toplogo';
import {connect} from 'react-redux';
import {FONT_TITLE, FONT_TEXT, PRIMARY_COLOR, TERTIARY_COLOR, MARGIN, WIDTH} from '../../styles';
import BigButton from '../../components/buttons/bigbutton';
import Database from '../../../firebase/Database'

class ConfirmScreen extends Component {

  state = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
  }

  getHandler = key => val => {
    this.setState({[key]: val})
  }

  onSumbit = () => {
    var isFormValid = this.validateForm()
    if (isFormValid) {
      Alert.alert(
        'Confirmation 😋',
         "The order will be submitted to Bubble88." + "\n" + "\n" +
         `Total:$ ${this.props.route.params.cost}`,
        [
          {text: 'Cancel', onPress: () => console.log("canceled"), style: 'cancel'},
          {text: 'Confirm', onPress: () => this.onSend()},
        ],
        { cancelable: false }
      )
    }
    else {
      Alert.alert(
        'Error in input',
        'Please check your name and phone number input.',
        [
          {text: "Ok",  onPress: () => console.log("OK"), style: 'cancel'}
        ],
        { cancelable: false }
      )
    }
  }

  onSend = () => {
    console.log(this.state)
    console.log(this.props.items)
    let cloud = new Database();
    console.log("hello");
    cloud.addUser(
      this.state.phoneNumber,
      "N/A",
      this.state.firstName,
      this.state.lastName
    );
    cloud.addOrder(
      this.state.phoneNumber,
      "Bubble88",
      this.state.firstName,
      this.state.lastName,
      this.state.phoneNumber,
      this.props.items,
      "",
      "");
      cloud.incrementOrderState(
        1,
        "Bubble88",
      );
      this.props.navigation.navigate('Main')
  }

  validateForm = () => {
    const input = this.state
    if (input.phoneNumber.length === 10 &&
       input.firstName.length >= 2 &&
       input.lastName.length >= 2) {
         return true
    }else{
      return false
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>

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
            <BigButton title='Confirm' onPress={this.onSumbit}/>
          </View>
        </View>

      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items,
})

export default connect(mapStateToProps)(ConfirmScreen)


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  centered: {
    alignItems: 'center',
    margin: MARGIN,
  },
  contentWrapper: {
    marginLeft: MARGIN,
  },
  formWrapper: {
    width: WIDTH - MARGIN*2,
    marginBottom: MARGIN
  }
});
