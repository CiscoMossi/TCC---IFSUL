import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  userDetailWrapper: { 
    flexShrink: 1, 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingHorizontal: 20, 
    paddingVertical: 10, 
    borderBottomWidth: 1, 
    borderBottomColor: '#aaa' 
  },
  userImage: { 
    flex: 1,
    maxWidth: 75, 
    maxHeight: 75, 
    borderRadius: 100, 
    borderColor: '#aaa', 
    borderWidth: 1 
  },
  userName: { 
    flex: 1,
    fontSize: 20, 
    marginLeft: 30 
  },
  feedWrapper: { 
    flex: 1, 
    paddingVertical: 20 
  },
})