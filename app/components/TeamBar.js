import React from 'react'
import {
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native'


export default class TeamBar extends React.Component {
  constructor () {
    super()
    this.state = {
      
    }
  }
  render() {
    return (
      <View style={styles.teamBar}>
        <Text>Team Bar</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  teamBar: {
    height: 20,
    alignSelf: 'stretch',
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
