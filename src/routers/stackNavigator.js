import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabStackScreen from './tabNavigator';
import DetailScreen from '../screens/detailScreen';

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
    </Stack.Navigator>
  );
}
