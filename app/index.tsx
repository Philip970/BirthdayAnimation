import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Letter from "@/components/letter";
import { ThemedText } from "@/components/ThemedText";
import Message from "@/components/message";

const index = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#0d0b26",
      }}
    >
      <Message value="WISHING YOU A VERY HAPPY BIRTHDAY" />
    </View>
  );
};

export default index;
