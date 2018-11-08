import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  card: { 
    flex: 1, 
    borderRadius: 15, 
    maxHeight: 200, 
    backgroundColor: 'white', 
    padding: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 3,
    shadowRadius: 2,
    shadowOpacity: 0.4,
  },
  content: { 
    flex: 1 
  },
  textContent: { 
    fontSize: 16,
  },
  options: { 
    flexShrink: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-around',
  },
  option: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  optionValue: { 
    marginLeft: 10,
    textAlign: 'center' 
  },
})