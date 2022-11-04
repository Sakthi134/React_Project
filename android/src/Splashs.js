import React, {useState} from 'react';
import {StyleSheet, View, Image} from 'react-native';

const Splashs = ({navigation}) => {
  const [timePassed, setTimePassed] = useState(false);

  setTimeout(function () {
    setTimePassed(true);
  }, 2500);
  if (!timePassed) {
    return (
      <View style={styles.main}>
        <View style={styles.splash}>
          <View style={styles.logo}>
            <Image
              style={styles.img}
              source={require('/home/divum/projects/ReactNative/Hospital_Managment/android/assets/61e6788d9e62865a199da67a_Social-Media.gif')}></Image>
          </View>
        </View>
      </View>
    );
  }
  navigation.navigate('Home');
  return null;
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
  splash: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'white',
  },
  img: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    padding: 10,
    marginVertical: 220,
  },

  logo: {
    alignItems: 'center',
    marginTop: 50,
  },
});

export default Splashs;
