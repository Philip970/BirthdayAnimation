import { View } from "react-native";
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
