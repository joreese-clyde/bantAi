import React, { useEffect, useRef } from "react";
import { View, Image, Animated } from "react-native";
import bantAiLogo from "../assets/logo/bantAi-logo.png";
import { styles } from "../styles/SplashScreenStyles";

export default function SplashScreen() {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 900,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 900,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [animatedValue]);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-60, 60],
  });

  return (
    <View style={styles.container}>
      <Image source={bantAiLogo} style={styles.logo} resizeMode="contain" />

      <View style={styles.loadingTrack}>
        <Animated.View
          style={[
            styles.loadingBar,
            {
              transform: [{ translateX }],
            },
          ]}
        />
      </View>
    </View>
  );
}