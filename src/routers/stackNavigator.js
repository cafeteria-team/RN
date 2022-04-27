import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabStackScreen from './tabNavigator';
import DetailScreen from '../screens/detailScreen';
import NoticeScreen from '../screens/noticeScreen';
import TermsScreen from '../screens/termsScreen';
import PushScreen from '../screens/pushScreen';
import EventScreen from '../screens/eventScreen';

// 디테일, 지도 화면에서 탭바 없애기
// https://reactnavigation.org/docs/hiding-tabbar-in-screens/

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="TabStackScreen"
        component={TabStackScreen}
        options={{}}
      />
      <Stack.Screen name="detail" component={DetailScreen} options={{}} />
      <Stack.Screen
        name="notice"
        component={NoticeScreen}
        options={{
          headerShown: true,
          title: '공지사항',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="push"
        component={PushScreen}
        options={{
          headerShown: true,
          title: '푸시알림',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="event"
        component={EventScreen}
        options={{
          headerShown: true,
          title: '이벤트',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="terms"
        component={TermsScreen}
        options={{
          headerShown: true,
          title: '이용약관',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}
