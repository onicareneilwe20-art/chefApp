import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";

export default function Profile() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>CHEF CHRISTOFFEL</Text>

      <Text style={styles.heading}>Chef Profile</Text>

      <Text style={styles.description}>
        Chef Christoffel is a passionate and experienced chef who
        specialises in creating high-quality fine dining experiences.
        His cooking combines fresh ingredients, creativity and
        professional culinary techniques to create memorable meals.
      </Text>

      <Text style={styles.sectionTitle}>Cuisines</Text>

      <Text style={styles.cuisine}>
        • French Cuisine
      </Text>

      <Text style={styles.cuisine}>
        • Italian Cuisine
      </Text>

      <Text style={styles.cuisine}>
        • Seafood
      </Text>

      <Text style={styles.cuisine}>
        • South African Cuisine
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/screens/Menu")}
      >
        <Text style={styles.buttonText}>EXPLORE MENU</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F1E8",
    paddingHorizontal: 30,
    justifyContent: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
    letterSpacing: 2,
    marginBottom: 10,
  },

  heading: {
    fontSize: 24,
    fontWeight: "600",
    color: "#000000",
    textAlign: "center",
    marginBottom: 25,
  },

  description: {
    fontSize: 16,
    lineHeight: 25,
    color: "#333333",
    textAlign: "center",
    marginBottom: 30,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 15,
  },

  cuisine: {
    fontSize: 16,
    color: "#333333",
    marginBottom: 10,
  },

  button: {
    backgroundColor: "#000000",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 30,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1.5,
  },
});