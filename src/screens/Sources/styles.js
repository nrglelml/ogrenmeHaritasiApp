import {StyleSheet, Dimensions} from 'react-native';

const winWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: winWidth * 0.07,
  },
  tabBarContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: winWidth * 0.07,
    backgroundColor: '#fff',
  },
});
