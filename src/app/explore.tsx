import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";

export default function Explore() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>CHEF CHRISTOFFEL</Text>

      <Text style={styles.heading}>Explore</Text>

      <Text style={styles.description}>
        Discover a fine dining experience created by Chef Christoffel.
        Explore our menu, view delicious dishes and choose your
        favourite meals for your private dining experience.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/screens/Menu")}
      >
        <Text style={styles.buttonText}>VIEW MENU</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => router.push("/screens/Login")}
      >
        <Text style={styles.secondaryText}>BOOK CHEF</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F1E8",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
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
    fontSize: 26,
    fontWeight: "600",
    color: "#000000",
    marginBottom: 25,
  },

  description: {
    fontSize: 16,
    lineHeight: 25,
    color: "#333333",
    textAlign: "center",
    marginBottom: 35,
  },

  button: {
    width: 220,
    backgroundColor: "#000000",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1.5,
  },

  secondaryButton: {
    width: 220,
    borderWidth: 1,
    borderColor: "#000000",
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 15,
  },

  secondaryText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1.5,
  },
});