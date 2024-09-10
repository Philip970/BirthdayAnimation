import { useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
  useWindowDimensions,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

type Props = {
  value: string;
  animation?: "NONE" | "ROTATE" | "TRANSLATEX" | "TRANSLATEY";
  style?: TextStyle;
};

const random = (x: number) => {
  return Math.random() * 2 * x - x;
};

const Letter = ({ value, animation = "NONE", style }: Props) => {
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();
  const rotate = useSharedValue(0);
  const scale = useSharedValue(1);
  const translateX = useSharedValue(random(SCREEN_WIDTH));
  const translateY = useSharedValue(random(SCREEN_HEIGHT));

  const rTextStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
        {
          rotate: `${rotate.value}deg`,
        },
        {
          scale: scale.value,
        },
      ],
    };
  });

  useEffect(() => {
    translateX.value = withTiming(0, { duration: 2000 }, () => {
      translateY.value = withTiming(0, { duration: 2000 }, () => {
        if (animation === "ROTATE") {
          rotate.value = withRepeat(
            withTiming(360, { duration: 2000 }),
            -1,
            false
          );
        } else if (animation === "TRANSLATEX") {
          translateX.value = withRepeat(
            withSequence(
              withTiming(-2, { duration: 2000 }),
              withTiming(0, { duration: 2000 })
            ),
            -1,
            false
          );
        } else if (animation === "TRANSLATEY") {
          translateY.value = withRepeat(
            withSequence(
              withTiming(-2, { duration: 2000 }),
              withTiming(0, { duration: 2000 })
            ),
            -1,
            false
          );
        }
      });
    });
  }, []);

  const handlePress = () => {
    scale.value = withSequence(
      withTiming(1.5, { duration: 200 }),
      withTiming(1, { duration: 200 })
    );
    const randomX = random(SCREEN_WIDTH / 4);
    const randomY = random(SCREEN_HEIGHT / 4);

    translateX.value = withSequence(
      withTiming(randomX, { duration: 1000 }, () => {
        translateY.value = withTiming(randomY, {
          duration: 1000,
        });
      }),
      withTiming(0, { duration: 1000 }, () => {
        translateY.value = withTiming(0, { duration: 1000 });
      })
    );
  };

  return (
    <Animated.Text
      style={[
        style,
        rTextStyle,
        {
          fontWeight: "bold",
          paddingHorizontal: 4,
        },
      ]}
      onPress={handlePress}
    >
      {value}
    </Animated.Text>
  );
};

export default Letter;

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    paddingHorizontal: 4,
  },
});
