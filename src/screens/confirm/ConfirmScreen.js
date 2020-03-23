import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, Dimensions, KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import Database from '../../../firebase/Database';
import {restaurantName} from '../../globalConfigs';
import {
  Input,
  SearchBar,
  Icon,
  Button,
  ThemeProvider,
} from 'react-native-elements';
import {
  storeField,
  getField,
  NAME_KEY,
  PHONE_KEY,
  ADDRESS_KEY,
} from '../../data/asyncStorage'
import {connect} from 'react-redux'

import GenericButton from '../../components/Buttons/GenericButton'

import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from 'react-native-material-textfield';



const SCREEN_WIDTH = Dimensions.get('window').width;


class ConfirmScreen extends React.Component {

  constructor(props){
    super(props)
    this.onFocus = this.onFocus.bind(this)
    this.onChangeText = this.onChangeText.bind(this)

    this.firstNameRef = this.updateRef.bind(this, 'firstname')
    this.lastNameRef = this.updateRef.bind(this, 'lastname')
    this.phoneNumRef = this.updateRef.bind(this, 'phone')
    this.addressRef = this.updateRef.bind(this, 'address')
    this.notesRef = this.updateRef.bind(this,'notes')

    this.state = {
      firstName: null,
      lastName: null,
      address: null,
      phone: null,
      note: null
    }

  }

  updateRef(name, ref){
    this[name] = ref
  }

  onFocus(){
      let { errors = {} } = this.state;
      for (let name in errors) {
        let ref = this[name];
        if (ref && ref.isFocused()) {
          delete errors[name];
        }
      }
      this.setState({ errors });
  }

  onChangeText(text){
      ['firstname', 'lastname', 'phone', 'address', 'notes']
        .map((name) => ({ name, ref: this[name] }))
        .forEach(({ name, ref }) => {
          if (ref.isFocused()) {
            this.setState({ [name]: text });
          }
        });
    }
    onSubmitFirstName = () => {
      this.lastname.focus();
    }
    onSubmitLastName = () =>{
      this.phone.focus();
    }
    onSubmitPhone = () =>{
      this.address.focus();
    }
    onSubmitAddress = ()=>{
      this.notes.focus();
    }
    onSubmitNotes = ()=> {
      this.notes.blur();
    }

    onSubmitForm = () => {
      let errors = {};
      ['firstname', 'lastname', 'phone', 'address']
        .forEach((name) => {
          let value = this[name].value();
          if (!value) {
            errors[name] = 'Should not be empty';
          } else {
            if ('phone' === name && value.length !=10) {
              errors[name] = 'phone number must be 10 digits';
            }
          }
        });
      if(Object.entries(errors).length === 0){
        this.confirmOrder();
      }else{
        this.setState({ errors });
      }

    }


  ComponentDidMount() {
    this.getLocalUserData()
  }

  getLocalUserData = async () => {
    const firstName = await this.getField(FIRST_NAME_KEY)
    const lastName = await this.getField(LAST_NAME_KEY)
    const address = await this.getField(ADDRESS_KEY)
    const phone = await this.getField(PHONE_KEY)
    this.setState({
      firstName: firstName,
      lastName: lastName,
      address: address,
      phone: phone
    })
  }

  confirmOrder = () => {
    const firstName = this.state.firstname
    const lastName = this.state.lastname
    const address = this.state.address
    const phone = this.state.phone
    const notes = this.state.notes
    const items = this.props.items
    console.log(firstName);
    console.log(lastName);
    console.log(phone);
    console.log(address);
    console.log(items);
    console.log(notes);
    let response = toDataBase();
    if(response){
      console.log("sent to server successfully");
    }else{
      console.log("not sent to server");
    }
  }

  toDataBase = async() =>{
    var db = new Database();
    db.addUser(this.state.phone, "N/A", this.state.firstname, this.state.lastname);
    return await db.addOrder(restaurantName, this.state.firstname, this.state.lastname, this.state.phone, this.props.items, this.state.address, this.state.notes);
  }


  render() {
    let {errors = {}, ...data} = this.state;
    return(
      <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior={Platform.OS === "ios" ? "padding": "height"} keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 85}>
      <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
        <View style={styles.headerContainer}>
          <Text style={styles.heading}>Your Info</Text>
        </View>

        <View style={{ alignItems: 'center', marginBottom: 16 }}>
          <TextField
            containerStyle={styles.inputContainerStyle}
            placeholder="First name"
            label="First name"
            ref={this.firstNameRef}
            onFocus={this.onFocus}
            onChangeText={this.onChangeText}
            onSubmitEditing={this.onSubmitFirstName}
            returnKeyType='next'
            error = {errors.firstname}
          />
          <TextField
            containerStyle={styles.inputContainerStyle}
            placeholder="Last name"
            label="Last name"
            ref={this.lastNameRef}
            onFocus={this.onFocus}
            onChangeText={this.onChangeText}
            onSubmitEditing={this.onSubmitLastName}
            returnKeyType='next'
            error = {errors.lastname}
          />
        <TextField
            containerStyle={styles.inputContainerStyle}
            placeholder="Phone number"
            label="Phone number"
            keyboardType='phone-pad'
            ref={this.phoneNumRef}
            onFocus={this.onFocus}
            onChangeText={this.onChangeText}
            onSubmitEditing={this.onSubmitPhone}
            returnKeyType='next'
            error = {errors.phone}
          />

          <TextField
            containerStyle={styles.inputContainerStyle}
            placeholder="Address"
            label="Address"
            ref={this.addressRef}
            onFocus={this.onFocus}
            onChangeText={this.onChangeText}
            onSubmitEditing={this.onSubmitAddress}
            returnKeyType='next'
            error = {errors.address}
          />

          <TextField
            containerStyle={styles.inputContainerStyle}
            placeholder="(Optional)"
            label="Notes"
            ref={this.notesRef}
            onFocus={this.onFocus}
            onChangeText={this.onChangeText}
            onSubmitEditing={this.onSubmitNotes}
            returnKeyType='done'
          />

          <View style={{height:20}} />
          <View style={styles.buttonContainer}>
            <GenericButton title="Confirm Order" onPress={this.onSubmitForm}/>
          </View>
        </View>
      </ScrollView>
      </KeyboardAvoidingView>
    )
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
});
