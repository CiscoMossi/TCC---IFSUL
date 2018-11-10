import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  wrapper: {
    borderTopColor: 'rgb(221, 221, 221)',
    borderTopWidth: 2,
    position: 'absolute', 
    bottom: 0, 
    minHeight: 55, 
    width: '100%', 
    backgroundColor: '#e8e8e8',
    paddingVertical: 10,
    alignItems: 'center'
  },
  options: { 
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  option: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  active: {
    color: '#D31A82'
  },
  buttonWrapper: {
    position: 'absolute',
    top: -30,
  },
  button: {
    elevation: 3,
    zIndex: 200,
    padding: 15,
    maxHeight: 50,
    maxWidth: 50,
    borderRadius: 100, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContent: { 
    fontSize: 35, 
    color: '#FFFFFF', 
    transform: [{ translateY: -2 }] 
  },
})