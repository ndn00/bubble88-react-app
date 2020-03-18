import {StyleSheet} from 'react-native';

import * as cfg from '../../styles/index';

const styles = StyleSheet.create({
  topbar: {
    width: cfg.WIDTH,
    height: cfg.LOGO_SIZE+cfg.BORDER_RADIUS+cfg.MARGIN,
    borderRadius: cfg.BORDER_RADIUS,
    top: -cfg.BORDER_RADIUS,
<<<<<<< HEAD
    backgroundColor: '#ee9647',
=======
    backgroundColor: cfg.PRIMARY_COLOR,
>>>>>>> 12854196db2bba4f15c1fe270ec0d17b8884f363
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: cfg.LOGO_SIZE,
    height: cfg.LOGO_SIZE,
    top: cfg.BORDER_RADIUS/2,
  },
});

export default styles;
