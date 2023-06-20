

import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import styles from './Appstyles';

const ViewMovie = ({ route, navigation }) => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [values, setValues] = useState({
    title: '',
    director: '',
    genre: '',
  });

  const { movieId } = route.params;

  const styles = StyleSheet.create({
    deleteButton: {
      padding: 10,
      backgroundColor: '#ff0040',
      color: '#fff',
      borderRadius: 5,
      fontSize: 16,
    },
  });

  useEffect(() => {
    getMovie();
  }, []);

  const getMovie = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://crudapidemobg.herokuapp.com/movies/${movieId}`);
      const data = await response.json();
      setMovie(data);
      setValues({
        title: data.title,
        director: data.director,
        genre: data.genre,
      });
    } catch (error) {
      setError(error.message || 'Unexpected error');
    } finally {
      setLoading(false);
    }
  };

  const deleteMovie = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://crudapidemobg.herokuapp.com/movies/${movieId}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      navigation.navigate('Home'); 
    } catch (error) {
      setError(error.message || 'Unexpected error');
    } finally {
      setLoading(false);
    }
  };

  const updateMovie = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://crudapidemobg.herokuapp.com/movies/${movieId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      setError(error.message || 'Unexpected error');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    updateMovie();
  };

  const handleInputChanges = (key, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View>
      <Text style={styles.largeHeading}>Update or Delete the movie just click on the text</Text>
      <Text>Movie Title:</Text>
      <TextInput
        value={values.title}
        onChangeText={(text) => handleInputChanges('title', text)}
      />
      <Text>Director:</Text>
      <TextInput
        value={values.director}
        onChangeText={(text) => handleInputChanges('director', text)}
      />
      <Text>Genre:</Text>
      <TextInput
        value={values.genre}
        onChangeText={(text) => handleInputChanges('genre', text)}
      />
      <Button title="Update"  onPress={handleSubmit} />
      <Button title="Delete Movie" styles={styles.deleteButton} onPress={deleteMovie} />
    </View>
  );
};

export default ViewMovie;
