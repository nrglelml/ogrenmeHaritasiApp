import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 40,
    color: '#333',
    textAlign: 'center',
  },
  downloadButton: {
    backgroundColor: '#0057ff',
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginVertical: 12,
    width: '100%',
    alignItems: 'center',
  },
  downloadText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});
