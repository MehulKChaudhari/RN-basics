import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

const InputBox = () => {
  const [text, setText] = useState("");
  const [remaining, setRemaining] = useState(280);

  const onChangeHandler = (newText: string) => {
    setText(newText);
    setRemaining(280 - text.length);
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
      />

      <Text style={{ fontSize: 20 }}>{remaining} words remaining</Text>
    </View>
  );
};

export default InputBox;
