import React from 'react'
import {
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native'

export class Outcome extends React.Component {
  render() {
    return (
      <View style={styles.outcome}>
        <Text style={styles.outcomeText}>Outcome</Text>
      </View>
    )
  }
}

export class CollectAmount extends React.Component {
  render() {
    return (
      <View style={styles.collectAmount}>
        <Text style={styles.collectAmountText}>Collect 250</Text>
        <Image source={require('../img/coin.png')} 
             style={styles.coin}
        >
        </Image>
      </View>
    )
  }
}

export default class ResultCard extends React.Component {
  constructor () {
    super()
    this.state = {
      
    }
  }
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
    height: 90,
    backgroundColor: 'red',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  outcome: {
    backgroundColor: 'blue',
    alignSelf: 'stretch',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outcomeText: {
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    color: '#fbfbfb',
  },
  collectAmount: {
    backgroundColor: '#303038',
    alignSelf: 'stretch',
    borderWidth: 2,
    borderColor: '#ffcc00',
    borderStyle: 'solid',
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  collectAmountText: {
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    color: '#fbfbfb',
  },
})
