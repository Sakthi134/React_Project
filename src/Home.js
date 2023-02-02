import React, {useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  BackHandler,
  Alert,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

const Home = ({navigation}) => {
  useFocusEffect(
    useCallback(() => {
      const backAction = () => {
        Alert.alert('Stop', 'Are you want to go exit the app', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {
            text: 'Yes',
            onPress: () => BackHandler.exitApp(),
          },
        ]);
        return true;
      };

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );

      return () => backHandler.remove();
    }, []),
  );
  return (
    <View style={styles.topContainer}>
      <View style={styles.buttonContainer}>
        <Image
          style={styles.image1}
          source={require('/home/divum/projects/ReactNative/React_Project/android/assets/twitter-png.gif')}></Image>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => navigation.navigate("Lable",{screen: "Lable"})}>
          <Text style={styles.text}>POST</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => navigation.navigate("Album",{screen: "Album"})}>
          <Text style={styles.text}>ALBUM</Text>
        </TouchableOpacity>
        <Image
          style={styles.image}
          source={require('/home/divum/projects/ReactNative/React_Project/android/assets/social.gif')}></Image>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Button: {
    backgroundColor: '#6fb8e4',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 8,
    marginTop: 90,
    width: 250,
    elevation: 10,
    shadowColor: '#171717',
    borderRadius: 30,
    marginBottom: -70,
  },
  buttonContainer: {
    marginTop: 2,
    backgroundColor: 'black',
    //margin:1,
    //marginBottom:100
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  topContainer: {
    flex: 1,
    margin: 200,
  },
  image: {
    width: 250,
    height: 200,
    marginTop: 247,
    marginHorizontal: -200,
  },
  image1: {
    height: 90,
    width: 110,
    //backgroundColor:'white'
    marginTop: -70,
    marginHorizontal: -60,
  },
});

export default Home;
