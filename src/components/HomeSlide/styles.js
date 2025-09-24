import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 20,
    backgroundColor: '#F9F9F9',
  },

  // HERO
  heroSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //marginBottom: 10,
    flexWrap: 'wrap',
  },
  heroTextContainer: {
    flex: 1,
    paddingRight: 10,
    maxWidth: width > 600 ? '60%' : '100%',
  },
  heroTitle: {
    fontSize: 29,
    fontWeight: 'bold',
    color: '#1c2e40',
    marginBottom: 10,
  },
  heroDescription: {
    fontSize: 17,
    color: '#333',
    marginBottom: 15,
    
  },
  ctaButton: {
    backgroundColor: '#f1c40f',
    paddingVertical: 12,
    paddingHorizontal: 68,
    borderRadius: 10,
    alignSelf: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    alignSelf:'center',
    marginBottom: 30,
  },
  ctaButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 15,
  },
  heroImage: {
    flex: 1,
    width: width > 600 ? 300 : '80%',
    height: 180,
    marginTop: 15,
  },

  // FEATURES
  featuresSection: {
    flexDirection: 'column',
    gap: 15,
    marginBottom: 30,
  },
  featureBox: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
    alignItems: 'center',
  },
  featureIcon: {
    fontSize: 26,
    marginBottom: 10,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1c2e40',
    marginBottom: 5,
  },
  featureDescription: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },

  // STATS
  statsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#e8edef',
    borderRadius: 12,
    padding: 20,
    marginTop: 10,
  },
  statBox: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1c2e40',
  },
  statLabel: {
    fontSize: 13,
    color: '#666',
  },
});

export default styles;
