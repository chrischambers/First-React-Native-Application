import React from 'react'
import {
  StyleSheet,
  Text,
} from 'react-native'

export const AppText = ({style, ...props }) => {
  return <Text style={[styles.branded, style]} {...props} />
}

export const AppHeading = ({style, ...props }) => {
  return <Text style={[styles.header, styles.branded, style]} {...props} />
}

const styles = StyleSheet.create({
  branded: {
    color: '#fbfbfb',
    fontFamily: 'BebasNeueBold',
    fontSize: 20,
  },
  header: {
    transform: [{rotate: '-4deg'}],
    letterSpacing: 1,
    fontSize: 50,
    textShadowColor: '#303038',
    textShadowRadius: 3,
    textShadowOffset: {width: 2, height: 2},
  },
})
