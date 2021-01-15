import React from "react";
import { StyleSheet, Text } from "react-native";
import FONT from "../constants/fonts";
import COLOR from "../constants/colors";
import SIZE from "../constants/sizes";

const AppText = (props: {
  style?: {};
  numberOfLines?: number;
  children: any;
}) => {
  return (
    <Text
      style={[styles.text, { ...props.style }]}
      numberOfLines={props.numberOfLines ? props.numberOfLines : undefined}
    >
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: FONT.robotoRegular,
    color: COLOR.flatDark,
    fontSize: SIZE.fontSize,
  },
});

export default AppText;
