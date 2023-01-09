import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },

  wrapper: {
    padding: 24,
  },

  form: {
    position: 'absolute',
    flexDirection: 'row',
    left: 24,
    right: 24,
    top: -25,
  },

  input: {
    flex: 1,
    height: 54,
    padding: 16,
    backgroundColor: '#262626',
    borderRadius: 6,
    fontSize: 16,
    marginRight: 8,
    color: '#fdfcfe',
  },

  button: {
    width: 52,
    height: 52,
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 22,
  },

  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
    border: '1px solid #333333',
  },

  created: { flexDirection: 'row' },

  createdText: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 17,
    color: '#4EA8DE',
    marginRight: 8,
  },

  done: { flexDirection: 'row' },

  doneText: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 17,
    color: '#8284FA',
    marginRight: 8,
  },

  list: {
    marginTop: 24,
  },
});
