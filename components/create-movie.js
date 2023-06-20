import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const CreateMovie = () => {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [genre, setGenre] = useState('');
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const response = await fetch('https://crudapidemobg.herokuapp.com/movies');
      if (response.ok) {
        const data = await response.json();
        setMovies(data);
      } else {
        alert('Failed to fetch movies.');
      }
    } catch (error) {
      console.log(error);
      alert('An error occurred.');
    }
  };

  const createMovie = async () => {
    try {
      const response = await fetch('https://crudapidemobg.herokuapp.com/movies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, director, genre }),
      });
      if (response.ok) {
        setTitle('');
        setDirector('');
        setGenre('');
        alert('Movie created successfully!');
        fetchMovies();
      } else {
        alert('Failed to create movie.');
      }
    } catch (error) {
      console.log(error);
      alert('An error occurred.');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>
        Add a Movie to the Collection!
      </Text>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
      />
      <TextInput
        placeholder="Director"
        value={director}
        onChangeText={setDirector}
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
      />
      <TextInput
        placeholder="Genre"
        value={genre}
        onChangeText={setGenre}
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
      />
      <Button title="Create Movie" onPress={createMovie} />
      <Text>Click on the blue movies to Update or Delete them</Text>
    </View>
  );
};

export default CreateMovie;
