import React from 'react'
import {
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native'

import TeamBar from './TeamBar'
import ResultCard from './ResultCard'


const ChallengeCard = props => {
  const data = props.data
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
      <TeamBar fixture={data.fixture} />
      <View style={styles.resultCardWrapper}>
        <ResultCard collect={data.currentPot} winner={winner} loser={loser} />
      </View>
    </View>
  )
}

ChallengeCard.propTypes = {data: React.PropTypes.object.isRequired}
export default ChallengeCard

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

