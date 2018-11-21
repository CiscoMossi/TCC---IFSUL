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
    minHeight: 50,
    minWidth: 50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  buttonContent: { 
    fontSize: 35, 
    color: '#FFFFFF', 
    transform: [{ translateY: -2 }],
    flexShrink: 1,
    textAlignVertical: 'center'
  },
  buttonOptions: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: 50, 
    height: 35,
    left: -20,
    top: 25,
    opacity: 0,
  },
  visibleButtonOptions: {
    top: -10, 
    opacity: 1
  },
  buttonOption: { 
    width: 35, 
    borderRadius: 30,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
})