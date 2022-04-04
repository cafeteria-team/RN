import {StyleSheet, Dimensions} from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  top: {
    flex: 1,
    marginTop: height * 0.038,
    marginHorizontal: width * 0.044, // [22 / 428 * 0.96]
    borderBottomWidth: 1,
    // width: width * 0.912,
  },
  bottom: {
    flex: 2,
    marginTop: height * 0.028,
    marginHorizontal: width * 0.044,
  },
  hello: {},
});
