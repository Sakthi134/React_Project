import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  Pressable,
} from 'react-native';
import { FlashList } from '@shopify/flash-list';

const Lable = ({navigation}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(json => setData(json.data));
  });

  const renderItem = itemData => {
    return (
      <Pressable
        onPress={() =>
          navigation.navigate('Post', {paramKey: itemData.item.id})
        }>
        <View style={styles.containerFlate}>
          <View style={styles.innerContainer}>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'white',
                fontFamily: 'courier',
              }}>
              {itemData.item.title}
              {'\n'}
            </Text>
            <Text style={{fontWeight: 'bold'}}>
              Description : {itemData.item.body}
            </Text>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={{flex:1, width:'100%', height:'100%'}}>
      <FlashList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        estimatedItemSize = {200}
      />
      <StatusBar />
    </View>
  );
};

const styles = StyleSheet.create({
  containerFlate: {
    flexGrow: 0,
    margin: 16,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: '#a7b8bb',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '100%',
    marginTop: 400,
  },
  innerContainer: {
    flex: 1,
    borderRadius: 8,
    justifyContent: 'center',
    padding: 10,
    fontWeight: 'bold',
  },
});

export default Lable;
