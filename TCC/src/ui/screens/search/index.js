import React from 'react'
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { DBScreenWrapper, DBImage } from '../../components'
import { ProfileScreen } from '../profile'
import { gradientColors } from '../default'

import { UserService } from '../../../services'

import styles from './style'

const userService = new UserService()

const SearchResult = ({ user, onPress }) => {
  const userImage = userService.getUserImage(user._id)

  return (
    <TouchableOpacity onPress={() => onPress(user)}>
      <View style={styles.searchResultWrapper}>
        <DBImage uri={userImage} style={styles.userImage} />
        <Text style={styles.userName}>{user.name}</Text>
      </View>
    </TouchableOpacity>
  )
}


export class SearchScreen extends React.Component {
  state = {
    searchedValue: '',
    searchResults: [],
    showingProfile: false,
    userDetailed: null,
  }

  handleSearch = async searchedValue => {
    if (searchedValue) {
      const result = await userService.findByName(searchedValue)
      this.setState({ searchedValue, searchResults: result.data })
    } else {
      this.setState({ searchedValue, searchResults: [] })
    }
  }

  handleItemPress = user => {
    this.setState({ showingProfile: true, userDetailed: user })
  }

  render() {
    return (
      <React.Fragment>
        <View style={{ flex: 1 }}>
          <View style={styles.topSide}>
            <LinearGradient
              style={styles.inputWrapper}
              start={{ x: 0.75, y: 0.25 }} 
              end={{x: 0.25, y: 0.75}} 
              locations={[0, 0.25, 0.5, 0.75]}
              colors={gradientColors} 
            >
              <TextInput style={styles.input} onChangeText={this.handleSearch} />
            </LinearGradient>
          </View>
          <ScrollView style={{ flex: 1, elevation: 3, backgroundColor: '#fff' }} showsVerticalScrollIndicator={false}>
            { this.state.searchResults.map((user, index) => (<SearchResult key={index} onPress={this.handleItemPress} user={user} />)) }
          </ScrollView>
        </View>
        <DBScreenWrapper visible={this.state.showingProfile} onBack={() => this.setState({ showingProfile: false })}>
          <View style={{ flex: 1, paddingTop: 50 }}>
            <ProfileScreen setLogged={this.props.setLogged} loggedUser={this.props.loggedUser} user={this.state.userDetailed} />
          </View>
        </DBScreenWrapper>
      </React.Fragment>
    )
  }
}