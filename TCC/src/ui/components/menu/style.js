import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: { 
    borderTopColor: 'rgba(221, 221, 221, 0.08)',
    borderTopWidth: 2,
    position: 'absolute', 
    bottom: 0, 
    minHeight: 55, 
    width: '100%', 
    backgroundColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
  },
  option: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  active: {
    color: 'red'
  }
})