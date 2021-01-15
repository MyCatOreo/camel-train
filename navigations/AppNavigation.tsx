import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomNavigation from "./BottomNavigation";

const AppNavigator = (props: any) => {
  return (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
};

export default AppNavigator;
