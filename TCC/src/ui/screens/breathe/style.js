import { StyleSheet, Dimensions } from 'react-native'

let { width } = Dimensions.get('window')

const ballSize = width*.7

export default StyleSheet.create({
  wrapper: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  ballWrapper: {
    flex: 3, 
    paddingTop: 40,
  },
  ball: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 3,
    shadowRadius: 2,
    shadowOpacity: 0.4,
    borderRadius: 600, 
    width: ballSize, 
    height: ballSize,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: { 
    marginBottom: 20, 
    fontSize: 20,
    textAlignVertical: 'center'
  },
  actionText: { 
    fontWeight: 'bold', 
    fontSize: 25, 
    color: '#fff' 
  },
})