import React from "react";
import { Image, StyleSheet } from "react-native";
import { User } from "../models/user";
import COLOR from "../constants/colors";

const Avatar = (props: {
  user: User;
  todo?: string;
  mode?: "small" | "large";
  isAdmin?: boolean;
}) => {
  return (
    <Image
      style={[
        styles.avatar,
        props.todo === "done"
          ? styles.avatarDone
          : props.todo === "todo"
          ? styles.avatarToDo
          : {},
        props.mode === "small"
          ? styles.small
          : props.mode === "large"
          ? styles.large
          : styles.large,
        props.isAdmin ? styles.admin : {},
      ]}
      source={{ uri: props.user.avatar }}
    />
  );
};

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: COLOR.themeDarkTint,
    marginRight: 5,
  },
  avatarToDo: {
    borderWidth: 0,
    borderColor: "grey",
  },
  avatarDone: {
    borderWidth: 4,
    borderColor: "green",
  },
  avatarQuestion: {
    borderWidth: 4,
    borderColor: "orange",
  },
  small: { height: 36, width: 36, borderRadius: 18 },
  large: { height: 80, width: 80, borderRadius: 16 },
  admin: { backgroundColor: COLOR.boldDark },
});

export default Avatar;
