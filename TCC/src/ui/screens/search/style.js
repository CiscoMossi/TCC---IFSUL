import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  userImage: {
    flexShrink: 1,
    maxWidth: 50, 
    maxHeight: 50, 
    borderRadius: 100, 
    borderColor: '#aaa', 
    borderWidth: 1 
  },
  userName: { 
    flex: 1, 
    fontSize: 18, 
    marginLeft: 20, 
  },
  inputWrapper: { 
    elevation: 3,
    borderRadius: 50, 
    paddingHorizontal: 20 
  },
  input: { 
    color: '#fff', 
    fontSize: 18 
  },
  searchResultWrapper: { 
    flex: 1, 
    justifyContent: 'space-around', 
    backgroundColor: '#fff', 
    borderBottomWidth: 1, 
    borderBottomColor: '#bbb', 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 10 
  },
  topSide: { 
    flexShrink: 1, 
    paddingVertical: 25 
  },
})