import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen({ toggleView }: { toggleView: () => void }) {
  const insets = useSafeAreaInsets();

  const part1 = "I Confirm";
  const part2 =
    "I wrote my Mnemonic Phrase Down, I understand if I Lose it, my funds will be lost.";

  return (
    <SafeAreaView style={[styles.safeArea, { paddingTop: insets.top }]}>
      <View style={styles.container}>
        <Text style={styles.title}>Choose your Mnemonic phrase</Text>
        <View style={styles.phraseContainer}>
          {Array.from({ length: 12 }, (_, index) => (
            <View key={index} style={styles.phraseBox}>
              <Text style={styles.phraseText}>Potato</Text>
            </View>
          ))}
        </View>
        <Text style={styles.subtitle}>Your Phrase</Text>
        <Text style={styles.mnemonicText}>
          Potato Potato Potato Potato Potato Potato Potato Potato Potato Potato
          Potato Potato
        </Text>
        <TouchableOpacity style={styles.confirmButton} onPress={toggleView}>
          <Text style={styles.confirmButtonText}>{part1}</Text>
          <Text style={styles.confirmButtonSubText}>{part2}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#5a67d8",
    marginBottom: 16,
  },
  phraseContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 24,
  },
  phraseBox: {
    width: "28%",
    margin: "1%",
    padding: 12,
    backgroundColor: "#e2e8f0",
    alignItems: "center",
    borderRadius: 8,
  },
  phraseText: {
    fontSize: 16,
    color: "#2d3748",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#5a67d8",
    marginBottom: 8,
  },
  mnemonicText: {
    fontSize: 18,
    color: "#2d3748",
    textAlign: "center",
    marginBottom: 24,
  },
  confirmButton: {
    backgroundColor: "red",
    padding: 16,
    borderRadius: 20,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black",
  },

  confirmButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  confirmButtonSubText: {
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
  },
});
