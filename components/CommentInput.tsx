import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FONT from "../constants/fonts";
import COLOR from "../constants/colors";
import SIZE from "../constants/sizes";
import { TouchableOpacity } from "react-native-gesture-handler";
import AppText from "./AppText";

const CommentInput = (props: {
  onSendPressed: any;
  style?: {};
  inputBoxStyle?: {};
  iconStyle?: {};
}) => {
  const [content, setContent] = useState("");

  return (
    //TODO: add keyboard avoid view
    <View style={[styles.commentInput, { ...props.style }]}>
      <TextInput
        onChangeText={(text) => setContent(text)}
        multiline={true}
        maxLength={500}
        returnKeyType="done"
        selectionColor={COLOR.boldLight}
        style={[styles.textInput, { ...props.inputBoxStyle }]}
      />
      <View style={styles.buttonRow}>
        <AppText style={styles.wordLimit}>85/500</AppText>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => props.onSendPressed(content)}>
            <MaterialCommunityIcons
              style={[styles.icon, { ...props.iconStyle }]}
              name="send"
              size={SIZE.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commentInput: {
    backgroundColor: COLOR.flatLight,
    marginHorizontal: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  textInput: {
    minHeight: 55,
    maxHeight: 240,
    marginHorizontal: 10,
    marginVertical: 5,
    fontFamily: FONT.robotoRegular,
    color: COLOR.flatDark,
    textAlignVertical: "top",
    backgroundColor: COLOR.flatLight,
  },
  buttonRow: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: COLOR.flatGreyer,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  iconContainer: {
    width: 50,
    alignItems: "center",
    backgroundColor: COLOR.boldLight,
    borderLeftColor: COLOR.flatLight,
    borderLeftWidth: 1,
  },
  icon: {
    color: COLOR.flatLight,
    backgroundColor: COLOR.boldLight,
  },
  wordLimit: {
    color: COLOR.flatLight,
    fontSize: SIZE.fontSizeSmall,
    marginHorizontal: 10,
  },
});

export default CommentInput;
