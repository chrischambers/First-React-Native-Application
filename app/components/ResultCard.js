import React from 'react'
import {
  StyleSheet,
  Image,
  View
} from 'react-native'

import { AppText } from './CommonElements'

const Outcome = props => {
  let isDraw = !props.winner
  if (isDraw) {
    return (
      <View style={styles.outcome}>
        <AppText style={styles.outcomeText}>Draw</AppText>
      </View>
    )
  } else {
    const color = props.winner.color
    return (
      <View style={[styles.outcome, {backgroundColor: color}]}>
        <Image source={{uri: props.winner.logo}} style={styles.logoLarge} />
        <AppText style={styles.outcomeText}>Win</AppText>
      </View>
    )
  }
}

const CollectAmount = props => {
  return (
    <View style={styles.collectAmount}>
      <AppText style={styles.collectAmountText}>COLLECT {props.collect}</AppText>
      <Image source={require('../img/coin.png')} style={styles.coin} />
    </View>
  )
}

const ResultCard = props => {
  return (
    <View style={styles.resultCard}>
      <Outcome winner={props.winner} loser={props.loser}/>
      <CollectAmount collect={props.collect} />
    </View>
  )
}

propTypes = {collect: React.PropTypes.number.isRequired}
ResultCard.propTypes = CollectAmount.PropTypes = propTypes
export default ResultCard

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
