import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, FlatList, StatusBar, Image} from 'react-native';
import Pinchable from 'react-native-pinchable';
const Zoom = ({route}) => {
  let id = route.params.paramKey;
  return (
    <View>
      <Pinchable>
        <Image style={styles.image} source={{uri: id}}></Image>
      </Pinchable>
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
  image: {
    width: 390,
    height: 180,
    alignSelf: 'center',
    borderRadius: 1,
    margin: 20,
    marginTop: 300,
  },
});

export default Zoom;
