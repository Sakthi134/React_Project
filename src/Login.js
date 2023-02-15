import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  BackHandler,
  Alert,
  TouchableOpacity
} from 'react-native';

const Login = ({navigation}) => {
  return (
    <View style={styles.topContainer}>
      {/* <View style={styles.buttonContainer}> */}
        <Image
          style={styles.image1}
          source={require('/home/divum/projects/ReactNative/React_Project/android/assets/twitter-png.gif')}></Image>
        <TextInput style={styles.Button}>
          username
        </TextInput>
        <TextInput>
          <Text style={styles.text}>Password</Text>
        </TextInput>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => navigation.navigate('Home', {screen: 'Home'})}>
          <Text style={styles.text}>POST</Text>
        </TouchableOpacity>
        <Image
          style={styles.image}
          source={require('/home/divum/projects/ReactNative/React_Project/android/assets/social.gif')}></Image>
      </View>
    // </View>
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

export default Login;
