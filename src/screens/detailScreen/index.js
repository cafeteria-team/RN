import React, {useEffect, useState} from 'react';
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
} from 'react-native';
import styles from './style';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

function DetailScreen({navigation, route}) {
  // console.log(route.params.item);
  const getStoreInfo = route.params.item;
  const getMenuArr = getStoreInfo.store_menu;
  // console.log(getMenuArr);
  console.log(navigation);
  console.log(route);

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
      <ScrollView style={{backgroundColor: 'black'}}>
        <Image
          source={{
            uri: 'https://user-images.githubusercontent.com/66461799/128815117-476f9059-6c42-4392-9b07-e72e4a44f8a9.png',
          }}
          style={styles.info_img}
        />
        {/* <View style={{width: width}}>
          {newArr.map((item, index) => {
            return <Text key={index}>{item}</Text>;
          })}
        </View> */}
        <View style={styles.store_info_box}>
          <Text style={styles.store_name}>행복식당</Text>
          <View style={styles.store_lcation}>
            <Text>서울 금천구 가산동</Text>
            <Text>지도보기</Text>
          </View>
          <View style={styles.store_menu}>
            <View style={styles.store_menu_title}>
              <Text>오늘의 메뉴</Text>
            </View>
            <View style={styles.store_menu_list}>
              <Text>메뉴</Text>
              <Text>메뉴</Text>
              <Text>메뉴</Text>
            </View>
          </View>
        </View>
        <DashLine />
        <View style={styles.store_service_box}>
          <View style={styles.store_service_title}>
            <Text>편의시설 및 서비스</Text>
          </View>
          <View style={styles.store_service_list}>
            <Text>토스트</Text>
            <Text>토스트</Text>
            <Text>토스트</Text>
          </View>
        </View>
        <DashLine />
        <View style={styles.store_price_box}>
          <View style={styles.store_price_title}>
            <Text>요금정보</Text>
          </View>
          <View style={styles.store_price_list}>
            <Text>1회</Text>
            <Text>1회</Text>
            <Text>1회</Text>
            <Text>1회</Text>
          </View>
        </View>
        <DashLine />
        <View style={styles.store_notice_box}>
          <View style={styles.store_notice_title}>
            <Text>공지사항</Text>
          </View>
          <View style={styles.store_notice_comment}>
            <Text>안녕하세요~ 놀러오세요. 맛있습니다요~</Text>
          </View>
        </View>
        <DashLine />
        <View style={styles.store_map_box}>
          <View style={styles.store_map_title}>
            <Text>찾아오시는 길</Text>
          </View>
          <View style={styles.store_map_image}>
            <Text>지도</Text>
          </View>
          <View style={styles.store_map_location}>
            <Text>서울 금천구 가산동</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default DetailScreen;
