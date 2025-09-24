import {StyleSheet, Dimensions} from 'react-native';

const winWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 70, // TapBar için boşluk bırak
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#262625',
    height: winWidth * 0.17,
    borderTopLeftRadius: winWidth * 0.03,
    borderTopRightRadius: winWidth * 0.03,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: winWidth * 0.06,
    borderTopWidth: winWidth * 0.004,
    borderColor: '#e0e0e0',
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: winWidth * 0.06,
    height: winWidth * 0.06,
    resizeMode: 'contain',
  },
  startButton: {
    backgroundColor: '#5e5e5d',
    width: winWidth * 0.15,
    height: winWidth * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: winWidth * 1,
    elevation: winWidth * 0.5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: winWidth * 0.08,
    shadowRadius: winWidth * 3,
    marginTop: -40, 
  },
  startButtonText: {
    color: '#fff',
    fontSize: winWidth*0.043, 
    fontWeight: 'bold',
  },
});

export default styles;
