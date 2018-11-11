import React from 'react'
import { View, Text, Image } from 'react-native'
import { DBButton, DBTextInput } from '../../components'
import { LOGO } from '../../../../assets/images'
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

export class LoginScreen extends React.Component {
  state = {
    email: '',
    password: '',
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Image style={styles.image} source={LOGO} />

        <View style={{ flex: 1 }}>
          <Input 
            onChangeText={value => this.setState({ email: value })} 
            label="Email"  
          />

          <Input 
            onChangeText={value => this.setState({ password: value })} 
            label="Senha"  
          />

        </View>
        <DBButton style={styles.button}>
          <Text style={styles.buttonText}> LOGIN </Text>
        </DBButton>
      </View>
    )
  }
}