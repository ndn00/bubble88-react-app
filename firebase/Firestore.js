import {decode, encode} from 'base-64'

if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode }

import 'firebase/firestore';
import firebase from 'firebase';

const config = {
  apiKey : "AIzaSyAt0ZBCWSEEfI8LoIH-G6FAJfcgAWnJvjU",
  authDomain : "restaurantapp-b059a.firebaseapp.com",
  databaseURL : "https://restaurantapp-b059a.firebaseio.com",
  projectId : "restaurantapp-b059a",
  storageBucket : "restaurantapp-b059a.appspot.com",
  messagingSenderId : "219162454752",
  appId : "1:219162454752:web:2f53f854686a4580507e85",
  measurementId : "G-YXCHNZLBSM"
};
firebase.initializeApp(config);
// firebase.analytics();
export default firebase;
