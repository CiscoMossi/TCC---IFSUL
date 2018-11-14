import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    paddingTop: 22,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#dddddd',
  },
  label: {
    fontSize: 16,
    color: '#000',
    position: 'absolute',
    left: 0,
  },
  input: {
    fontSize: 18,
    padding: 0,
    color: '#000',
    flex: 1,
    paddingVertical: 4,
  },
  inactiveInput: {
    fontSize: 18,
    padding: 0,
    color: '#e8e8e8',
    flex: 1,
    paddingVertical: 4,
  },
  feedbackMessages: {
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    flex: 1,
    marginTop: 12,
  },
})