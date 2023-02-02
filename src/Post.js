import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, FlatList, StatusBar} from 'react-native';
import axios from 'axios';
import { FlashList } from '@shopify/flash-list';
const Post = ({route}) => {
  const [dataById, setDataById] = useState([]);
  const [commentById, setCommentById] = useState([]);
  let id = route.params.paramKey;
  useEffect(() => {
    let url = 'https://jsonplaceholder.typicode.com/posts/' + id;
    axios.get(url).then(json => setDataById(json.data));
  });
  useEffect(() => {
    let url = 'https://jsonplaceholder.typicode.com/posts/' + id + '/comments';
    axios.get(url).then(json => setCommentById(json.data));
  }, []);
  const renderItem = itemData => {
    return (
      <View>
        <Text
          style={{
            color: 'white',
            backgroundColor: '#f6b614',
            margin: 10,
            width: 40,
            height: 40,
            textAlign: 'center',
            paddingTop: 10,
            borderRadius: 10,
            marginLeft: 0,
          }}>
          {itemData.item.name[0]}
        </Text>
        <Text style={{fontWeight: 'bold'}}>{itemData.item.body}</Text>
      </View>
    );
  };

  return (
    <View style={styles.containerFlate}>
      
      <View style={styles.innerContainer}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: 'white',
            fontFamily: 'verdana',
          }}>
          {dataById.title}
          {'\n'}
        </Text>
        <Text style={{textAlign: 'justify', fontWeight: 'bold'}}>
          {dataById.body}
          {'\n'}
        </Text>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'white',
          }}>
          COMMENTS ( {commentById.length} )
        </Text>

        <FlashList
          //horizontal={true}
          data={commentById}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          estimatedItemSize = {200}
        />
        <StatusBar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerFlate: {
    flex: 1,
    margin: 16,
    height: 500,
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
    marginTop: 20,
    marginBottom: 20,
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
    padding: 25,
  },
});

export default Post;
