import React from "react";
import { View } from "react-native";
import COLOR from "../constants/colors";

const VerticalDivider = (props: { width: number | string }) => {
  return (
    <View
      style={{
        borderBottomColor: COLOR.flatGrey,
        borderBottomWidth: 1,
        width: props.width,
        marginVertical: 5,
      }}
    />
  );
};

export default VerticalDivider;
