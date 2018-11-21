import React from 'react'
import { View, Text } from 'react-native'

import { DBTextInput, DBSafeAreaView, DBButton } from '../../components'

import styles from './style'

const Input = ({ onChangeText, value }) => (
  <DBTextInput 
    containerStyle={styles.inputStyle} 
    onFocusColor="#8E39AA" 
    onBlurBorderColor="#8E39AA" 
    float 
    onChangeText={onChangeText} 
    value={value}
    multiline
  />
)

export class CreatePostScreen extends React.Component {
  state = {
    title: 'Publicação',
    content: '',
  }

  render() {
    const { title, content } = this.state

    return (
      <DBSafeAreaView>
        <View style={{ flex: 1, paddingHorizontal: 30, justifyContent: 'center' }}>
          <Text style={{ fontSize: 20, textAlign: 'center' }}>O que você deseja compartilhar?</Text>
          <Input 
            onChangeText={value => this.setState({ content: value })}
            value={this.state.content}
          />

          <DBButton style={styles.button} onPress={() => this.props.submit(title, content)}>
            <Text style={styles.buttonText}>COMPARTILHAR</Text>
          </DBButton>
        </View>
      </DBSafeAreaView>
    )
  }
}