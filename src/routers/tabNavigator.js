import React from 'react';
import {View, ImageBackground, Text, Platform, Dimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeStackScreen,
  LikeStackScreen,
  SettingStackScreen,
} from './stackNavigator';
import HomeScreen from '../screens/homeScreen';
import LikeScreen from '../screens/likeScreen';
import SettingScreen from '../screens/settingScreen';

const Tab = createBottomTabNavigator();

// 디테일, 지도 화면에서 탭바 없애기
// https://reactnavigation.org/docs/hiding-tabbar-in-screens/

function TabStackScreen() {
  return (
    <Tab.Navigator
      // backBehavior="initialRoute"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          height: Platform.select({
            ios: 70,
            android: 60,
          }),
        },
      }}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                // width: Dimensions.get('window').width / 5 - 20,
                height: 60,
                top: Platform.select({
                  ios: 10,
                  android: 0,
                }),
              }}>
              <ImageBackground
                source={
                  focused
                    ? require('../assets/icons/drawable-hdpi/house-color.png')
                    : require('../assets/icons/drawable-hdpi/house.png')
                }
                // resizeMode="contain"
                style={{
                  width: 26,
                  height: 26,
                }}
              />
              <Text
                style={{
                  color: focused ? '#36435E' : '#999999',
                  fontSize: 12,
                  // fontFamily: 'notokr-medium',
                }}>
                홈
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="like"
        component={LikeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                // width: Dimensions.get('window').width / 5 - 20,
                // backgroundColor: 'red',
                height: 60,
                top: Platform.select({
                  ios: 10,
                  android: 0,
                }),
              }}>
              <ImageBackground
                source={
                  focused
                    ? require('../assets/icons/drawable-hdpi/like-color.png')
                    : require('../assets/icons/drawable-hdpi/like.png')
                }
                // resizeMode="contain"
                style={{
                  width: 26,
                  height: 26,
                }}
              />
              <Text
                style={{
                  color: focused ? '#36435E' : '#999999',
                  fontSize: 12,
                  // fontFamily: 'notokr-medium',
                }}>
                좋아요
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="more"
        component={SettingScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                // width: Dimensions.get('window').width / 5 - 20,
                // backgroundColor: 'red',
                height: 60,
                top: Platform.select({
                  ios: 10,
                  android: 0,
                }),
              }}>
              <ImageBackground
                source={
                  focused
                    ? require('../assets/icons/drawable-hdpi/category-color.png')
                    : require('../assets/icons/drawable-hdpi/category.png')
                }
                // resizeMode="contain"
                style={{
                  width: 26,
                  height: 26,
                }}
              />
              <Text
                style={{
                  color: focused ? '#36435E' : '#999999',
                  fontSize: 12,
                  // fontFamily: 'notokr-medium',
                }}>
                설정
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabStackScreen;
