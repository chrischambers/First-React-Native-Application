import React from 'react'
import {
  StyleSheet,
  Image,
  View
} from 'react-native'

import { AppHeading } from './CommonElements'


export default class Winnings extends React.Component {
  render() {
    return (
      <View style={styles.winnings}>
        <AppHeading style={styles.winningsText}>TOTAL WON</AppHeading>

        <View style={styles.row}>
          <AppHeading style={[styles.winningsText, styles.coins]}>
            +500
          </AppHeading>
          <Image source={require('../img/coin2.png')} />
        </View>

        <View style={styles.row}>
          <AppHeading style={[styles.winningsText, styles.xp]}>
            +1200
          </AppHeading>
          <Image source={require('../img/xp.png')} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  winnings: {
    alignItems: 'center',
  },
  winningsText: {
    fontSize: 30,
    letterSpacing: -1,
  },
  row: {
    flexDirection: 'row',
  },
  coins: {
    fontSize: 60,
    textShadowColor: '#ffcc00',
    textShadowRadius: 3,
    textShadowOffset: {width: 2, height: 2},
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 0,
  },
  xp: {
    fontSize: 40,
    textShadowColor: '#32d900',
    textShadowRadius: 3,
    textShadowOffset: {width: 2, height: 2},
    paddingRight: 14,
  },
})

