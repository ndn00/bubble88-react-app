// Colors
export const PRIMARY_COLOR = '#ee9647'; // orange
export const SECONDARY_COLOR = 'white';
export const TERTIARY_COLOR = 'gray';
export const QUARTERNARY_COLOR = '#f2f2f2'; // light gray

// Fonts
export const FONT_BUTTON_LARGE = {
  fontSize: 20,
  //fontFamily: 'Roboto',
  fontWeight: 'bold',
};
export const FONT_BUTTON_SMALL = {
  fontSize: 14,
  //fontFamily: 'Roboto',
};
export const FONT_TITLE = {
  fontSize: 20,
  //fontFamily: 'Roboto',
  fontWeight: 'bold',
};
export const FONT_TEXT = {
  fontSize: 16,
  //fontFamily: 'Roboto',
};

// Spacings
import {Dimensions} from 'react-native';

export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;

export const MARGIN = 20;

export const LOGO_SIZE = 100;
export const BORDER_RADIUS = 20;
export const BANNER_SIZE = 160;

// Constants
export const LATITUDE = 49.188173;
export const LONGITUDE = -122.846545;
export const LATITUDE_DELTA = 0.0230;
export const LONGITUDE_DELTA = 0.0105;
