import { StyleSheet, Dimensions } from 'react-native'

const { height } = Dimensions.get('window')
const isIphoneXOrBigger = height >= 812

export default StyleSheet.create({
  modal: { 
    flex: 1,
    backgroundColor: '#e8e8e8', 
    paddingHorizontal: 15,
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
})