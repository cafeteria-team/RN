/**
 * save data type
 *  1. Async Storage
 *  2. Realm
 *  3. Redux Persist
 */

import React, {useState, useEffect, useRef} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

function Like() {
  const [like, setLike] = useState([]);

  useEffect(() => {});

  return (
    <View>
      <Text>Like Component</Text>
    </View>
  );
}

export default Like;
