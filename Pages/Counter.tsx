import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "./HomeScreen";
const Counter = ({ navigation }: any) => {
  const [counter, setCounter] = useState<number>(0);

  const decrement = () => {
    setCounter((prev) => prev - 1);
  };
  const increament = () => {
    setCounter((prev) => prev + 1);
  };
  return (
    <View style={styles.container}>
      <Text>{counter}</Text>
      <TouchableOpacity>
        <Button onPress={decrement} title="-" />
        <Button onPress={increament} title="+" />
        <Button title="Go back" onPress={() => navigation.push("Home")} />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  //   paragraph: {
  //     margin: 24,
  //     fontSize: 18,
  //     fontWeight: "bold",
  //     textAlign: "center",
  //   },
  //   button: {
  //     color: "yellow",
  //   },
});
