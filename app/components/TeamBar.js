import React from 'react'
import {
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native'

export class Team extends React.Component {
  render() {
    return (
      <View style={styles.team}>
        <Text style={styles.teamText}>TEAM</Text>
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
  },
  team: {
    backgroundColor: 'red',
    flex: 3,
  },
  teamText: {
    color: '#fbfbfb',
  },
  teamBar: {
    height: 20,
    alignSelf: 'stretch',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'stretch',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})
