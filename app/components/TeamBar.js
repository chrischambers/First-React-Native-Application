import React from 'react'
import {
  StyleSheet,
  Image,
  View
} from 'react-native'

import { AppText } from './CommonElements'


class Team extends React.Component {
  render() {
    const color = this.props.team.color
    return (
      <View style={styles.team}>
        <AppText style={[{backgroundColor: color}, styles.teamText]}>
          {this.props.team.name}
        </AppText>
      </View>
    )
  }
}

Team.propTypes = {
  team: React.PropTypes.object.isRequired,
}


export default class TeamBar extends React.Component {
  render() {
    return (
      <View style={styles.teamBar}>
        <Team team={this.props.fixture.homeTeam} />
        <View style={styles.logoWrapper}>
          <Image source={require('../img/logo.png')} 
              style={styles.logo}>
          </Image>
        </View>
        <Team team={this.props.fixture.awayTeam} />
      </View>
    )
  }
}

TeamBar.propTypes = {
  fixture: React.PropTypes.object.isRequired,
}

const styles = StyleSheet.create({
  logoWrapper: {
    backgroundColor: 'white',
    paddingTop: 3,
    paddingBottom: 5,
    paddingRight: 4,
    paddingLeft: 4,
  },
  logo: {
    alignSelf: 'center',
  },
  team: {
    flex: 1,
    justifyContent: 'center',
  },
  teamText: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 3,
    textShadowColor: '#303038',
    textShadowRadius: 3,
    textShadowOffset: {width: 1, height: 1},
  },
  teamBar: {
    top: 8,
    zIndex: 5,
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
})
