import AsyncStorage from '@react-native-async-storage/async-storage';

// AsyncStorage 데이터 저장
const setData = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    console.log('storeData ========= ', jsonValue);
    await AsyncStorage.setItem('@storage_Key', jsonValue);
  } catch (error) {
    console.log(error);
  }
};

// AsyncStorage 데이터 가져오기
const getData = async () => {
  await AsyncStorage.getItem('@storage_Key', (err, result) => {
    if (result !== null) {
      const data = JSON.parse(result);
      data._searchParams.forEach(element => {
        let values = Object.values(element);
        jsonObj[values[0]] = values[1];
      });
      const storageId = jsonObj.id;
      const storagePwd = jsonObj.pwd;
    }
  });
};

// AsyncStorage 데이터 삭제
const removeData = async () => {
  try {
    await AsyncStorage.removeItem('@storage_Key');
  } catch (error) {
    console.log(error);
  }
  console.log('Done');
};
