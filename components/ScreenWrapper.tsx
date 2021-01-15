import React from "react";
import { KeyboardAvoidingView, View } from "react-native";
import COLOR from "../constants/colors";

const ScreenWrapper = (props: { style: any; children: any }) => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: 24,
          backgroundColor: COLOR.flatGrey,
        }}
      ></View>
      <KeyboardAvoidingView style={props.style}>
        {props.children}
      </KeyboardAvoidingView>
    </View>
  );
};

export default ScreenWrapper;
