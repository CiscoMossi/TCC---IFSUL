import React from 'react'
import { View, Text, Image, ScrollView, TextInput } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { LOGO } from '../../../../assets/images'
import { gradientColors } from '../default'

import styles from './style'

const SearchResult = ({ image, name }) => (
  <View style={styles.searchResultWrapper}>
    <Image source={image} style={styles.userImage} />
    <Text style={styles.userName}>{name}</Text>
  </View>
)

export class SearchScreen extends React.Component {
  state = {
    search: ''
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.topSide}>
          <LinearGradient
            style={styles.inputWrapper}
            start={{ x: 0.75, y: 0.25 }} 
            end={{x: 0.25, y: 0.75}} 
            locations={[0, 0.25, 0.5, 0.75]}
            colors={gradientColors} 
          >
            <TextInput style={styles.input} onChangeText={search => this.setState({ search })} />
          </LinearGradient>
        </View>
        <ScrollView style={{ flex: 1, elevation: 3, backgroundColor: '#fff' }} showsVerticalScrollIndicator={false}>
          { [...Array(50)].map((item, index) => (<SearchResult key={index} image={LOGO} name="Bork" />)) }
        </ScrollView>
      </View>
    )
  }
}