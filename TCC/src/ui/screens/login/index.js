import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { DBButton, DBTextInput, DBScreenWrapper } from '../../components'
import { LOGO } from '../../../../assets/images'
import styles from './style'

import { RootScreen, SignUpScreen } from '../../screens'

import { UserService, HttpService } from '../../../services'
import moment from 'moment'

const Input = ({ onChangeText, label, value, secureTextEntry, invalid, help }) => (
  <DBTextInput 
    containerStyle={styles.inputStyle} 
    labelStyle={styles.labelStyle} 
    onFocusColor="#8E39AA" 
    onBlurBorderColor="#8E39AA" 
    float 
    onChangeText={onChangeText} 
    label={label}
    value={value}
    secureTextEntry={secureTextEntry}
    invalid={invalid}
    help={help}
  />
)

const userService = new UserService()

export class LoginScreen extends RootScreen {
  state = {
    email: '',
    password: '',
    modal: false,
    wrongPassword: false,
  }

  login = (email, password) => {
    userService.login(email, password)
      .then(({ data }) => {
        const expireDate = moment().add(data.expires, 'milliseconds')
        HttpService.registerToken(data.token, data.user._id, expireDate)
        this.props.setLogged(true, data.user)
      })
      .catch(err => {
        if(err.response.data === 'Authentication error') {
          this.setState({ wrongPassword: true })
        }
      })
  }

  submit = () => {
    const { email, password } = this.state
    this.login(email, password)
  }

  renderScreen = () => {
    const { email, password, wrongPassword } = this.state

    return (
      <React.Fragment>
        <Image style={styles.image} source={LOGO} resizeMode="contain" />

        <TouchableOpacity style={styles.link} onPress={() => this.setState({ modal: true })}>
          <Text style={styles.linkText}>Não possui uma conta ainda? Cadastrar</Text>
        </TouchableOpacity>

        <View style={{ flex: 1 }}>
          <Input 
            value={email}
            onChangeText={value => this.setState({ email: value })} 
            label="Email"
            invalid={wrongPassword}
          />

          <Input 
            value={password}
            onChangeText={value => this.setState({ password: value })} 
            label="Senha"  
            secureTextEntry
            invalid={wrongPassword}
            help={wrongPassword ? "Senha incorreta" : null}
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
      <DBScreenWrapper visible={!!this.state.modal} onBack={() => this.setState({ modal: false })}>
        <SignUpScreen onSubmit={this.login} />
      </DBScreenWrapper>
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