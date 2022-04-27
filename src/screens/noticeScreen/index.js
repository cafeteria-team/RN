import React from 'react';
import {View, Text, FlatList, Dimensions, TouchableOpacity} from 'react-native';
import data from '../../dummyData.json';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

function Notice() {
  const getData = data.all;

  const renderItem = ({item, index}) => {
    return (
      <View>
        <View>
          <TouchableOpacity>
            <Text>{item.title}</Text>
            <Text>{item.date}</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 1,
            width: WIDTH - 40,
            backgroundColor: 'grey',
          }}></View>
      </View>
    );
  };

  return (
    // <View>
    //   <FlatList
    //     data={getData}
    //     keyExtractor={item => item.store_name}
    //     renderItem={item => renderItem(item)}
    //     showsVerticalScrollIndicator={false}
    //   />
    // </View>
    <View style={{marginHorizontal: 20}}>
      <View style={{height: 60, marginTop: 20}}>
        <View>
          <Text style={{color: 'black', fontSize: 16}}>
            좋구내 공지사항 입니다.
          </Text>
          <Text style={{color: 'black', fontSize: 12}}> 2022-04-01</Text>
        </View>
        <View
          style={{
            height: 2,
            width: WIDTH - 40,
            backgroundColor: '#666666',
            marginTop: 20,
          }}></View>
      </View>
      <View style={{height: 60, marginTop: 20}}>
        <View>
          <Text style={{color: 'black', fontSize: 16}}>
            좋구내 공지사항 입니다.
          </Text>
          <Text style={{color: 'black', fontSize: 12}}> 2022-04-01</Text>
        </View>
        <View
          style={{
            height: 2,
            width: WIDTH - 40,
            backgroundColor: '#666666',
            marginTop: 20,
          }}></View>
      </View>
      <View style={{height: 60, marginTop: 20}}>
        <View>
          <Text style={{color: 'black', fontSize: 16}}>
            좋구내 공지사항 입니다.
          </Text>
          <Text style={{color: 'black', fontSize: 12}}> 2022-04-01</Text>
        </View>
        <View
          style={{
            height: 2,
            width: WIDTH - 40,
            backgroundColor: '#666666',
            marginTop: 20,
          }}></View>
      </View>
      <View style={{height: 60, marginTop: 20}}>
        <View>
          <Text style={{color: 'black', fontSize: 16}}>
            좋구내 공지사항 입니다.
          </Text>
          <Text style={{color: 'black', fontSize: 12}}> 2022-04-01</Text>
        </View>
        <View
          style={{
            height: 2,
            width: WIDTH - 40,
            backgroundColor: '#666666',
            marginTop: 20,
          }}></View>
      </View>
      <View style={{height: 60, marginTop: 20}}>
        <View>
          <Text style={{color: 'black', fontSize: 16}}>
            좋구내 공지사항 입니다.
          </Text>
          <Text style={{color: 'black', fontSize: 12}}> 2022-04-01</Text>
        </View>
        <View
          style={{
            height: 2,
            width: WIDTH - 40,
            backgroundColor: '#666666',
            marginTop: 20,
          }}></View>
      </View>
      <View style={{height: 60, marginTop: 20}}>
        <View>
          <Text style={{color: 'black', fontSize: 16}}>
            좋구내 공지사항 입니다.
          </Text>
          <Text style={{color: 'black', fontSize: 12}}> 2022-04-01</Text>
        </View>
        <View
          style={{
            height: 2,
            width: WIDTH - 40,
            backgroundColor: '#666666',
            marginTop: 20,
          }}></View>
      </View>
      <View style={{height: 60, marginTop: 20}}>
        <View>
          <Text style={{color: 'black', fontSize: 16}}>
            좋구내 공지사항 입니다.
          </Text>
          <Text style={{color: 'black', fontSize: 12}}> 2022-04-01</Text>
        </View>
        <View
          style={{
            height: 2,
            width: WIDTH - 40,
            backgroundColor: '#666666',
            marginTop: 20,
          }}></View>
      </View>
    </View>
  );
}

export default Notice;
