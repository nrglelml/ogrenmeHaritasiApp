import {StyleSheet, Dimensions} from 'react-native';
const winWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: winWidth * 0.07,
  },
  title: {
    fontSize: winWidth * 0.075,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: winWidth * 0.03,
  },
  subtitle: {
    fontSize: winWidth * 0.05,
    color: '#555',
    marginBottom: winWidth * 0.03,
  },
  faqContainer: {
    marginTop: winWidth * 0.03,
  },
  faqItem: {
    backgroundColor: '#e7f1ff',
    padding: winWidth * 0.04,
    borderRadius: winWidth * 0.03,
    marginBottom: winWidth * 0.03,
  },
  faqItemActive: {
    backgroundColor: '#cce4ff',
  },
  faqQuestion: {
    fontSize: winWidth * 0.05,
    fontWeight: 'bold',
    color: '#333',
  },
  faqAnswer: {
    fontSize: winWidth * 0.04,
    color: '#555',
    marginTop: winWidth * 0.03,
  },
});

export default styles;
