import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { DBCard } from '../../components'

export class HomeScreen extends Component {
  componentDidMount() {
    //get feed
  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <DBCard link />
        <DBCard text="Conteudo do card contando minha experiencia com meditação" />
        <DBCard text="Conteudo do card contando minha experiencia com meditação" />
        <DBCard text="Conteudo do card contando minha experiencia com meditação" />
        <DBCard text="Conteudo do card contando minha experiencia com meditação" />
      </ScrollView>
    )
  }
}