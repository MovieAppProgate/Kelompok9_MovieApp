import React, { useState } from 'react';
import {
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

import MovieItem from '../movies/MovieItem';
import { API_ACCESS_TOKEN } from '@env';
import { Movie } from '../../types/app';

const ITEM_WIDTH = 100;

const KeywordSearch: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<Movie[]>([]);
  const navigation = useNavigation();

  const getMovieList = (query: string): void => {
    const path = `search/movie?query=${query}&page=1`;
    const url = `https://api.themoviedb.org/3/${path}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_ACCESS_TOKEN}`,
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => setResults(data.results))
      .catch((error) => console.error(error));
  };

  const handleSearch = () => {
    if (query.length > 0) {
      getMovieList(query);
    }
  };

  return (
    <View>
      <View style={styles.inputContainer}>
        <FontAwesome
          name='search'
          size={24}
          color="#212121" // Change to gold color
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.input}
          placeholder='Search for a keyword...'
          placeholderTextColor="#212121"// Change placeholder text color to gold
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={handleSearch}
        />
      </View>
      <FlatList
        data={results}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => {
              console.log('Navigating to MovieDetail with ID:', item.id);
              navigation.dispatch(
                StackActions.push('MovieDetail', { id: item.id })
              );
            }}
          >
            <MovieItem
              movie={item}
              size={{ width: ITEM_WIDTH, height: 160 }}
              coverType='poster'
              onPress={() => item}
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => `${item.id}`}
        numColumns={3}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderColor: "#212121", 
    borderWidth: 3,
    borderRadius: 30,
    paddingHorizontal: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    color: "#212121", 
  },
  itemContainer: {
    margin: 8,
    alignItems: 'center',
  },
  list: {
    paddingBottom: 16,
  },
});

export default KeywordSearch;
