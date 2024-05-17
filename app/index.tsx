import React, { useState, useEffect } from "react";
import { Text, View, Button, Alert, ActivityIndicator } from "react-native";
import { Picker } from "@react-native-picker/picker";
import * as FileSystem from "expo-file-system";

export default function Index() {
  const [words, setWords] = useState<string[]>([]);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getWordsFromEnglishTxt = async () => {
      try {
        const path = FileSystem.documentDirectory + "english.txt";
        const text = await FileSystem.readAsStringAsync(path);
        const wordsFromTxt = text.split("\n").map((word) => word.trim());
        setWords(wordsFromTxt);
        setSelectedWords(Array(12).fill(wordsFromTxt[0]));
      } catch (error) {
        console.error("Error reading file", error);
      } finally {
        setLoading(false);
      }
    };

    getWordsFromEnglishTxt();
  }, []);

  const handleChange = (value: string, index: number) => {
    const newSelectedWords = [...selectedWords];
    newSelectedWords[index] = value;
    setSelectedWords(newSelectedWords);
  };

  const handleButtonClick = () => {
    Alert.alert("Selected Words", selectedWords.join(", "));
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Security Phrase</Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {Array.from({ length: 12 }, (_, i) => (
          <Picker
            key={i}
            selectedValue={selectedWords[i]}
            style={{ height: 50, width: 100 }}
            onValueChange={(itemValue) => handleChange(itemValue, i)}
          >
            {words.map((word, index) => (
              <Picker.Item key={index} label={word} value={word} />
            ))}
          </Picker>
        ))}
      </View>
      <Button title="Show Selected Words" onPress={handleButtonClick} />
    </View>
  );
}
