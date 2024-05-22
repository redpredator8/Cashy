import React from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  StatusBar,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

const data = [
  {
    id: "1",
    name: "Litecoin",
    symbol: "ltc",
    amount: "0.101",
    value: "205.50",
  },
  {
    id: "2",
    name: "Dogecoin",
    symbol: "dgc",
    amount: "0.101",
    value: "205.50",
  },
  {
    id: "3",
    name: "Pepecoin",
    symbol: "pep",
    amount: "0.101",
    value: "205.50",
  },
  { id: "4", name: "Bitcoin", symbol: "btc", amount: "0.101", value: "205.50" },
  {
    id: "5",
    name: "Litecoin",
    symbol: "ltc",
    amount: "0.101",
    value: "205.50",
  },
  {
    id: "6",
    name: "Dogecoin",
    symbol: "dgc",
    amount: "0.101",
    value: "205.50",
  },
  {
    id: "7",
    name: "Pepecoin",
    symbol: "pep",
    amount: "0.101",
    value: "205.50",
  },
  { id: "8", name: "Bitcoin", symbol: "btc", amount: "0.101", value: "205.50" },
];

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.balance}>0.00$</Text>
      <LineChart
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], // Add labels
          datasets: [
            {
              data: [80, 45, 28, 80, 99, 43],
            },
          ],
        }}
        width={Dimensions.get("window").width - 40} // from react-native
        height={220}
        chartConfig={{
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        bezier
        style={styles.chart}
      />
      <View style={styles.timeFilters}>
        <Text style={styles.timeFilter}>1D</Text>
        <Text style={styles.timeFilter}>1M</Text>
        <Text style={styles.timeFilter}>1Y</Text>
        <Text style={styles.timeFilter}>ALL</Text>
      </View>
      <TextInput style={styles.searchBar} placeholder="Search..." />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.item}>{item.name}</Text>
            <Text style={styles.item}>
              {item.amount} {item.symbol}
            </Text>
            <Text style={styles.item}>{item.value} Usdt</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
  },
  balance: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  timeFilters: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  timeFilter: {
    fontSize: 16,
    color: "#000000",
  },
  searchBar: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  item: {
    fontSize: 16,
  },
});

export default App;
