import { StyleSheet, Dimensions } from 'react-native'

const { height } = Dimensions.get('window')
const isIphoneXOrBigger = height >= 812

export default StyleSheet.create({
  userImage: {
    flexShrink: 1,
    width: 50, 
    height: 50, 
    borderRadius: 25, 
    borderColor: '#aaa', 
    borderWidth: 1 
  },
  userName: { 
    flex: 1, 
    fontSize: 18, 
    marginLeft: 20, 
  },
  inputWrapper: { 
    elevation: 3,
    borderRadius: 50, 
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  input: { 
    color: '#fff', 
    fontSize: 18 
  },
  searchResultWrapper: { 
    flex: 1, 
    justifyContent: 'space-around', 
    backgroundColor: '#fff', 
    borderBottomWidth: 1, 
    borderBottomColor: '#bbb', 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 10 
  },
  topSide: { 
    flexShrink: 1, 
    paddingVertical: 25 
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
})