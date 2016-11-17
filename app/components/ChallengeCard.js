import React from 'react'
import {
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native'

import TeamBar from './TeamBar'
import ResultCard from './ResultCard'


export default class ChallengeCard extends React.Component {
  render() {
    const data = this.props.predData
    let [winner, loser] = [null, null]
    if (!data.outcome.winner) {
      winner = data.outcome.winner
      loser = data.outcome.loser
    } else {
      winner = data.fixture[data.outcome.winner]
      loser = data.fixture[data.outcome.loser]
    }

    return (
      <View style={styles.challengeCard}>
        <TeamBar fixture={this.props.predData.fixture} />
        <View style={styles.resultCardWrapper}>
          <ResultCard collect={data.currentPot} winner={winner} loser={loser} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  challengeCard: {
    alignSelf: 'stretch',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15,
  },
  resultCardWrapper: {
    padding: 15,
    alignSelf: 'stretch',
    backgroundColor: '#303038',
    borderRadius: 2,
  },
})

