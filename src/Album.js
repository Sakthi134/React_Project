import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Pressable,
} from 'react-native';
import { FlashList } from '@shopify/flash-list';
const Album = ({navigation}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/albums')
      .then(json => setData(json.data));
  });

  const renderItem = itemData => {
    return (
      <Pressable
        onPress={() =>
          navigation.navigate('AlbumDetails', {paramKey: itemData.item.id})
        }>
        <View style={styles.containerFlate}>
          <View style={styles.innerContainer}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
                fontFamily: 'courier',
              }}>
              Album
            </Text>
            <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
              {' '}
              {itemData.item.id}
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
        numColumns={2}
        estimatedItemSize={200}
      />
      <StatusBar />
    </View>
  );
};

const styles = StyleSheet.create({
  containerFlate: {
    flex: 1,
    margin: 25,
    height: 150,
    borderRadius: 1,
    elevation: 4,
    backgroundColor: '#a7b8bb',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    width: 150,
  },
  innerContainer: {
    flex: 1,
    borderRadius: 8,
    justifyContent: 'center',
    padding: 10,
    textAlign: 'center',
  },
});

export default Album;
