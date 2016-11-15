/**
 * First attempt at a react-native view
 * Chris Chambers <magma.chambers@gmail.com>
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';

export default class PlayablScoreScreen extends Component {
  render() {
    return (
      <Image source={require('./app/img/backgroundeffect.png')} 
             style={styles.backgroundImage} 
      />
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
});

AppRegistry.registerComponent('PlayablScoreScreen', () => PlayablScoreScreen);
