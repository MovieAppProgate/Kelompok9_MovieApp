import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import KeywordSearch from "../components/search/KeywordSearch";
import CategorySearch from "../components/search/CategorySearch";

const Search = () => {
  const [selectedBar, setSelectedBar] = useState("keyword");

  return (
    <View style={{
          ...styles.container,
          backgroundColor: selectedBar === "category" ? "#212121" : "transparent",
        }}>
      <View>
        <View style={styles.topBarContainer}>
          {["keyword", "category"].map((item, index) => (
            <TouchableOpacity
              key={item}
              activeOpacity={0.9}
              style={{
                ...styles.topBar,
                backgroundColor: item === selectedBar ? "#ffee2b" : "black",
                borderTopLeftRadius: index === 0 ? 100 : 0,
                borderBottomLeftRadius: index === 0 ? 100 : 0,
                borderTopRightRadius: index === 1 ? 100 : 0,
                borderBottomRightRadius: index === 1 ? 100 : 0,
              }}
              onPress={() => setSelectedBar(item)}
            >
              <Text style={{
                  ...styles.topBarLabel,
                  color: item === selectedBar ? "black" : "white",
                }}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {selectedBar === "keyword" ? <KeywordSearch /> : <CategorySearch />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop:30,
  },
  topBarContainer: {
    flexDirection: "row",
    width: "100%",
  },
  topBar: {
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    height: 60,
  },
  topBarLabel: {
    // Warna teks putih (#ffffff)
    fontSize: 20,
    fontWeight: "400",
    textTransform: "capitalize",
  },
});

export default Search;