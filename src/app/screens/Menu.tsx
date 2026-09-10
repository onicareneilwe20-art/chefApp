import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { router } from "expo-router";

export default function Menu() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.title}>CHEF CHRISTOFFEL</Text>

        <Text style={styles.heading}>Explore Our Menu</Text>

        <Text style={styles.category}>STARTERS</Text>

        <View style={styles.menuItem}>
          <Text style={styles.itemName}>Garden Salad</Text>
          <Text style={styles.description}>
            Fresh seasonal vegetables with a light house dressing.
          </Text>
          <Text style={styles.price}>R85</Text>
        </View>

        <View style={styles.menuItem}>
          <Text style={styles.itemName}>Creamy Mushroom Soup</Text>
          <Text style={styles.description}>
            A rich and creamy soup prepared with fresh mushrooms.
          </Text>
          <Text style={styles.price}>R75</Text>
        </View>

        <Text style={styles.category}>MAIN COURSES</Text>

        <View style={styles.menuItem}>
          <Text style={styles.itemName}>Grilled Beef Fillet</Text>
          <Text style={styles.description}>
            Tender beef fillet served with seasonal vegetables and
            a chef's special sauce.
          </Text>
          <Text style={styles.price}>R220</Text>
        </View>

        <View style={styles.menuItem}>
          <Text style={styles.itemName}>Chicken Supreme</Text>
          <Text style={styles.description}>
            Grilled chicken breast served with creamy mashed potatoes
            and seasonal vegetables.
          </Text>
          <Text style={styles.price}>R180</Text>
        </View>

        <Text style={styles.category}>SEAFOOD</Text>

        <View style={styles.menuItem}>
          <Text style={styles.itemName}>Grilled King Prawns</Text>
          <Text style={styles.description}>
            Fresh prawns grilled with herbs, garlic and lemon.
          </Text>
          <Text style={styles.price}>R240</Text>
        </View>

        <View style={styles.menuItem}>
          <Text style={styles.itemName}>Pan-Seared Fish</Text>
          <Text style={styles.description}>
            Fresh seasonal fish served with vegetables and lemon butter.
          </Text>
          <Text style={styles.price}>R200</Text>
        </View>

        <Text style={styles.category}>DESSERTS</Text>

        <View style={styles.menuItem}>
          <Text style={styles.itemName}>Chocolate Fondant</Text>
          <Text style={styles.description}>
            Warm chocolate dessert with a soft centre.
          </Text>
          <Text style={styles.price}>R90</Text>
        </View>

        <View style={styles.menuItem}>
          <Text style={styles.itemName}>Classic Cheesecake</Text>
          <Text style={styles.description}>
            Creamy cheesecake served with fresh seasonal fruit.
          </Text>
          <Text style={styles.price}>R80</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/screens/add menu")}
        >
          <Text style={styles.buttonText}>BOOK CHEF</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F1E8",
  },

  content: {
    padding: 30,
    paddingBottom: 50,
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
    marginBottom: 35,
  },

  category: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
    letterSpacing: 2,
    marginTop: 20,
    marginBottom: 15,
  },

  menuItem: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 10,
    marginBottom: 15,
  },

  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 7,
  },

  description: {
    fontSize: 14,
    lineHeight: 20,
    color: "#555555",
    marginBottom: 10,
  },

  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
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