import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Movies() {
  const { age } = useLocalSearchParams();
  const [choice, setChoice] = useState("");
  const [movie, setMovie] = useState("");

  const handleSelect = () => {
    const num = Number(choice);
    let selected = "";

    switch (num) {
      case 1:
        selected = "Shang-Chi and the Legend of the Ten Rings";
        break;
      case 2:
        selected = "Spider-Man: Across the Spider-Verse";
        break;
      case 3:
        selected = "Oppenheimer";
        break;
      case 4:
        selected = "Barbie";
        break;
      case 5:
        selected = "Dune: Part Two";
        break;
      default:
        selected = "plz enter a number between 1 and 5";
    }

    setMovie(selected);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>You are {age} 🎉</Text>

      <TextInput
        style={styles.input}
        value={choice}
        onChangeText={setChoice}
        keyboardType="numeric"
        placeholder="Enter number 1-5"
        placeholderTextColor="#747575"
      />

      <TouchableOpacity style={styles.button} onPress={handleSelect}>
        <Text style={styles.buttonText}>Show Movie</Text>
      </TouchableOpacity>

      {movie ? <Text style={styles.message}>{movie}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    width: 200,
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#000",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  message: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
});
