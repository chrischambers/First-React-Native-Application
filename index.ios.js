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
             style={styles.backdrop}>
        <Text style={styles.heading}>You Won!</Text>
        <Text style={styles.subheading}>Challenges</Text>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    color: '#fbfbfb',
    fontSize: 50,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  subheading: {
    color: '#fbfbfb',
    fontSize: 30,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  backdrop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('PlayablScoreScreen', () => PlayablScoreScreen);
