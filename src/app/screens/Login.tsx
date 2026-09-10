import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { router } from "expo-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.loginBox}>

        <Text style={styles.title}>CHEF CHRISTOFFEL</Text>

        <Text style={styles.subtitle}>Login</Text>

        <Text style={styles.label}>Email</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#777"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Password</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#777"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => router.push("/screens/Profile")}
        >
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
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

  loginBox: {
    width: "100%",
    maxWidth: 400,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
    letterSpacing: 2,
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#000000",
    textAlign: "center",
    marginBottom: 40,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000000",
    marginBottom: 8,
  },

  input: {
    height: 50,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#000000",
    marginBottom: 20,
  },

  loginButton: {
    height: 50,
    backgroundColor: "#000000",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  loginText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 2,
  },

  backText: {
    textAlign: "center",
    color: "#000000",
    fontSize: 15,
    marginTop: 20,
  },
});