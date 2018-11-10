import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { DBCard } from '../../components'
import styles from './style'
export class HomeScreen extends Component {
  componentDidMount() {
    //get feed
  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <DBCard link audioPercentage="0%" />
        <DBCard text="Conteudo do card contando minha experiencia com meditação tipo bastante experiente e tals experiencia ba que experiencia" />
        <DBCard link audioPercentage="70%" />
        <DBCard text="Conteudo do card contando minha experiencia com meditação" />
        <DBCard style={true && styles.lastItem} text="Conteudo do card contando minha experiencia com meditação" />
      </ScrollView>
    )
  }
}