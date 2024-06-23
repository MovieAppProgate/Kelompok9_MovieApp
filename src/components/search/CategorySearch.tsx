import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  FlatList,
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
      {/* Replace MovieItem with your actual component for displaying movie details */}
      <Text>{item.title}</Text>
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
              style={[
                styles.button,
                selectedCategory === category && styles.selectedButton,
              ]}
              onPress={() => handleCategorySelect(category)}
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedCategory === category && styles.selectedButtonText,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>
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
    marginVertical: 6,
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    padding: 10,
    backgroundColor: "#F0F0F0",
    borderRadius: 5,
    height: 150,
  },
  list: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  selectedButton: {
      backgroundColor: "#8978A4",
   },
   selectedButtonText: {
       color: "#FFF",
   },
});

export default CategorySearch;