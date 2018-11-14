import React from 'react'
import { View, Text } from 'react-native'
import { DBButton, DBTextInput } from '../../components'
import styles from './style'

const Input = ({ onChangeText, label }) => (
  <DBTextInput 
    containerStyle={styles.inputStyle} 
    labelStyle={styles.labelStyle} 
    onFocusColor="#8E39AA" 
    onBlurBorderColor="#8E39AA" 
    float 
    onChangeText={onChangeText} 
    label={label}
  />
)

export class SignUpScreen extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={{ flex: 1 }}>
          <Input 
            onChangeText={value => this.setState({ name: value })} 
            label="Nome"  
          />

          <Input 
            onChangeText={value => this.setState({ email: value })} 
            label="Email"  
          />

          <Input 
            onChangeText={value => this.setState({ password: value })} 
            label="Senha"  
          />

          <Input 
            onChangeText={value => this.setState({ passwordConfirmation: value })} 
            label="Confirmação de Senha" 
          />

        </View>
        <DBButton style={styles.button}>
          <Text style={styles.buttonText}> CADASTRAR </Text>
        </DBButton>
      </View>
    )
  }
}