import React from 'react'
import {
  StyleSheet,
  Image,
  View
} from 'react-native'

import { AppText } from './CommonElements'

const Team = props => {
  let dynamicStyle = {backgroundColor: props.team.color}
  if (props.status === "away") {
    dynamicStyle.flexDirection = 'row-reverse'
  }
  return (
    <View style={[styles.team, props.style]}>
      <View style={[styles.teamWrapper, dynamicStyle]}>
        <Image source={{uri: props.team.logo}} style={styles.teamLogo} />
        <AppText style={styles.teamText}>
          {props.team.name}
        </AppText>
      </View>
    </View>
  )
}

Team.propTypes = {
  team: React.PropTypes.object.isRequired,
}

const TeamBar = props => {
  return (
    <View style={styles.teamBar}>
      <Team team={props.fixture.homeTeam} status="home" />
      <View style={styles.logoWrapper}>
        <Image source={require('../img/logo.png')} 
            style={styles.companyLogo}>
        </Image>
      </View>
      <Team team={props.fixture.awayTeam} status="away" />
    </View>
  )
}

TeamBar.propTypes = {
  fixture: React.PropTypes.object.isRequired,
}
export default TeamBar

const styles = StyleSheet.create({
  logoWrapper: {
    backgroundColor: 'white',
    paddingTop: 2,
    paddingBottom: 2,
    paddingRight: 5,
    paddingLeft: 4,
  },
  companyLogo: {
    alignSelf: 'center',
  },
  team: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  teamLogo: {
    width: 18,
    height: 18,
    marginLeft: 3,
    marginRight: 3,
  },
  teamText: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 3,
    fontSize: 17,
    textShadowColor: '#303038',
    textShadowRadius: 3,
    textShadowOffset: {width: 1, height: 1},
  },
  teamWrapper: {
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  teamBar: {
    top: 7,
    zIndex: 5,
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
})
