import {Dimensions, StyleSheet} from 'react-native';
const winWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#262625',
    paddingBottom: winWidth * 0.04,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: winWidth * 0.02,
  },
  grayCont: {
    backgroundColor: '#5e5e5d',
    width: winWidth * 0.72,
    height: winWidth * 0.25,
    borderTopRightRadius: winWidth * 0.7,
    borderEndEndRadius: winWidth * 0.7,
    marginTop: winWidth * 0.02,
  },
  user: {
    width: winWidth * 0.05,
    height: winWidth * 0.05,
    marginRight: winWidth * 0.03,
    marginLeft: winWidth * 0.04,
  },
  greetingView: {
    alignItems: 'center',
    marginTop: winWidth * 0.12,
    flexDirection: 'row',
  },
  greetingText: {
    color: 'white',
    fontSize: winWidth * 0.053,
    fontWeight: '480',
  },



});
export default styles;
