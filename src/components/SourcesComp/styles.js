import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#4a90e2',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  resultBox: {
    marginTop: 20,
  },
  resourceCategory: {
    marginBottom: 15,
  },
  categoryTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  resourceLink: {
    color: '#007bff',
    marginLeft: 10,
    marginBottom: 5,
  },
});
