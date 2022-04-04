/*
  yarn add react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view @react-navigation/core @react-navigation/native @react-navigation/stack @react-navigation/drawer @react-navigation/bottom-tabs
*/

/**
 * yarn add react-native-device-info
 * 홈 화면으로 들어가기 전에 deviceId를 활용하여 설문조사 진행
 * 설문조사를 진행한 로그가
 * 있으면 -> 홈화면
 * 없으면 -> 설문조사 화면 랜딩 및 조사 진행 후 홈 화면으로 이동
 */

import * as React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src/routers/tabNavigator';
import StackNavigator from './src/routers/stackNavigator';
import DeviceInfo from 'react-native-device-info';

// initialRouteName : 설문조사하기 전, 후로 조건문 사용 필요
// 조건 : android_ID or apple_ID

function App() {
  const uniqueId = DeviceInfo.getUniqueId();
  // console.log(uniqueId);

  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <StackNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
