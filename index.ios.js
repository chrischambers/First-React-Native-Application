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

import ChallengeCard from './app/components/ChallengeCard'

export default class PlayablScoreScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./app/img/backgroundeffect.png')} 
               style={styles.backdrop}>

          <Text style={styles.heading}>You Won!</Text>
          <View style={styles.rowContainer}>
            <Image source={require('./app/img/challenge-card.png')} 
               style={styles.icon}>
            </Image>
            <Text style={styles.subheading}>Challenges</Text>
          </View>

          <ChallengeCard />
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
  rowContainer: {
    flexDirection: 'row',
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
    width: 310,
  },
});

AppRegistry.registerComponent('PlayablScoreScreen', () => PlayablScoreScreen);
