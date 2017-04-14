import * as firebase from "firebase";
class Firebase {
  // Initialize Firebase
  static initialize(){
      firebase.initializeApp({
      apiKey: "AIzaSyATuVOkPtEG14HoerSOUdv1laZyofDRysA",
      authDomain: "parksafe-4a49d.firebaseapp.com",
      databaseURL: "https://parksafe-4a49d.firebaseio.com",
      projectId: "parksafe-4a49d",
      storageBucket: "parksafe-4a49d.appspot.com",
      messagingSenderId: "984129904347"
    });
  }
}
module.exports = Firebase;