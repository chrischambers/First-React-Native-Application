import React from 'react'
import {
  StyleSheet,
  Image,
  View
} from 'react-native'

import { AppText } from './CommonElements'


export class Outcome extends React.Component {
  render() {
    return (
      <View style={styles.outcome}>
        <AppText style={styles.outcomeText}>WIN</AppText>
      </View>
    )
  }
}


export class CollectAmount extends React.Component {
  render() {
    return (
      <View style={styles.collectAmount}>
        <AppText style={styles.collectAmountText}>COLLECT 250</AppText>
        <Image source={require('../img/coin.png')} 
             style={styles.coin}
        >
        </Image>
      </View>
    )
  }
}


export default class ResultCard extends React.Component {
  render() {
    return (
      <View style={styles.resultCard}>
        <Outcome />
        <CollectAmount />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  resultCard: {
    backgroundColor: 'red',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  outcome: {
    backgroundColor: '#c21b2c',
    alignSelf: 'stretch',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  collectAmount: {
    backgroundColor: '#303038',
    alignSelf: 'stretch',
    borderWidth: 2,
    borderColor: '#ffcc00',
    borderStyle: 'solid',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  outcomeText: {
    fontSize: 40,
    paddingTop: 8,
  },
  collectAmountText: {
    fontSize: 25,
    paddingTop: 8,
    paddingBottom: 3,
    paddingRight: 1,
  },
})
