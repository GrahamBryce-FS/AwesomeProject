import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';

import styles from '../Appstyles';

const ListContainer = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetch('https://crudapidemobg.herokuapp.com/movies')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  const handleMoviePress = (movieId) => {
    navigation.navigate('ViewMovie', { movieId }); 
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.movieButton}
      onPress={() => handleMoviePress(item._id)}
    >
      <Text style={styles.movieTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        style={styles.listContainer}
      />
    </View>
  );
};

export default ListContainer;


