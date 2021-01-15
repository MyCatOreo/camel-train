import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TripListScreen from "../screens/trip/TripListScreen";

const BottomTab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="tripList" component={TripListScreen} />
    </BottomTab.Navigator>
  );
};

export default BottomNavigation;
