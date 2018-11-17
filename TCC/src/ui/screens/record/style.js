import { StyleSheet, Dimensions } from 'react-native'

let { width } = Dimensions.get('screen')

width -= 50

export default StyleSheet.create({
  wrapper: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
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
    width, 
    height: width,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20
  },
  text: { 
    fontSize: 20 
  },
  actionButtonsContainer: { 
    width,
    marginTop: 20,
    flexDirection: 'row', 
    justifyContent: 'space-around', 
  },
  actionButtonWrapper: { 
    padding: 15, 
    borderRadius: 7, 
  },
  actionButtonText: { 
    fontWeight: 'bold', 
    fontSize: 18, 
    color: '#fff', 
  },
})