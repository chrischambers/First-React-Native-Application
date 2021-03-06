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
import Api from './app/utils/Api'


export default class PlayablScoreScreen extends React.Component {

  getLatestPredictionFor(user) {
    return Api.getLatestUserPrediction(user)
  }

  render() {
    // In a real system we would presumably have the user available, but as
    // this is a mockup we don't actually care about the value:
    const user = null
    const data = this.getLatestPredictionFor(user)
    const coinsWon = data.currentPot + data.stake

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

        <ChallengeCard data={data} />
        <Winnings coins={coinsWon} experience={data.experience}/>

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
  icon: {
    marginTop: 3,
    marginRight: 8,
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
    fontSize: 33,
  },
});

AppRegistry.registerComponent('PlayablScoreScreen', () => PlayablScoreScreen);
