import React from "react";
import { StyleSheet } from "react-native";
import COLOR from "../constants/colors";
import AppText from "./AppText";
import { TouchableOpacity } from "react-native-gesture-handler";

const Tag = (props: {
  title: string;
  selected: boolean;
  color?: string;
  key?: any;
  onPressed: any;
}) => {
  return (
    <TouchableOpacity
      onPress={props.onPressed}
      style={[
        styles.tag,
        props.selected
          ? {
              backgroundColor: props.color,
              borderWidth: 0,
            }
          : { borderColor: props.color },
      ]}
    >
      <AppText
        style={
          props.selected
            ? { color: COLOR.flatLight, paddingHorizontal: 2 }
            : { color: props.color }
        }
      >
        {props.title}
      </AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tag: {
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    paddingHorizontal: 5,
    margin: 2,
    justifyContent: "center",
  },
});

export default Tag;
