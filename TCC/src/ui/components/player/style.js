import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  wrapper: { 
    flexDirection: "row", 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  percentage: { 
    width: 250, 
    height: 20, 
    borderRadius: 10, 
    marginRight: 20, 
    backgroundColor: '#8E39AA', 
    padding: 8
  },
  innerPercentage: { 
    flex: 1, 
    width: '50%', 
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6, 
    justifyContent: 'center', 
    backgroundColor: '#ddd' 
  },
  percentagePoint: { 
    width: 15, 
    height: 15, 
    marginRight: -10, 
    borderRadius: 7.5, 
    elevation: 3,
    backgroundColor: '#DDDDDD', 
    alignSelf: 'flex-end' 
  },
  playButton: { 
    width: 50, 
    height: 50, 
    borderRadius: 25, 
    backgroundColor:'purple', 
    alignItems: 'center', 
    justifyContent: 'center',
  }
})