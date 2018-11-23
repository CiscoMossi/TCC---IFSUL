import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { DBButton, DBTextInput } from '../../components'
import styles from './style'

import { UserService } from '../../../services'

import ImagePicker from 'react-native-image-picker'

const options = {
  title: 'Selecione a imagem de perfil',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
}

const Input = ({ onChangeText, label, value, invalid, autoCapitalize, secureTextEntry }) => (
  <DBTextInput 
    containerStyle={styles.inputStyle} 
    labelStyle={styles.labelStyle} 
    onFocusColor="#8E39AA" 
    onBlurColor="#8E39AA" 
    onFocusBorderColor="#8E39AA" 
    onBlurBorderColor="#8E39AA" 
    invalid={invalid}
    float 
    onChangeText={onChangeText} 
    autoCapitalize={autoCapitalize}
    label={label}
    value={value}
    autoCorrect={false}
    secureTextEntry={secureTextEntry}
  />
)

const userService = new UserService()

const validEmail = email => {
  var emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return emailRegex.test(String(email).toLowerCase())
}

export class SignUpScreen extends React.Component {
  state = {
    image: null,
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    nameInvalid: false,
    emailInvalid: false,
    passwordInvalid: false,
    passwordConfirmationInvalid: false,
    invalidMailMessage: 'Email inválido'
  }

  formInvalid = () => {
    const { name, email, password, passwordConfirmation } = this.state
    const { isEdit } = this.props

    const newState = {
      nameInvalid: !isEdit && !name,
      emailInvalid: email && !validEmail(email),
      passwordInvalid: !isEdit && !password,
      passwordConfirmationInvalid: passwordConfirmation !== password,
      invalidMailMessage: 'Email inválido'
    }

    this.setState(newState)
    
    return newState.nameInvalid || newState.emailInvalid || newState.passwordInvalid || newState.passwordConfirmationInvalid
  }

  submit = () => {
    const { name, email, password, image } = this.state
    const { isEdit } = this.props

    if(!this.formInvalid()) {
      const request = isEdit ? userService.edit : userService.create
  
      userService.signUpRequest = request
  
      userService.signUpRequest(email, name, password).then(result => {
        this.props.onSubmit(email, password)

        if(image) {
          userService.uploadUserImage(image.uri)
        }
      }).catch(err => {
        if(err.response.status === 400){
          this.setState({ emailInvalid: true, invalidMailMessage: 'Email já cadastrado' })
        }
      })
    }
  }

  handleName = name => {
    this.setState({ name })
  }
  
  handleEmail = email => {
    this.setState({ email })
  }

  handlePassword = password => {
    this.setState({ password })
  }

  handlePasswordConfirmation = passwordConfirmation => {
    this.setState({ passwordConfirmation })
  }

  handlePressImageButton = () => {
    ImagePicker.showImagePicker(options, (response) => {
    
      if (!response.didCancel && !response.error) {
        const source = { uri: response.uri }
    
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data }
    
        this.setState({
          image: source,
        })
      }
    })
  }

  render() {
    const { image, name, nameInvalid, email, emailInvalid, password, passwordInvalid, passwordConfirmation, passwordConfirmationInvalid, invalidMailMessage } = this.state
    const { isEdit } = this.props

    return (
      <View style={styles.wrapper}>
        <View style={{ flex: 1, marginTop: 30 }}>
          <Input 
            onChangeText={this.handleName} 
            label={nameInvalid ? "Nome inválido" : "Nome"}
            value={name}
            invalid={nameInvalid}
          />

          <Input 
            onChangeText={this.handleEmail} 
            label={emailInvalid ? invalidMailMessage : "Email"}
            value={email}
            autoCapitalize="none"
            invalid={emailInvalid}
          />

          <Input 
            onChangeText={this.handlePassword} 
            label={passwordInvalid ? "Senha inválida" : "Senha"}
            value={password}  
            autoCapitalize="none"
            invalid={passwordInvalid}
            secureTextEntry
          />

          <Input 
            onChangeText={this.handlePasswordConfirmation} 
            label={passwordConfirmationInvalid ? "Confirmação de Senha inválida" : "Confirmação de Senha"}
            value={passwordConfirmation}
            autoCapitalize="none"
            invalid={passwordConfirmationInvalid}
            secureTextEntry
          />
        </View>
        
        { isEdit && 
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
            { image 
              ? <TouchableOpacity onPress={this.handlePressImageButton}>
                  <Image source={image} style={{ alignSelf: 'center', height: 100, width: 100, borderRadius: 50, borderColor: '#ddd', borderWidth: 2 }} />
                </TouchableOpacity>
              : <DBButton style={[styles.button]} onPress={this.handlePressImageButton}>
                  <Text style={{ fontSize: 16, color: '#fff', textAlign: 'center', fontWeight: 'bold' }}> ESCOLHER IMAGEM DE PERFIL </Text>
                </DBButton>
            }
          </View>
        }
        
        <DBButton style={styles.button} onPress={this.submit}>
          <Text style={styles.buttonText}>{ isEdit ? 'SALVAR' : 'CADASTRAR' }</Text>
        </DBButton>
      </View>
    )
  }
}