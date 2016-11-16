import React from 'react'
import {
  StyleSheet,
  Image,
  View
} from 'react-native'

import { AppText } from './CommonElements'


class Team extends React.Component {
  render() {
    let dynamicStyle = {backgroundColor: this.props.team.color}
    if (this.props.status === "away") {
      dynamicStyle.flexDirection = 'row-reverse'
    }
    return (
      <View style={[styles.team, this.props.style]}>
        <View style={[styles.teamWrapper, dynamicStyle]}>
          <Image source={{uri: this.props.team.logo}} style={styles.teamLogo} />
          <AppText style={styles.teamText}>
            {this.props.team.name}
          </AppText>
        </View>
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
        <Team team={this.props.fixture.homeTeam} status="home" />
        <View style={styles.logoWrapper}>
          <Image source={require('../img/logo.png')} 
              style={styles.Companylogo}>
          </Image>
        </View>
        <Team team={this.props.fixture.awayTeam} status="away" />
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
    paddingTop: 2,
    paddingBottom: 2,
    paddingRight: 5,
    paddingLeft: 4,
  },
  Companylogo: {
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
