import React from "react";
import { Image, StyleSheet } from "react-native";

const Avatar = (props: { size: "small" | "large" }) => {
  const styleSize = () => {
    switch (props.size) {
      case "small":
        return {
          ...styles.small,
        };

      case "large":
        return {
          ...styles.large,
        };
    }
  };
  return (
    <Image
      style={[{ ...styles.avatar }, styleSize()]}
      source={require("../assets/mockup/lily.jpg")}
    />
  );
};

const styles = StyleSheet.create({
  avatar: {
    margin: 5,
    marginRight: 15,
  },
  small: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  large: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default Avatar;
