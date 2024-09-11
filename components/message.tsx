import { ANIMATIONS, COLORS, FONTSIZES } from "@/constants";
import { StyleSheet, View } from "react-native";
import Letter from "./letter";

type Props = {
  value: string;
};

const Message = ({ value }: Props) => {
  const words = value.split(" ");
  return (
    <View style={styles.container}>
      {words.map((word, index) => (
        <View key={index} style={styles.wordContainer}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  wordContainer: { flexDirection: "row" },
});
