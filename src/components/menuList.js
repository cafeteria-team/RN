import React from 'react';
import {Text} from 'react-native';

export default function MenuList(props) {
  const menu = props.menu;
  return menu.map((item, index) =>
    index < 12 ? (
      index !== 0 ? (
        index % 3 === 0 ? (
          <Text
            numberOfLines={1}
            key={index}
            style={{
              fontSize: 14,
              color: 'black',
              width: '33%',
              marginTop: 10,
            }}>
            {item}
          </Text>
        ) : (
          <Text
            numberOfLines={1}
            key={index}
            style={{
              fontSize: 14,
              color: 'black',
              width: '31%',
              marginLeft: '2%',
              marginTop: 10,
            }}>
            {item}
          </Text>
        )
      ) : (
        <Text
          numberOfLines={1}
          key={index}
          style={{
            fontSize: 14,
            color: 'black',
            width: '33%',
            marginTop: 10,
          }}>
          {item}
        </Text>
      )
    ) : null,
  );
}
