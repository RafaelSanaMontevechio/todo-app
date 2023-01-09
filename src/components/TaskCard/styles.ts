import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#262626',
    borderRadius: 8,
    height: 64,
    padding: 12,
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  task: {
    flex: 1,
    marginLeft: 10,
    marginRight: 8,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 15,
    color: '#F2F2F2',
  },

  closedTask: {
    flex: 1,
    marginLeft: 10,
    marginRight: 8,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 15,
    color: '#F2F2F2',
    textDecorationLine: 'line-through',
  },

  check: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },

  trash: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },

  trashImage: {
    width: 16,
    height: 16,
  },
});
