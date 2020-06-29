//import * as firebase from 'firebase';
import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyCkIl2wZdtB2EpYbxkZv38p_aMscKJ8DVM",
    authDomain: "react-form-587cf.firebaseapp.com",
    databaseURL: "https://react-form-587cf.firebaseio.com",
    projectId: "react-form-587cf",
    storageBucket: "react-form-587cf.appspot.com",
    messagingSenderId: "626893353378",
    appId: "1:626893353378:web:aff41be6d2c03ec1e302fb"
  };
  // Initialize Firebase
  //var fireDb = firebase.initializeApp(firebaseConfig);
  var fire = firebase.initializeApp(firebaseConfig);
  export default fire;
  //export default fireDb.database().ref();