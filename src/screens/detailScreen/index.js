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
            <Text style={styles.store_name}>????????????</Text>
            <View style={styles.store_lcation}>
              <Image
                style={{width: 20, height: 20, marginRight: 4}}
                source={require('../../assets/icons/drawable-hdpi/location18.png')}
              />
              <Text style={{fontSize: 14, color: 'black'}}>
                ?????? ????????? ?????????{' '}
              </Text>
              <TouchableOpacity
                onPress={() => Linking.openURL('https://map.naver.com/v5/')}
                style={{justifyContent: 'flex-end'}}>
                <Text style={{fontSize: 12, color: '#3B82F6'}}>
                  ???????????? &#62;
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
                  ????????? ??????
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
              <Text style={{color: 'black'}}>???????????? ??? ?????????</Text>
            </View>
            <View style={styles.store_service_list}>
              <View style={styles.store_map_title_item}>
                <Image
                  style={{width: 40, height: 40, marginRight: 4}}
                  source={require('../../assets/icons/drawable-hdpi/happy.png')}
                />
                <Text style={{color: 'black'}}>??????</Text>
              </View>
              <View style={styles.store_map_title_item}>
                <Image
                  style={{width: 40, height: 40, marginRight: 4}}
                  source={require('../../assets/icons/drawable-hdpi/happy.png')}
                />
                <Text style={{color: 'black'}}>?????????</Text>
              </View>
              <View style={styles.store_map_title_item}>
                <Image
                  style={{width: 40, height: 40, marginRight: 4}}
                  source={require('../../assets/icons/drawable-hdpi/happy.png')}
                />
                <Text style={{color: 'black'}}>????????????</Text>
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
              <Text style={{color: 'black'}}>????????????</Text>
            </View>
            <View style={styles.store_price_list}>
              <View style={styles.store_price_list_type}>
                <Text>?????? 1???</Text>
                <Text>4,000???</Text>
              </View>
              <View style={styles.store_price_list_type}>
                <Text>?????? 10???</Text>
                <Text>40,000???</Text>
              </View>
              <View style={styles.store_price_list_type}>
                <Text>?????? 30???</Text>
                <Text>120,000???</Text>
              </View>
              <View style={styles.store_price_list_type}>
                <Text>?????? 50???</Text>
                <Text>200,000???</Text>
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
              <Text>????????????</Text>
            </View>
            <View style={styles.store_notice_comment}>
              <Text>???????????????~ ???????????????. ??????????????????~</Text>
            </View>
          </View>
          {/* <DashLine />
          <View style={styles.store_map_box}>
            <View style={styles.store_map_title}>
              <Image
                style={{width: 20, height: 20, marginRight: 4}}
                source={require('../../assets/icons/drawable-hdpi/happy.png')}
              />
              <Text>??????????????? ???</Text>
            </View>
            <View style={styles.store_map_image}>
              <Text>??????</Text>
            </View>
            <View style={styles.store_map_location}>
              <Text>?????? ????????? ?????????</Text>
            </View>
          </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default DetailScreen;
