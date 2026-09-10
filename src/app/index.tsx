import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";

export default function Welcome() {
  return (
    <ImageBackground
      source={require("../../assets/images/logo-glow.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>

        <Text style={styles.title}>CHEF CHRISTOFFEL</Text>

        <Text style={styles.subtitle}>
          Fine Dining Experience
        </Text>

        <TouchableOpacity
          style={styles.enterButton}
          onPress={() => router.push("/screens/Login")}
        >
          <Text style={styles.enterText}>ENTER</Text>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.45)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    letterSpacing: 2,
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 18,
    color: "#FFFFFF",
    textAlign: "center",
    fontStyle: "italic",
    marginBottom: 50,
  },

  enterButton: {
    width: 180,
    paddingVertical: 15,
    borderRadius: 30,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },

  enterText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
    letterSpacing: 2,
  },
});
