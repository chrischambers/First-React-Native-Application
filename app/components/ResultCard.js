import React from 'react'
import {
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native'


export default class ResultCard extends React.Component {
  constructor () {
    super()
    this.state = {
      
    }
  }
  render() {
    return (
      <View style={styles.resultCard}>
        <Text>ResultCard</Text>
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
})
