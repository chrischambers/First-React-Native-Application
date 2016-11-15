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
import Winnings from './app/components/Winnings'

export default class PlayablScoreScreen extends Component {
  render() {
    return (
      <Image source={require('./app/img/background.png')}
             style={styles.backdrop}>

        <View>
          <Text style={styles.heading}>YOU WON!</Text>
          <View style={styles.rowContainer}>
            <Image source={require('./app/img/challenge-card.png')} 
                   style={styles.icon}></Image>
            <Text style={styles.subheading}>CHALLENGES</Text>
          </View>
        </View>

        <ChallengeCard />
        <Winnings />
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: null,
    height: null,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  heading: {
    color: '#fbfbfb',
    fontSize: 50,
  },
  subheading: {
    color: '#fbfbfb',
    fontSize: 30,
  },
});

AppRegistry.registerComponent('PlayablScoreScreen', () => PlayablScoreScreen);
