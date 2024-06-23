import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import MovieItem from '../components/movies/MovieItem';

const CategorySearchResults = () => {
  const route = useRoute();
  const { results } = route.params;

  return (
    <View style={styles.container}>
      <FlatList
          data={results}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() => {
                console.log("Navigating to MovieDetail with ID:", item.id);
                navigation.dispatch(
                  StackActions.push("MovieDetail", { id: item.id })
                );
              }}
            >
              <MovieItem
                movie={item}
                size={{ width: ITEM_WIDTH, height: 160 }}
                coverType="poster"
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
  container: {
    flex: 1,
    padding: 16,
  },
  list: {
    paddingBottom: 16,
  },
});

export default CategorySearchResults;