import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  Dimensions,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
} from 'react-native';
import styles from './style';
import data from '../../dummyData.json';
import style from './style';
import MenuList from '../../components/menuList';
import BottomSheet from '../../components/bottomSheet';

/**
 * XD width : 428, height: 926
 */
const height = Dimensions.get('window').height; // 836
const width = Dimensions.get('window').width; // 411 (0.96)

function HomeScreen({navigation}) {
  const getData = data.all.guro;
  const [modalVisible, setModalVisible] = useState(false);
  // console.log(getData[0].store_menu);

  const test = getData[0].store_menu;
  // console.log(test);

  const [isPress, setIsPress] = useState(false);

  useEffect(() => {
    setIsPress(false);
  });

  function onPress() {
    console.log('Bottom modal btn');
    setModalVisible(!modalVisible);
  }

  function bottomMargin(arr, index) {
    if (index !== arr.length - 1) {
      return styles.store_info;
    } else {
      if (Platform.OS === 'android') {
        return styles.store_info_end_AOS;
      } else {
        return styles.store_infor_end_iOS;
      }
    }
  }

  const renderItem = ({item, index}) => {
    const service = item.store_service;

    return (
      <View
        style={
          // index !== getData.length - 1
          //   ? styles.store_info
          //   : styles.store_info_end
          bottomMargin(getData, index)
        }>
        {/* <View style={styles.store_info}> */}
        {Platform.OS === 'android' ? (
          <TouchableNativeFeedback
            // activeOpacity={0.6} // default : 0.2]
            // onPressIn={() => setIsPress(true)}
            onPress={() => navigation.navigate('detail', {item})}>
            <View>
              <Image
                source={{
                  uri: 'https://user-images.githubusercontent.com/66461799/128815117-476f9059-6c42-4392-9b07-e72e4a44f8a9.png',
                }}
                style={style.info_img}
                imageStyle={{borderTopLeftRadius: 20, borderTopRightRadius: 20}}
              />
              <View
                style={
                  isPress === false ? style.info_list : style.info_list_clicked
                }>
                <View style={style.list_store_name}>
                  <Text
                    style={{fontSize: 21, fontWeight: 'bold', color: 'black'}}>
                    {item.store_name}
                  </Text>
                </View>
                <View style={style.list_menu}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#EF4444',
                      marginBottom: height * 0.009,
                    }}>
                    오늘의 메뉴
                  </Text>
                  <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    <MenuList menu={item.store_menu} />
                  </View>
                </View>
                <View style={style.list_other}>
                  {/* <Text style={{fontSize: 10, color: '#292929'}}> */}
                  {/* {item.store_service} */}
                  <View style={{flexDirection: 'row'}}>
                    {/* <Text
                      style={{
                        color: '#3B82F6',
                        backgroundColor: '#D7E6FD',
                        padding: 5,
                      }}>
                      {service.map((v, i) => {
                        return '#' + v;
                      })}
                    </Text> */}
                    {service.map((value, index) => {
                      return (
                        <Text
                          key={index}
                          style={{
                            color: '#3B82F6',
                            backgroundColor: '#D7E6FD',
                            paddingVertical: 4,
                            paddingHorizontal: 6,
                            marginRight: 6,
                            borderRadius: 4,
                          }}>
                          #{value}
                        </Text>
                      );
                    })}
                  </View>
                  {/* </Text> */}
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text
                      style={{fontSize: 12, color: 'grey', marginRight: 10}}>
                      식권
                    </Text>
                    <Text style={{fontSize: 16, color: '#292929'}}>
                      ₩
                      {String(item.price.one).replace(
                        /\B(?=(\d{3})+(?!\d))/g,
                        ',',
                      )}
                      원
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableNativeFeedback>
        ) : (
          <TouchableOpacity>
            <Text>iOS</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.location}>
        <Text style={style.location_title}>현재위치</Text>
        <View style={style.location_contents}>
          <Image
            style={{width: 20, height: 20}}
            source={require('../../assets/icons/drawable-hdpi/location18.png')}
          />
          <Text style={style.location_content_name}>구로구</Text>
          <TouchableOpacity onPress={() => onPress()}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../../assets/icons/drawable-hdpi/down.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={getData}
        keyExtractor={item => item.store_name}
        renderItem={item => renderItem(item)}
        showsVerticalScrollIndicator={false}
      />
      <BottomSheet
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;
