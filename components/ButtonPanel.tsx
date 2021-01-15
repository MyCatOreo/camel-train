import React, { useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import COLOR from "../constants/colors";
import SIZE from "../constants/sizes";

const ButtonPanel = (props: { onLikePressed: any; onCommentPressed: any }) => {
  const [liked, setLiked] = useState(false);

  const likeHandler = () => {
    setLiked(!liked);
  };

  return (
    <View style={styles.rowContainer}>
      <View style={styles.iconButton}>
        <Pressable
          onPress={() => {
            likeHandler();
          }}
        >
          <MaterialCommunityIcons
            name={liked ? "heart" : "heart-outline"}
            size={SIZE.icon}
            color={liked ? COLOR.boldLight : COLOR.flatDark}
          />
        </Pressable>
      </View>
      <View style={styles.iconButton}>
        <Pressable
          onPress={() => {
            props.onCommentPressed();
          }}
        >
          <MaterialCommunityIcons
            name="comment-outline"
            size={SIZE.icon}
            color={COLOR.flatDark}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  iconButton: {
    width: 30,
    marginRight: 10,
  },
});

export default ButtonPanel;
