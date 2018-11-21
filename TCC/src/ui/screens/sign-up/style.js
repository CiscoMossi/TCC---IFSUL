import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')
const small = width < 375

export default StyleSheet.create({
  wrapper: { 
    height,
    padding: 30, 
    paddingTop: 50,
  },
  inputStyle: { 
    marginBottom: 30, 
    flex: 0,
  },
  labelStyle: { 
    color: '#8E39AA', 
    fontSize: small ? 14 : 18,
  },
  button: { 
    borderRadius: 15, 
    marginTop: 20, 
    flex: 1 
  },
  buttonText: { 
    color: '#fff', 
    fontSize: 18, 
    textAlign: 'center', 
    fontWeight: 'bold' 
  },
})