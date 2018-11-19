import { StyleSheet, Dimensions } from 'react-native'

const { height } = Dimensions.get('window')
const isIphoneXOrBigger = height >= 812

export default StyleSheet.create({
  wrapper: { 
    flex: 1, 
    padding: 30, 
    paddingTop: 50,
  },
  image: { 
    alignSelf: 'center' 
  },
  inputStyle: { 
    marginBottom: 30, 
    flex: 0,
  },
  labelStyle: { 
    color: '#8E39AA', 
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
  },
  linkText: { 
    color: '#8E39AA', 
    textAlign: 'center', 
    textDecorationLine: 'underline', 
    textDecorationColor: '#8E39AA', 
  },
})