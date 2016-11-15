import React from 'react'
import {
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native'

export default class Winnings extends React.Component {
  constructor () {
    super()
    this.state = {
      
    }
  }
  render() {
    return (
      <View style={styles.winnings}>
        <Text style={styles.winningsText}>Total Won</Text>

        <View style={styles.row}>
          <Text style={[styles.gold, styles.winningsText]}>+500</Text>
          <Image source={require('../img/coin2.png')}></Image>
        </View>

        <View style={styles.row}>
          <Text style={[styles.xp, styles.winningsText]}>+1200</Text>
          <Image source={require('../img/xp.png')}></Image>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  winnings: {
    backgroundColor: 'rgba(0,0,0,0)',
  },
  winningsText: {
    color: '#fbfbfb',
    fontSize: 25,
  },
  row: {
    flexDirection: 'row',
  },
  gold: {
    textShadowColor: '#ffcc00',
    textShadowRadius: 3,
    textShadowOffset: {width: 2, height: 2},
  },
  xp: {
    textShadowColor: '#32d900',
    textShadowRadius: 3,
    textShadowOffset: {width: 2, height: 2},
  },
})

