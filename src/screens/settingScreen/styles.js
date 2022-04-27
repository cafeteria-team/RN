import {StyleSheet, Dimensions} from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  survey: {
    marginTop: 40,
  },
  servey_content: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 60,
  },
  content: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  content_img: {
    width: 26,
    height: 26,
    marginRight: 10,
  },
  content_text: {
    color: 'black',
    fontSize: 16,
  },
});
