import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";

export default function Logout() {
  const handleLogout = () => {
    router.replace("/");
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>CHEF CHRISTOFFEL</Text>

      <Text style={styles.heading}>Logout</Text>

      <Text style={styles.message}>
        Are you sure you want to logout?
      </Text>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={handleLogout}
      >
        <Text style={styles.logoutText}>LOGOUT</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => router.back()}
      >
        <Text style={styles.cancelText}>CANCEL</Text>
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
    fontSize: 24,
    fontWeight: "600",
    color: "#000000",
    marginBottom: 25,
  },

  message: {
    fontSize: 17,
    color: "#333333",
    textAlign: "center",
    marginBottom: 35,
  },

  logoutButton: {
    width: 200,
    backgroundColor: "#000000",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
  },

  logoutText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1.5,
  },

  cancelButton: {
    marginTop: 15,
    paddingVertical: 10,
  },

  cancelText: {
    color: "#000000",
    fontSize: 15,
    fontWeight: "600",
  },
});