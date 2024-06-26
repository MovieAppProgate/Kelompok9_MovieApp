// screens/FAQ.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const FAQ = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Text style={styles.title}>Frequently Asked Questions</Text>

        <Text style={styles.question}>What is this app about?</Text>
        <Text style={styles.answer}>
          This app is a movie catalog that allows users to browse and discover information about
          various movies, including details like cast, reviews, ratings, and more.
        </Text>

        <Text style={styles.question}>How can I search for movies?</Text>
        <Text style={styles.answer}>
          You can search for movies using the search bar at the top of the screen. Simply type in
          the title or keywords related to the movie you are looking for, and the app will display
          relevant results.
        </Text>

        <Text style={styles.question}>Can I watch movies directly through this app?</Text>
        <Text style={styles.answer}>
          No, this app does not provide direct streaming of movies. However, it provides
          information about where you can watch the movie, such as streaming platforms or theaters.
        </Text>

        <Text style={styles.question}>How frequently is the movie database updated?</Text>
        <Text style={styles.answer}>
          The movie database is updated regularly to ensure that you have access to the latest
          information about movies, including new releases, ratings, and reviews.
        </Text>

        <Text style={styles.question}>Is there a way to save my favorite movies?</Text>
        <Text style={styles.answer}>
          Yes, you can save movies to your favorites list by clicking the "Add to Favorites"
          button on the movie details page. This allows you to easily access and revisit your
          favorite movies later.
        </Text>

        <Text style={styles.question}>How can I get notifications about upcoming movies?</Text>
        <Text style={styles.answer}>
          Notifications about upcoming movies can be enabled in the settings section of the app.
          You can choose to receive notifications about new releases, premiere dates, and more.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#212121', // Warna background hitam (#212121)
    paddingTop :30,
  },
  container: {
    flex: 1,
    alignItems: 'center', // Pusatkan konten secara vertikal di tengah layar
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#ffffff', // Warna teks putih (#ffffff)
    textAlign: 'center', // Pusatkan teks secara horizontal
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#ffee2b', // Warna teks gold (#ffee2b)
  },
  answer: {
    fontSize: 16,
    marginBottom: 16,
    color: '#ffffff', // Warna teks putih (#ffffff)
  },
});

export default FAQ;
