import React from "react";
import { View, FlatList, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useRoute, useNavigation, StackActions } from "@react-navigation/native";
import MovieItem from "../components/movies/MovieItem";

const CategorySearchResults = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { results, category } = route.params;

  const ITEM_WIDTH = 100;

  if (!results) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
       <Text style={styles.title}>Category : {category} </Text>
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
    backgroundColor: '#212121',
  },
  title:{
    fontWeight:'800',
    fontSize:20,
    textAlign:"center",
    paddingBottom:16,
    color: '#ffee2b',
  },
  itemContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    padding: 10,
    backgroundColor: "#1E1E1E",
    borderRadius: 5,
    height: 150,
  },
  list: {
    paddingBottom: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#212121',
  },
});

export default CategorySearchResults;
