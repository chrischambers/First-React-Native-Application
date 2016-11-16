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
    return (
      <View style={styles.challengeCard}>
        <TeamBar fixture={this.props.predData.fixture} />
        <View style={styles.resultCardWrapper}>
          <ResultCard />
        </View>
      </View>
    )
  }
}

ChallengeCard.propTypes = {
  predData: React.PropTypes.object.isRequired,
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

