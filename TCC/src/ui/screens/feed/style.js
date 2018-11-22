import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  lastItem: { 
    marginBottom: 25 
  },
  modal: { 
    flex: 1,
    backgroundColor: '#fff', 
    borderRadius: 20,
    overflow: 'hidden',
    paddingTop: 45
  },
  icon: { 
    width: 40,
    alignSelf: 'flex-end'
  },
  back: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1,
    height: 50,
    width: 50,
    padding: 10
  },
})