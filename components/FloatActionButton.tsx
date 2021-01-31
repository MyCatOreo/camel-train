import React from "react";
import { StyleSheet, View } from "react-native";
import COLOR from "../constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Icon } from "expo";
import { TouchableHighlight } from "react-native-gesture-handler";

const FloatActionButton = (props: {
  iconName: Icon;
  color?: string;
  onButtonPress: any;
}) => {
  return (
    <View style={styles.floatButtonContainer}>
      <TouchableHighlight onPress={props.onButtonPress}>
        <View style={styles.floatButton}>
          <MaterialCommunityIcons
            name={props.iconName}
            size={36}
            color={props.color || COLOR.flatLight}
          />
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  floatButtonContainer: {
    position: "absolute",
    top: "85%",
    left: "80%",
    elevation: 5,
    height: 60,
    width: 60,
    borderRadius: 30,
    overflow: "hidden",
  },
  floatButton: {
    height: 60,
    width: 60,
    backgroundColor: COLOR.boldLight,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FloatActionButton;
