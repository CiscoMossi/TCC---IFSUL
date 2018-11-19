import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { DBCard } from '../../components'
import styles from './style'
import { PostService } from '../../../services'

const postService = new PostService()

export class HomeScreen extends Component {
  state = {
    feed: [],
  }

  async componentDidMount() {
    const { _id } = this.props.getLoggedUser()
    const result = await postService.getFeed(_id)
    this.setState({ feed: result.data.docs })
  }

  isLastCard = index => {
    return index === this.state.feed.length - 1
  }

  render() {
    const { feed } = this.state
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        { feed.map((post, index) => (
          <DBCard 
            { ...post }
            key={index}
            style={this.isLastCard && styles.lastItem}
          />
        ))}
        <DBCard link="https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/advertising.mp3" audioPercentage="70%" />
        <DBCard text="Um dia eu estava passando por um grande problema com um bug e já estava completamente irado com a situação. Nada que eu tentava resolvia. Pratiquei aquilo que chamam de 'Meditation in a moment'. Cara, minha cabeça se abriu, diversas outras ideias. Não demorou muito e resolvi o problema." />
        <DBCard text="Conteudo do card contando minha experiencia com meditação" />
        <DBCard text="Conteudo do card contando minha experiencia com meditação" />
        <DBCard style={true && styles.lastItem} text="Conteudo do card contando minha experiencia com meditação" />
      </ScrollView>
    )
  }
}