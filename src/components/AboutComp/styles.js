import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f9fa',
    flexGrow: 1,
  },
  kimizContainer: {
    marginBottom: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#222',
  },
  description: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius:width*0.2,
    marginTop: 20,
  },
  techSection: {
    paddingVertical: 30,
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#1a1a1a',
  },
  techCardWrapper: {
    gap: 20,
  },
  techCard: {
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
  },
  techCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0d253f',
    marginBottom: 6,
  },
  techCardText: {
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
  },
});

export default styles;