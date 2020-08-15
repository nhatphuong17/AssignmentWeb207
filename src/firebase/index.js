import firebase from 'firebase';


 var firebaseConfig = {
    apiKey: "AIzaSyBaWNCHxk7dvtc5l_iFBIj1rmrBQ-TE7wc",
    authDomain: "uploadimg-7f154.firebaseapp.com",
    databaseURL: "https://uploadimg-7f154.firebaseio.com",
    projectId: "uploadimg-7f154",
    storageBucket: "uploadimg-7f154.appspot.com",
    messagingSenderId: "855389231013",
    appId: "1:855389231013:web:4ace417869a295233bba4c",
    measurementId: "G-4285XY4M7C"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase