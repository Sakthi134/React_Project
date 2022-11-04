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
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
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
    textAlign: 'center',
  },
});

export default Album;
