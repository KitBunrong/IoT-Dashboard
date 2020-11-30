import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBSq15QT-fpyLO94gQHlYJIqsfPAh_kBgA",
    authDomain: "iot-admin-99a82.firebaseapp.com",
    databaseURL: "https://iot-admin-99a82.firebaseio.com",
    projectId: "iot-admin-99a82",
    storageBucket: "iot-admin-99a82.appspot.com",
    messagingSenderId: "861886995262",
    appId: "1:861886995262:web:1e588214825f8f1f94ea6f",
    measurementId: "G-Z0XDWWLL63"
  };

!firebase.apps.length ? firebase.initializeApp(config) : '';

export const auth = firebase.auth();