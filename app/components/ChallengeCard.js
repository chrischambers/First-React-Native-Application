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
  constructor () {
    super()
    this.state = {
      
    }
  }
  render() {
    return (
      <View style={styles.challengeCard}>
        <TeamBar />
        <ResultCard />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  challengeCard: {
    backgroundColor: 'green',
    alignSelf: 'stretch',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    padding: 10,
    paddingTop: 20,
    marginLeft: 15,
    marginRight: 15,
  },
})

