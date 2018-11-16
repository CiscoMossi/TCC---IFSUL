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
    bottom: 50,
    left: '50%',
    transform: [{ translateX: -25 }] 
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
  buttonOptions: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: 75, 
    height: 25,
    left: -15,
    top: 25,
    opacity: 0,
  },
  visibleButtonOptions: {
    top: -10, 
    opacity: 1
  },
  buttonOption: { 
    maxWidth: 25, 
    borderRadius: 15 
  },
})