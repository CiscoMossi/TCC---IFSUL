import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  card: { 
    marginVertical: 5,
    borderRadius: 15, 
    backgroundColor: 'white',
    paddingTop: 25,
    paddingBottom: 15,
    paddingHorizontal: 20,
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
    marginBottom: 20,
    alignItems: 'center'
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
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  optionValue: { 
    marginLeft: 10,
    textAlign: 'center' 
  },
  hangLoose: { 
    height: 35, 
    width: 35 
  },
  postInfoWrapper: { 
    flex: 1, 
    marginBottom: 5, 
    flexDirection: 'row', 
    justifyContent: 'space-between' 
  },
  userInfo: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-around' 
  },
  userImage: { 
    width: 50, 
    height: 50, 
    borderRadius: 100, 
    borderColor: '#ddd', 
    borderWidth: 1 
  },
  userName: { 
    marginLeft: 15, 
    fontSize: 18 
  },
})