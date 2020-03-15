import { StyleSheet, Dimensions } from 'react-native';

import { ITEM_COLOR } from '../../globalStyles';

const { width, height } = Dimensions.get('window');

const MARGIN = 10;

const styles = StyleSheet.create({
  container: {
    width:width-MARGIN*2,
    height: width/3+MARGIN,
    margin:MARGIN,
    borderRadius:MARGIN,
    backgroundColor:ITEM_COLOR,
    flexDirection:'row',
    alignItems: 'center'
  },
  image: {
    width: width/3,
    height: height/3
  },
  textContainer: {
    flex: 1,
    padding: MARGIN,
  },
  lowerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection:'row',
    alignItems:'center',
  }
});

export default styles;
