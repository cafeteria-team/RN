import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Dimensions,
  Image,
  Linking,
  Alert,
  Button,
} from 'react-native';
import styles from './style';
import MenuList from '../../components/menuList';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

function DetailScreen({navigation, route}) {
  const handlePress = useCallback(async () => {
    // Open the custom settings if the app has one
    // await Linking.openSettings();
    await Linking.canOpenURL('https://www.naver.com/');
  });

  console.log(route.params.item);
  const getStoreInfo = route.params.item;
  const getMenuArr = getStoreInfo.store_menu;
  console.log(getMenuArr);
  // console.log(navigation);
  // console.log(route);

  const test = new Array();
  // console.log(test);

  let newArr = [];
  for (let i = 0; i < getMenuArr.length; i += 3) {
    newArr.push(getMenuArr.slice(i, i + 3));
  }
  // console.log(newArr.length);

  for (let j = 0; j < newArr.length; j++) {
    // console.log(newArr[j]);
  }

  function DashLine() {
    return (
      <View style={styles.dash_line_parents}>
        <View style={styles.dash_line_children} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{}}>
        <Image
          source={{
            uri: 'https://user-images.githubusercontent.com/66461799/128815117-476f9059-6c42-4392-9b07-e72e4a44f8a9.png',
          }}
          style={styles.info_img}
        />
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 10,
            left: 20,
          }}>
          <Text style={{fontSize: 32, fontWeight: 'bold'}}>&#60;</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{position: 'absolute', top: 20, right: 20}}>
          <Image
            style={{height: 30, width: 30}}
            source={require('../../assets/icons/drawable-hdpi/share.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{position: 'absolute', top: 20, right: 60}}>
          <Image
            style={{height: 30, width: 30}}
            source={require('../../assets/icons/drawable-hdpi/share.png')}
          />
        </TouchableOpacity>
        {/* <View style={{width: width}}>
          {newArr.map((item, index) => {
            return <Text key={index}>{item}</Text>;
          })}
        </View> */}
        <View style={{marginHorizontal: 20}}>
          <View style={styles.store_info_box}>
            <Text style={styles.store_name}>행복식당</Text>
            <View style={styles.store_lcation}>
              <Image
                style={{width: 20, height: 20, marginRight: 4}}
                source={require('../../assets/icons/drawable-hdpi/location18.png')}
              />
              <Text style={{fontSize: 14, color: 'black'}}>
                서울 금천구 가산동{' '}
              </Text>
              <TouchableOpacity
                onPress={() => Linking.openURL('https://map.naver.com/v5/')}
                style={{justifyContent: 'flex-end'}}>
                <Text style={{fontSize: 12, color: '#3B82F6'}}>
                  지도보기 &#62;
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.store_menu}>
              <View style={styles.store_menu_title}>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#EF4444',
                    marginBottom: height * 0.009,
                  }}>
                  오늘의 메뉴
                </Text>
                <Image
                  style={{width: 20, height: 20}}
                  source={require('../../assets/icons/drawable-hdpi/food.png')}
                />
              </View>
              <View style={styles.store_menu_list}>
                <MenuList menu={getMenuArr} />
              </View>
            </View>
          </View>
          <DashLine />
          <View style={styles.store_service_box}>
            <View style={styles.store_service_title}>
              <Image
                style={{width: 20, height: 20, marginRight: 4}}
                source={require('../../assets/icons/drawable-hdpi/happy.png')}
              />
              <Text style={{color: 'black'}}>편의시설 및 서비스</Text>
            </View>
            <View style={styles.store_service_list}>
              <View style={styles.store_map_title_item}>
                <Image
                  style={{width: 40, height: 40, marginRight: 4}}
                  source={require('../../assets/icons/drawable-hdpi/happy.png')}
                />
                <Text style={{color: 'black'}}>라면</Text>
              </View>
              <View style={styles.store_map_title_item}>
                <Image
                  style={{width: 40, height: 40, marginRight: 4}}
                  source={require('../../assets/icons/drawable-hdpi/happy.png')}
                />
                <Text style={{color: 'black'}}>토스트</Text>
              </View>
              <View style={styles.store_map_title_item}>
                <Image
                  style={{width: 40, height: 40, marginRight: 4}}
                  source={require('../../assets/icons/drawable-hdpi/happy.png')}
                />
                <Text style={{color: 'black'}}>요구르트</Text>
              </View>
            </View>
          </View>
          <DashLine />
          <View style={styles.store_price_box}>
            <View style={styles.store_price_title}>
              <Image
                style={{width: 20, height: 20, marginRight: 4}}
                source={require('../../assets/icons/drawable-hdpi/happy.png')}
              />
              <Text style={{color: 'black'}}>요금정보</Text>
            </View>
            <View style={styles.store_price_list}>
              <View style={styles.store_price_list_type}>
                <Text>식권 1장</Text>
                <Text>4,000원</Text>
              </View>
              <View style={styles.store_price_list_type}>
                <Text>식권 10장</Text>
                <Text>40,000원</Text>
              </View>
              <View style={styles.store_price_list_type}>
                <Text>식권 30장</Text>
                <Text>120,000원</Text>
              </View>
              <View style={styles.store_price_list_type}>
                <Text>식권 50장</Text>
                <Text>200,000원</Text>
              </View>
            </View>
          </View>
          <DashLine />
          <View style={styles.store_notice_box}>
            <View style={styles.store_notice_title}>
              <Image
                style={{width: 20, height: 20, marginRight: 4}}
                source={require('../../assets/icons/drawable-hdpi/happy.png')}
              />
              <Text>공지사항</Text>
            </View>
            <View style={styles.store_notice_comment}>
              <Text>안녕하세요~ 놀러오세요. 맛있습니다요~</Text>
            </View>
          </View>
          {/* <DashLine />
          <View style={styles.store_map_box}>
            <View style={styles.store_map_title}>
              <Image
                style={{width: 20, height: 20, marginRight: 4}}
                source={require('../../assets/icons/drawable-hdpi/happy.png')}
              />
              <Text>찾아오시는 길</Text>
            </View>
            <View style={styles.store_map_image}>
              <Text>지도</Text>
            </View>
            <View style={styles.store_map_location}>
              <Text>서울 금천구 가산동</Text>
            </View>
          </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default DetailScreen;
