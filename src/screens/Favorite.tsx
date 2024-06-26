import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MovieItem from "../components/movies/MovieItem";
import { Movie } from "../types/app";
import {
  useFocusEffect,
  useNavigation,
  StackActions,
} from "@react-navigation/native";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = width / 3 - 16;

const Favorite = (): JSX.Element => {
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);
  const navigation = useNavigation();

  const fetchFavoriteMovies = async (): Promise<void> => {
    try {
      const storedFavorites: string | null =
        await AsyncStorage.getItem("@FavoriteList");
      if (storedFavorites) {
        setFavoriteMovies(JSON.parse(storedFavorites));
      }
    } catch (error) {
      console.log("Error fetching favorite movies:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchFavoriteMovies();
    }, [])
  );

  if (favoriteMovies.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No favorite movies found.</Text>
      </View>
    );
  }

  const handlePress = (id: number) => {
    console.log("Navigating to MovieDetail with ID:", id);
    navigation.dispatch(StackActions.push("MovieDetail", { id }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorite Movies</Text>
      <FlatList
        data={favoriteMovies}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            // onPress={() => handlePress(item.id)}
          >
            <MovieItem
              movie={item}
              size={{ width: ITEM_WIDTH, height: 160 }}
              coverType="poster"
              onPress={() => {
                console.log("Navigating to MovieDetail with ID:", item.id);
                navigation.dispatch(
                  StackActions.push("MovieDetail", { id: item.id })
                );
              }}
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
    backgroundColor: "#212121", // Warna background hitam (#212121)
    paddingHorizontal: 8,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 16,
    color: "#ffffff", // Warna teks putih (#ffffff)
  },
  list: {
    paddingHorizontal: 8,
  },
  itemContainer: {
    width: ITEM_WIDTH,
    margin: 5.5,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 18,
    color: "#999",
  },
});

export default Favorite;
