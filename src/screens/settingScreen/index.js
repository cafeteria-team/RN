import React from 'react';
import {View, Text, Dimensions, TouchableOpacity, Image} from 'react-native';
import style from './style';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

function MoreScreen() {
  return (
    <View style={style.container}>
      <View style={style.top}>
        <Text style={{fontSize: 21, color: '#000000'}}>
          좋구내 이용 중{'\n'}궁금하신 점이 있으신가요?
        </Text>
        <TouchableOpacity>
          <Text>010-2390-0625</Text>
        </TouchableOpacity>
      </View>
      <View style={style.bottom}>
        <Text style={{fontSize: 18, color: '#000000'}}>더보기</Text>
      </View>
    </View>
  );
}

export default MoreScreen;
