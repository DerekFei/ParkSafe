/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import * as firebase from "firebase";

import Home from "./includes/views/home";
import Login from "./includes/views/login";
import Firebase from "./includes/firebase/firebase";

class ParkSafe extends Component {
  constructor(props){
    super(props);
    Firebase.initialize();
    this.getInitialView();
    this.state = {
      userLoaded: false,
      initialView: null
    };
    this.getInitialView = this.getInitialView.bind(this);
  }

  getInitialView() {
    firebase.auth().onAuthStateChanged((user) => {
      let initialView = user? "Home":"Login";
      this.setState({
        userLoaded: true,
        initialView: initialView
      })
    });
  }

  static renderScene(route, navigator) {
    switch (route.name) {

      case "Home":
        return (<Home navigator={navigator} />);
        break;

      case "Login":
        return (<Login navigator={navigator} />);
        break;

    }
  }

  static configureScene(route) {

      if (route.sceneConfig) {
        return (route.sceneConfig);
      } else {
        return ({
          ...Navigator.SceneConfigs.HorizontalSwipeJump,
          gestures: {}
        });
      }

    }

    render() {

      if (this.state.userLoaded) {

        return (
            <Navigator
                initialRoute={{name: this.state.initialView}}
                renderScene={ParkSafe.renderScene}
                configureScene={ParkSafe.configureScene}
            />);
      } else {
        return null;
      }
    }
}


AppRegistry.registerComponent('ParkSafe', () => ParkSafe);


