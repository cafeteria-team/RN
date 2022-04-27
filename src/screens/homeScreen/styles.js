import {StyleSheet, Dimensions} from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  location: {
    marginBottom: 12,
    flexDirection: 'column',
  },
  location_title: {
    fontSize: 12,
    color: 'black',
    marginTop: 18,
    marginLeft: 20,
    marginBottom: 4,
  },
  location_contents: {
    flexDirection: 'row',
    marginLeft: 20,
    alignItems: 'flex-end',
  },
  location_content_icon: {
    marginRight: 4,
  },
  location_content_name: {
    fontSize: 18,
    color: 'black',
    marginRight: 2,
  },
  location_content_btn: {},
  store_info: {
    height: height * 0.72,
    marginHorizontal: 20,
    marginBottom: 32,
  },
  store_info_end_AOS: {
    height: height * 0.72,
    marginHorizontal: 20,
    marginBottom: 92,
  },
  store_info_end_iOS: {
    height: height * 0.72,
    marginHorizontal: 20,
    marginBottom: 102,
  },
  info_img: {
    height: height * 0.349,
    resizeMode: 'cover',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  info_list: {
    height: height * 0.369,
    paddingVertical: height * 0.016,
    paddingHorizontal: width * 0.044,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#FFFFFF',
    elevation: 10, // shadow
  },
  info_list_clicked: {
    height: height * 0.369,
    paddingVertical: height * 0.016,
    paddingHorizontal: width * 0.044,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#FFFFFF',
    // elevation: 20,
  },
  list_store_name: {
    marginBottom: height * 0.013,
  },
  list_menu: {
    height: height * 0.2,
    borderRadius: 8,
    paddingVertical: height * 0.017,
    paddingHorizontal: width * 0.044,
    backgroundColor: '#FAFAFA',
    marginBottom: height * 0.02,
  },
  list_other: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
