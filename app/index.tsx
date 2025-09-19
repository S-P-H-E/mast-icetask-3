import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleContinue = () => {
    const numAge = Number(age);

    if (isNaN(numAge)) {
      setMessage("Please enter a valid number");
      return;
    }

    if (numAge >= 21) {
      router.push({ pathname: "/movies", params: { age: numAge } });
    } else if (numAge >= 18) {
      setMessage("You are over 18 🎉");
    } else {
      setMessage("You are under 18 ❌");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your age</Text>
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
        placeholder="e.g. 20"
        placeholderTextColor="#747575"
      />
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      {message ? <Text style={styles.message}>{message}</Text> : null}
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
