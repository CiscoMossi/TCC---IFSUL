import React from 'react'
import { View, Text } from 'react-native'
import { DBButton, DBTextInput } from '../../components'
import styles from './style'

import fs from 'react-native-fs'

import { UserService } from '../../../services'

const Input = ({ onChangeText, label, value }) => (
  <DBTextInput 
    containerStyle={styles.inputStyle} 
    labelStyle={styles.labelStyle} 
    onFocusColor="#8E39AA" 
    onBlurBorderColor="#8E39AA" 
    float 
    onChangeText={onChangeText} 
    label={label}
    value={value}
  />
)

const userService = new UserService()

export class SignUpScreen extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  }

  submit = () => {
    const { name, email, password } = this.state
    userService.create(email, name, password).then(result => {
      this.props.onSubmit(email, password)
    })
  }

  render() {
    const { name, email, password, passwordConfirmation } = this.state

    return (
      <View style={styles.wrapper}>
        <View style={{ flex: 1, marginTop: 30 }}>
          <Input 
            onChangeText={value => this.setState({ name: value })} 
            label="Nome"  
            value={name}
          />

          <Input 
            onChangeText={value => this.setState({ email: value })} 
            label="Email"  
            value={email}
          />

          <Input 
            onChangeText={value => this.setState({ password: value })} 
            label="Senha"
            value={password}  
          />

          <Input 
            onChangeText={value => this.setState({ passwordConfirmation: value })} 
            label="Confirmação de Senha" 
            value={passwordConfirmation}
          />

        </View>
        <DBButton style={styles.button} onPress={this.submit}>
          <Text style={styles.buttonText}> CADASTRAR </Text>
        </DBButton>
      </View>
    )
  }
}