import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Letter from "./letter";
import { ANIMATIONS, COLORS, FONTSIZES } from "@/constants";

type Props = {
  value: string;
};

const Message = ({ value }: Props) => {
  const words = value.split(" ");
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {words.map((word, index) => (
        <View key={index} style={{ flexDirection: "row" }}>
          {word.split("").map((letter, index) => (
            <Letter
              key={index}
              value={letter}
              animation={ANIMATIONS[index % 5]}
              style={{
                color: COLORS[index % 5],
                fontSize: FONTSIZES[index % 5],
              }}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({});
