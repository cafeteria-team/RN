import React from 'react';
import {View, Text, Dimensions, TouchableOpacity, Image} from 'react-native';
import styles from './styles';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

function MoreScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.survey}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
          좋구내는 여러분의 이야기가 필요해요!
        </Text>
        <Text style={{fontSize: 16, color: 'black', marginTop: 10}}>
          보다나은 서비스를 위해 노력하겠습니다.
        </Text>
        <View style={styles.servey_content}>
          <Image
            source={require('../../assets/icons/drawable-hdpi/message-edit.png')}
            // resizeMode="contain"
            style={styles.content_img}
          />
          <TouchableOpacity>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: 'grey'}}>
              설문조사 하러가기
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          height: 2,
          width: WIDTH - 40,
          backgroundColor: '#666666',
        }}></View>
      <View style={{marginTop: 30}}>
        <Text style={{fontSize: 18, color: 'black', marginBottom: 30}}>
          더보기
        </Text>
        <View style={styles.content}>
          <Image
            source={require('../../assets/icons/drawable-hdpi/notification1-color.png')}
            // resizeMode="contain"
            style={styles.content_img}
          />
          <TouchableOpacity onPress={() => navigation.navigate('notice')}>
            <Text style={styles.content_text}>공지사항</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Image
            source={require('../../assets/icons/drawable-hdpi/notification-favorite-color.png')}
            // resizeMode="contain"
            style={styles.content_img}
          />
          <TouchableOpacity onPress={() => navigation.navigate('push')}>
            <Text style={styles.content_text}>푸시알림</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Image
            source={require('../../assets/icons/drawable-hdpi/note-favorite-color.png')}
            // resizeMode="contain"
            style={styles.content_img}
          />
          <TouchableOpacity>
            <Text style={styles.content_text}>이벤트</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Image
            source={require('../../assets/icons/drawable-hdpi/clipboard-text-color.png')}
            // resizeMode="contain"
            style={styles.content_img}
          />
          <TouchableOpacity onPress={() => navigation.navigate('terms')}>
            <Text style={styles.content_text}>이용약관</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default MoreScreen;
