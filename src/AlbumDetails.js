import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import { FlashList } from '@shopify/flash-list';
const AlbumDetails = ({route, navigation}) => {
  const [image, setImage] = useState([]);
  let id = route.params.paramKey;
  useEffect(() => {
    let url = 'https://jsonplaceholder.typicode.com/albums/' + id + '/photos';
    axios.get(url).then(json => setImage(json.data));
  }, []);

  const renderItem = itemData => {
    return (
      <View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Zoom', {paramKey: itemData.item.url})
          }>
          <Image
            style={styles.image}
            source={{uri: itemData.item.thumbnailUrl}}></Image>
        </TouchableOpacity>
      </View>
    );
  };

//   return (
//     <View style={{flex:1, width:'100%', height:'100%'}} >
//     <View style={styles.containerFlate}>
//       <View style={styles.innerContainer}>
//         <Text style={{fontSize: 20, fontWeight: 'bold'}}>
//           PHOTOS: {image.length}
//         </Text>
//         <FlashList data={image} renderItem={renderItem} numColumns={2} estimatedItemSize = {200} />
//         <StatusBar />
//       </View>
//     </View>
//     </View>
//   );
// };
return (
  <View style={{flex:1, width:'100%', height:'100%'}}>
    <FlashList
      data={image}
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
  flex: {
    flex: 1,
  },
  containerFlate: {
    flex: 1,
    //padding: 50,
    height: 350,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    width: 450,
  },
  image: {
    width: 160,
    height: 160,
    alignSelf: 'center',
    borderRadius: 1,
    margin: 20,
  },
});

export default AlbumDetails;
