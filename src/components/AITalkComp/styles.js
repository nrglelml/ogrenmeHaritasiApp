import {StyleSheet, Dimensions} from 'react-native';

const winWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: winWidth * 0.04,
    marginBottom: winWidth * 0.08,
  },
  header: {
    color: '#595959',
    fontSize: winWidth * 0.062,
    fontWeight: 'bold',
    marginBottom: winWidth * 0.03,
    textAlign: 'center',
  },
  featuresContainer: {
    backgroundColor: '#fff',
    padding: winWidth * 0.04,
    borderRadius: winWidth * 0.062,
    marginBottom: winWidth * 0.07,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: winWidth * 0.062,
    shadowRadius: winWidth * 0.062,
    elevation: winWidth * 0.062,
  },
  featuresTitle: {
    color: '#595959',
    fontSize: winWidth * 0.045,
    fontWeight: 'bold',
    marginBottom: winWidth * 0.03,
  },
  featuresItem: {
    fontSize: winWidth * 0.039,
    marginBottom: winWidth * 0.02,
    color: '#555',
  },
  chatContainer: {
    flex: 1,
    marginBottom: winWidth * 0.04,
  },
  chatContent: {
    paddingVertical: winWidth * 0.02,
  },
  aiMessage: {
    backgroundColor: '#d1e7dd',
    padding: winWidth * 0.02,
    borderRadius: winWidth * 0.03,
    marginBottom: winWidth * 0.02,
    alignSelf: 'flex-start',
    maxWidth: '80%',
  },
  userMessage: {
    backgroundColor: '#f8d7da',
    padding: winWidth * 0.03,
    borderRadius: winWidth * 0.03,
    marginBottom: winWidth * 0.02,
    alignSelf: 'flex-end',
    maxWidth: '80%',
  },
  messageText: {
    fontSize: winWidth * 0.038,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingVertical: winWidth * 0.03,
    paddingHorizontal: winWidth * 0.03,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: winWidth * 0.05,
    paddingHorizontal: winWidth * 0.03,
    fontSize: winWidth * 0.04,
    height: winWidth * 0.1,
    fontColor:'#000',
    marginRight: winWidth * 0.03,
  },
  sendButton: {
    backgroundColor: '#007bff',
    paddingVertical: winWidth * 0.02,
    paddingHorizontal: winWidth * 0.05,
    borderRadius: winWidth * 0.05,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: winWidth * 0.04,
    fontWeight: 'bold',
  },
});

export default styles;
