import React from "react";
import {
  HeaderButton,
  HeaderButtonProps,
} from "react-navigation-header-buttons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SIZE from "../constants/sizes";
import COLOR from "../constants/colors";

const AppHeaderButton = (props: HeaderButtonProps) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={MaterialCommunityIcons}
      iconSize={SIZE.icon}
      color={COLOR.flatDark}
    />
  );
};

export default AppHeaderButton;
