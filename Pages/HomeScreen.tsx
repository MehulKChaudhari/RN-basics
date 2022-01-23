import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";

export function Button(props: any) {
  return (
    <Pressable style={styles.button} onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
}

function HomeScreen({ navigation }: any) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        alignContent: "space-between",
      }}
    >
      <Text>Home Screen</Text>
      <Button
        title="Counter"
        onPress={() => navigation.navigate("Counter")}
        style={styles.button}
      />
      <Button
        title="Twitter input box"
        onPress={() => navigation.navigate("Input")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    marginVertical: 5,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default HomeScreen;
