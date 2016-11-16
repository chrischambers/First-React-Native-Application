/**
 * First attempt at a react-native view
 * Chris Chambers <magma.chambers@gmail.com>
 * @flow
 */

import React from 'react'
import {
  AppRegistry,
  StyleSheet,
  Image,
  View
} from 'react-native';

import { AppHeading } from './app/components/CommonElements'
import ChallengeCard from './app/components/ChallengeCard'
import Winnings from './app/components/Winnings'
import { Api } from './app/utils/Api'


export default class PlayablScoreScreen extends React.Component {
  getLatestPrediction(user) {
    return Api.getLatestUserPrediction()
  }

  render() {
    return (
      <Image source={require('./app/img/background.png')}
             style={styles.backdrop}>

        <View style={styles.headingWrapper}>
          <AppHeading style={styles.heading}>YOU WON!</AppHeading>
          <View style={styles.rowContainer}>
            <Image source={require('./app/img/challenge-card.png')} 
                   style={styles.icon}></Image>
            <AppHeading style={styles.subheading}>CHALLENGES</AppHeading>
          </View>
        </View>

        <ChallengeCard predData={this.getLatestPrediction(null)} />
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
  headingWrapper: {
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  heading: {
    fontSize: 70,
  },
  subheading: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('PlayablScoreScreen', () => PlayablScoreScreen);
