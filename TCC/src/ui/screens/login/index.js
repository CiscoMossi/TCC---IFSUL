import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { DBButton, DBTextInput, DBModal } from '../../components'
import { LOGO } from '../../../../assets/images'
import styles from './style'

import Icon from 'react-native-vector-icons/FontAwesome5'

import { RootScreen, SignUpScreen } from '../../screens'

import { UserService, HttpService } from '../../../services'

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

export class LoginScreen extends RootScreen {
  state = {
    email: '',
    password: '',
    modal: false,
  }

  login = (email, password) => {
    userService.login(email, password)
      .then(({ data }) => {
        HttpService.registerToken(data.token, data.user._id)
        this.props.setLogged(true)
      })
  }

  submit = () => {
    const { email, password } = this.state
    this.login(email, password)
  }

  renderScreen = () => {
    const { email, password } = this.state

    return (
      <React.Fragment>
        <Image style={styles.image} source={LOGO} />

        <TouchableOpacity style={styles.link} onPress={() => this.setState({ modal: true })}>
          <Text style={styles.linkText}>Não possui uma conta ainda? Cadastrar.</Text>
        </TouchableOpacity>

        <View style={{ flex: 1 }}>
          <Input 
            value={email}
            onChangeText={value => this.setState({ email: value })} 
            label="Email"  
          />

          <Input 
            value={password}
            onChangeText={value => this.setState({ password: value })} 
            label="Senha"  
          />
        </View>

        <DBButton style={styles.button} onPress={this.submit}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </DBButton>
      </React.Fragment>
    )
  }

  renderSignUpModal = () => {
    return (
      <DBModal isVisible={!!this.state.modal}>
        <View style={styles.modal}>
          <TouchableOpacity style={styles.back} onPress={() => this.setState({ modal: false })}>
            <Icon name="arrow-left" size={30} style={styles.icon} />
          </TouchableOpacity>
          <SignUpScreen onSubmit={this.login} />
        </View>
      </DBModal>
    )
  }

  render() {
    return (
      <View style={styles.wrapper}>
        { this.renderScreen() }
        { this.renderSignUpModal() }
      </View>
    )
  }
}