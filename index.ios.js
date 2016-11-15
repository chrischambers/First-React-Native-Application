/**
 * First attempt at a react-native view
 * Chris Chambers <magma.chambers@gmail.com>
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';

import TeamBar from './app/components/TeamBar'
import ResultCard from './app/components/ResultCard'

export default class PlayablScoreScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./app/img/backgroundeffect.png')} 
               style={styles.backdrop}>
          <Text style={styles.heading}>You Won!</Text>
          <Text style={styles.subheading}>Challenges</Text>
          <TeamBar />
          <ResultCard />
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('PlayablScoreScreen', () => PlayablScoreScreen);
