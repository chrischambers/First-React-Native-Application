import React from 'react'
import {
  StyleSheet,
  Image,
  View
} from 'react-native'

import { AppText } from './CommonElements'


class Outcome extends React.Component {
  render() {
    let isDraw = !this.props.winner
    if (isDraw) {
      return (
        <View style={styles.outcome}>
          <AppText style={styles.outcomeText}>Draw</AppText>
        </View>
      )
    } else {
      const color = this.props.winner.color
      return (
        <View style={[styles.outcome, {backgroundColor: color}]}>
          <Image source={{uri: this.props.winner.logo}}
                 style={styles.logoLarge} />
          <AppText style={styles.outcomeText}>
            Win
          </AppText>
        </View>
      )
    }
  }
}


class CollectAmount extends React.Component {
  render() {
    return (
      <View style={styles.collectAmount}>
        <AppText style={styles.collectAmountText}>COLLECT {this.props.collect}</AppText>
        <Image source={require('../img/coin.png')} 
             style={styles.coin} />
      </View>
    )
  }
}

CollectAmount.propTypes = {
  collect: React.PropTypes.number.isRequired,
}

export default class ResultCard extends React.Component {
  render() {
    return (
      <View style={styles.resultCard}>
        <Outcome winner={this.props.winner} loser={this.props.loser}/>
        <CollectAmount collect={this.props.collect} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  resultCard: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  outcome: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
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
  logoLarge: {
    height: 70,
    width: 70,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
  },
  outcomeText: {
    fontSize: 50,
    paddingTop: 30,
    paddingBottom: 30,
  },
  collectAmountText: {
    fontSize: 25,
    paddingTop: 8,
    paddingBottom: 3,
    paddingRight: 1,
  },
})
