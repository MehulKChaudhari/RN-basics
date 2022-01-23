import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

const InputBox = () => {
  const [text, setText] = useState("");
  const [remaining, setRemaining] = useState(280);
  const [colour, setColour] = useState("");

  const onChangeHandler = (newText: string) => {
    var remainingChar = 280 - newText.length;

    setText(newText);
    setRemaining(remainingChar);
    setColor(remaining);
  };

  const setColor = (value: number) => {
    if (value <= 10) {
      setColour("red");
    } else if (value < 30) {
      setColour("gray");
    } else {
      setColour("black");
    }
  };

  return (
    <View>
      {/* <InputBox />
       */}
      <Text>Twitter</Text>
      <TextInput
        style={{ height: 40 }}
        placeholder="Type here to translate!"
        onChangeText={(newText) => onChangeHandler(newText)}
        defaultValue={text}
        numberOfLines={10}
      />

      <Text style={{ fontSize: 20, textDecorationColor: colour }}>
        {remaining} words remaining
      </Text>
    </View>
  );
};

export default InputBox;


//TODO: fix this. Its temp. 
