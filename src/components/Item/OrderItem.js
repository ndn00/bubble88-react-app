import React, { Component }  from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { globalStyles } from '../../globalStyles';
import styles from './styles';

import GenericButton from '../Buttons/GenericButton';

export default class OrderItem extends Component {
  state = {
      image: null,
      price: null,
      name: null,
  }

  componentDidMount() {
    this.getProps(this.props)
  }

  /*https://stackoverflow.com/questions/41233458/react-child-component-not-updating-after-parent-state-change*/
  componentWillReceiveProps(nextProps) {
    this.getProps(nextProps)
  }

  getProps = props => {
    this.setState({
      image: props.item.image,
      price: props.item.price,
      name: props.item.name,
    });
  }

  handleRemove = () => {
    this.props.onRemove(this.props.index)
  }

  render() {
    return (
        <TouchableOpacity style={styles.container}>
          <Image resizeMode={"contain"} style={styles.image} source={{uri: this.state.image}} />
          <View style={styles.textContainer}>
            <View>
              <Text style={globalStyles.subTitle}>{this.state.name}</Text>
              <Text style={globalStyles.text}>Description of food</Text>
            </View>
            <View style={{height: 20}}/>
            <View style={styles.lowerContainer}>
              <Text style={globalStyles.subTitle}>${this.state.price}</Text>
              <View style={styles.buttonContainer}>
                {/*<MinusButton/>
                  <Text style={[{paddingHorizontal:10},globalStyles.subTitle]}>{this.state.quantity}</Text>
                  <AddButton/>
                */}
                <GenericButton title={"Remove"} onPress={this.handleRemove}/>
              </View>
            </View>
          </View>
        </TouchableOpacity>
    );
  }
}
