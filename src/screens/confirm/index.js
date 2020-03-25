import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
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
    isFormValid: false
  }

  getHandler = key => val => {
    this.setState({[key]: val})
    this.validateForm()
  }

  onSumbit = () => {
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
  }

  validateForm = () => {
    const input = this.state
    if (input.phoneNumber.length === 10 &&
       input.firstName.length >= 2 &&
       input.lastName.length >= 2) {
         this.setState({isFormValid: true})
       }
    this.setState({isFormValid: false})
  }

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
      </View>
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
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#B46486',
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
  },
  contentView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  triangleLeft: {
    position: 'absolute',
    left: -20,
    bottom: 0,
    width: 0,
    height: 0,
    borderRightWidth: 20,
    borderRightColor: 'white',
    borderBottomWidth: 25,
    borderBottomColor: 'transparent',
    borderTopWidth: 25,
    borderTopColor: 'transparent',
  },
  triangleRight: {
    position: 'absolute',
    right: -20,
    top: 0,
    width: 0,
    height: 0,
    borderLeftWidth: 20,
    borderLeftColor: 'white',
    borderBottomWidth: 25,
    borderBottomColor: 'transparent',
    borderTopWidth: 25,
    borderTopColor: 'transparent',
  },
  inputContainerStyle: {
    marginTop: 16,
    width: '90%',
  },
  keyboardAvoidingView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: "transparent",
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
