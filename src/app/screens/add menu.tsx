import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { router } from "expo-router";

export default function AddMenu() {
  const [dishName, setDishName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [addedMenuItems, setAddedMenuItems] = useState<{
    id: string;
    dishName: string;
    category: string;
    description: string;
    price: string;
  }[]>([]);

  const addDish = () => {
    setAddedMenuItems((items) => [
      ...items,
      { id: Date.now().toString(), dishName, category, description, price },
    ]);
    setDishName("");
    setCategory("");
    setDescription("");
    setPrice("");
  };

  const deleteDish = (id: string) => {
    setAddedMenuItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.title}>CHEF CHRISTOFFEL</Text>

        <Text style={styles.heading}>Add Menu Item</Text>

        <Text style={styles.label}>Dish Name</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter dish name"
          placeholderTextColor="#777"
          value={dishName}
          onChangeText={setDishName}
        />

        <Text style={styles.label}>Category</Text>

        <TextInput
          style={styles.input}
          placeholder="e.g. Starter, Main Course, Seafood"
          placeholderTextColor="#777"
          value={category}
          onChangeText={setCategory}
        />

        <Text style={styles.label}>Description</Text>

        <TextInput
          style={[styles.input, styles.descriptionInput]}
          placeholder="Describe the dish"
          placeholderTextColor="#777"
          multiline
          value={description}
          onChangeText={setDescription}
        />

        <Text style={styles.label}>Price</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter price"
          placeholderTextColor="#777"
          keyboardType="numeric"
          value={price}
          onChangeText={setPrice}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={addDish}
        >
          <Text style={styles.buttonText}>ADD TO MENU</Text>
        </TouchableOpacity>

        {addedMenuItems.map((item) => (
          <View style={styles.menuItem} key={item.id}>
            <Text style={styles.itemName}>{item.dishName}</Text>
            <Text style={styles.category}>{item.category}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <Text style={styles.price}>R{item.price}</Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => deleteDish(item.id)}
            >
              <Text style={styles.deleteText}>DELETE</Text>
            </TouchableOpacity>
          </View>
        ))}

        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => router.back()}
        >
          <Text style={styles.cancelText}>CANCEL</Text>
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

  descriptionInput: {
    height: 110,
    paddingTop: 15,
    textAlignVertical: "top",
  },

  button: {
    backgroundColor: "#000000",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 15,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1.5,
  },

  menuItem: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 10,
    marginTop: 20,
  },

  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 7,
  },

  category: {
    fontSize: 14,
    fontWeight: "600",
    color: "#555555",
    marginBottom: 7,
  },

  itemDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: "#555555",
    marginBottom: 10,
  },

  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 15,
  },

  deleteButton: {
    borderWidth: 1,
    borderColor: "#990000",
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: "center",
  },

  deleteText: {
    color: "#990000",
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: 1.2,
  },

  cancelButton: {
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 10,
  },

  cancelText: {
    color: "#000000",
    fontSize: 15,
    fontWeight: "600",
  },
});