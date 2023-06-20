import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, Switch, Button, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Network from 'expo-network';
import ViewMovie from './view-movie';

import Heading from './components/Heading';
import ListContainer from './components/list-container';

import styles from './Appstyles';
import CreateMovie from './components/create-movie';


function HomeScreen({navigation}) {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.largeHeading}>I need your help making a movie list! This is what I have so far</Text>
      <ListContainer/>
      <CreateMovie />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Home'}}/>
        <Stack.Screen name="ViewMovie" component={ViewMovie} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

