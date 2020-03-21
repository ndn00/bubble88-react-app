import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux'

import MenuItemLite from '../../components/menu_item_lite/index'
import TopLogo from '../../components/toplogo/index';
import PaymentWidget from '../../components/payment_widget/index';
import {deleteItem} from '../../redux/actions'

import {FONT_TITLE} from '../../styles/index'

class CartScreen extends Component {

  state = {
    cost: 0
  }

  handleRemove = english_name => {
    this.props.deleteItem(english_name)
    this.updateCost()
  }

  componentDidMount() {
    this.updateCost()
  }

  componentDidUpdate(nextProps) {
    if (nextProps !== this.props) {
      this.updateCost()
    }
  }

  updateCost = () => {
    var totalCost = 0
    for(var i = 0; i < this.props.items.length; i++){
      totalCost += this.props.items[i].price
    }
    this.setState({cost: totalCost})
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TopLogo />
          <View style={{alignItems: 'center'}}>
            <Text style={FONT_TITLE}>Cart</Text>
          </View>
        </View>
        <ScrollView>
          {this.props.items.map((item) =>
            <MenuItemLite item={{
              image: 'http://www.bubble88.com/wp-content/uploads/2015/03/noodle.jpg',
              name: item.english_name + '\n' + item.alt_name,
              price: item.price,
              handleSubmit: ()=>this.handleRemove(item.english_name),
            }}/>
          )}
          <View style={{justifyContent: 'flex-end', alignItems: 'center'}}>
            <PaymentWidget subtotal={this.state.cost} tax={5} discount={10.00}/>
            <Button title="Pay"/>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items,
})

export default connect(mapStateToProps, {deleteItem: deleteItem})(CartScreen)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
