import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splashs from './src/Splashs';
import Login from './src/Login';
import Home from './src/Home';
import Lable from './src/Lable';
import Post from './src/Post';
import Album from './src/Album';
import AlbumDetails from './src/AlbumDetails';
import Zoom from './src/Zoom';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Splashs"
          component={Splashs}
          options={{
            gestureEnabled : false,
            title: 'Splashs',
            headerTitle: null,
            headerShown: false,
            headerStyle: {
              backgroundColor: '#68c71a',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            gestureEnabled : false,
            title: 'Login',
            headerTitle: null,
            headerShown: false,
            headerStyle: {
              backgroundColor: '#68c71a',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            headerTitle: null,
            headerShown: false,
            headerStyle: {
              backgroundColor: '#68c71a',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Lable"
          component={Lable}
          options={{
            title: 'Lable',
            headerTitle: null,
            //headerShown: false,
            headerStyle: {
              backgroundColor: '#6fb8e4',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Post"
          component={Post}
          options={{
            title: 'Post',
            //headerLeft: null,
            //headerShown: false,
            headerStyle: {
              backgroundColor: '#6fb8e4',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Album"
          component={Album}
          options={{
            title: 'Album',
            headerTitle: null,
            //headerShown: false,
            headerStyle: {
              backgroundColor: '#6fb8e4',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="AlbumDetails"
          component={AlbumDetails}
          options={{
            title: 'AlbumDetails',
            //headerLeft: null,
            //headerShown: false,
            headerStyle: {
              backgroundColor: '#6fb8e4',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Zoom"
          component={Zoom}
          options={{
            title: 'Zoom',
            //headerLeft: null,
            //headerShown: false,
            headerStyle: {
              backgroundColor: '#6fb8e4',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
