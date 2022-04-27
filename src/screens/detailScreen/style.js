import {StyleSheet, Dimensions} from 'react-native';

const height = Dimensions.get('window').height;
console.log(height);
const width = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    // paddingTop: StatusBar.currentHeight,
  },
  dash_line_parents: {
    height: 1,
    width: '100%',
    borderRadius: 1,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'dashed',
    zIndex: 0,
    marginVertical: 20,
  },
  dash_line_children: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: 1,
    backgroundColor: 'white',
    zIndex: 1,
  },
  store_info_box: {},
  store_name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    color: 'black',
  },
  store_lcation: {
    flexDirection: 'row',
  },
  store_menu: {
    // height: height * 0.22,
    borderRadius: 8,
    paddingVertical: height * 0.017,
    paddingHorizontal: width * 0.044,
    backgroundColor: '#FAFAFA',
    marginBottom: height * 0.02,
    marginTop: 20,
  },
  store_menu_title: {
    flexDirection: 'row',
  },
  store_menu_list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  store_service_box: {},
  store_service_title: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  store_service_list: {
    flexDirection: 'row',
  },
  store_map_title_item: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
  },
  store_price_box: {},
  store_price_title: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  store_price_list: {},
  store_price_list_type: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  store_notice_box: {
    marginBottom: 20,
  },
  store_notice_title: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  store_notice_comment: {},
  store_map_box: {},
  store_map_title: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  store_map_image: {},
  store_map_location: {},
  info_img: {
    height: height * 0.5, // (or 0.6)
    resizeMode: 'cover',
    borderColor: '#707070',
  },
  info_list: {
    height: height * 0.4,
    padding: 20,
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
    borderWidth: 1,
    // borderLeftWidth: 1,
    // borderRightWidth: 2,
    // borderBottomWidth: 2.5,
    // borderColor: '#707070',
  },
  list_name: {
    flex: 1,
    backgroundColor: 'peru',
  },
  list_menu: {
    flex: 2,
    borderRadius: 8,
    backgroundColor: '#FAFAFA',
  },
  list_other: {
    flex: 1,
    backgroundColor: 'peru',
  },

  nextbtn: {
    position: 'relative',
    width: width * 0.296,
    height: height * 0.165,
  },
  btnbox: {
    alignItems: 'center',
  },
  textbox: {
    position: 'absolute',
    top: '50%',
    transform: [{translateY: -11}],
  },
  btntext: {
    color: 'white',
    fontSize: 17,
  },
  custombtn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
