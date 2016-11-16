import React from 'react'
import {
  StyleSheet,
  Image,
  View
} from 'react-native'

import { AppText } from './CommonElements'

export class Team extends React.Component {
  render() {
    return (
      <View style={styles.team}>
        <AppText style={styles.teamText}>TEAM</AppText>
      </View>
    )
  }
}

export default class TeamBar extends React.Component {
  constructor () {
    super()
    this.state = {
      
    }
  }
  render() {
    return (
      <View style={styles.teamBar}>
        <Team />
        <Image source={require('../img/logo.png')} 
             style={styles.logo}
        >
        </Image>
        <Team />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  logo: {
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 3,
    marginBottom: 3,
    marginRight: 5,
    marginLeft: 5,
  },
  team: {
    backgroundColor: 'red',
    justifyContent: 'center',
  },
  teamText: {
  },
  teamBar: {
    alignSelf: 'stretch',
    backgroundColor: 'white',
    flexDirection: 'row',
  },
})
