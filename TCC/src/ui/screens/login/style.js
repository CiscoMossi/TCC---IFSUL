import { StyleSheet, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')
const isIphoneXOrBigger = height >= 812
const small = width < 375

export default StyleSheet.create({
  wrapper: { 
    flex: 1,
    padding: small ? 15 : 30, 
    paddingTop: small ? 20 : 50,
    backgroundColor: '#e8e8e8'
  },
  image: { 
    alignSelf: 'center',
    maxHeight: '40%',
    flexShrink: 1,
  },
  inputStyle: { 
    marginBottom: small ? 10 : 30, 
    flex: 0,
  },
  labelStyle: { 
    color: '#8E39AA', 
    fontSize: small ? 14 : 18,
  },
  button: { 
    borderRadius: 15, 
    marginTop: 20, 
    flex: 1,    
    alignSelf: 'flex-end',
  },
  buttonText: { 
    color: '#fff', 
    fontSize: 18, 
    textAlign: 'center', 
    fontWeight: 'bold' 
  },
  modal: { 
    flex: 1,
    backgroundColor: '#fff', 
  },
  icon: { 
    marginTop: 10,
    marginLeft: 15, 
    width: 40,
  },
  back: {
    position: 'absolute',
    top: isIphoneXOrBigger ? 25 : 0,
    zIndex: 1,
    height: 50,
    width: 70
  },
  link: { 
    alignSelf: 'center', 
    marginVertical: 30, 
    flexShrink: 1,
  },
  linkText: { 
    color: '#8E39AA', 
    textAlign: 'center', 
    textDecorationLine: 'underline', 
    textDecorationColor: '#8E39AA', 
  },
})