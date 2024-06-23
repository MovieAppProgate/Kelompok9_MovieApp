import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  FlatList,
  Image,
} from "react-native";
import { StackActions, useNavigation } from "@react-navigation/native"; // Import navigation utilities
import { API_ACCESS_TOKEN } from "@env";

const categories: string[] = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Horror",
  "Music",
  "Mystery",
  "Romance",
  "Science Fiction",
  "TV Movie",
  "Thriller",
  "War",
  "Western",
];

const CategorySearch = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [results, setResults] = useState<any[]>([]); // State to store fetched movie results
  const navigation = useNavigation();

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const getMovieList = (query: string) => {
    const path = `search/movie?query=${query}&page=1`;
    const url = `https://api.themoviedb.org/3/${path}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_ACCESS_TOKEN}`, // Replace with your actual API access token
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setResults(data.results); // Set fetched results into state
        console.log(data);
      })
      .catch((error) => console.error(error));
  };

  const handleSearch = () => {
    if (selectedCategory) {
      // Perform API call with selectedCategory
      getMovieList(selectedCategory);
    } else {
      Alert.alert("Category not selected", "Please select a category.");
    }
  };

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => {
        console.log("Navigating to MovieDetail with ID:", item.id);
        navigation.dispatch(StackActions.push("MovieDetail", { id: item.id }));
      }}
    >
      <Image
        style={styles.poster}
        source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.rating}>{`Rating: ${item.vote_average}`}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.categoryContainer}>
        {categories.map((category: string, index: number) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => handleCategorySelect(category)}
          >
            <Text style={styles.buttonText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>
      <View style={styles.selectedCategoryContainer}>
        {selectedCategory ? (
          <Text style={styles.selectedCategoryText}>
            Selected Category: {selectedCategory}
          </Text>
        ) : null}
      </View>
      <FlatList
        style={styles.list}
        horizontal
        data={results}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: "center",
  },
  categoryContainer: {
    width: "90%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  button: {
    width: "48%",
    marginVertical: 5,
    paddingVertical: 10,
    backgroundColor: "#DCCBFF",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#4A3F90",
  },
  searchButton: {
    width: "90%",
    paddingVertical: 15,
    marginVertical: 20,
    backgroundColor: "#7F58FF",
    borderRadius: 20,
    alignItems: "center",
  },
  searchButtonText: {
    fontSize: 18,
    color: "#FFF",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 2, 
    marginTop:-100,
    padding: 10,
    backgroundColor: "#FFF",
    borderRadius: 3,
    height: 350,
    width: 200, 
  },
  poster: {
    width: 80,
    height: 120,
    borderRadius: 5,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  rating: {
    marginTop: 5,
    color: "#888",
  },
  list: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  selectedCategoryContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  selectedCategoryText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});

export default CategorySearch;
