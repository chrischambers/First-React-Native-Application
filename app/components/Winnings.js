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
            +{this.props.coins}
          </AppHeading>
          <Image source={require('../img/coin2.png')} />
        </View>

        <View style={styles.row}>
          <AppHeading style={[styles.winningsText, styles.xp]}>
            +{this.props.experience}
          </AppHeading>
          <Image source={require('../img/xp.png')} />
        </View>
      </View>
    )
  }
}

Winnings.propTypes = {
  coins: React.PropTypes.number.isRequired,
  experience: React.PropTypes.number.isRequired,
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
    paddingTop: 10,
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

