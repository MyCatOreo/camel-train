import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import COLOR from "../constants/colors";
import TripListScreen from "../screens/trip/TripListScreen";
import TripItemScreen from "../screens/trip/TripItemScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();

const tripListScreenOptions = ({ route }: any) => ({
  tabBarIcon: ({ focused, color, size }: any) => {
    return <MaterialCommunityIcons name="map-clock" size={30} color={color} />;
  },
});

const tripItemScreenOptions = ({ route }: any) => ({
  tabBarIcon: ({ focused, color, size }: any) => {
    return (
      <MaterialCommunityIcons name="bag-personal" size={30} color={color} />
    );
  },
});

const contactsScreenOptions = ({ route }: any) => ({
  tabBarIcon: ({ focused, color, size }: any) => {
    return <MaterialCommunityIcons name="contacts" size={30} color={color} />;
  },
});

const BottomNavigation = () => {
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        activeBackgroundColor: COLOR.flatLight,
        activeTintColor: COLOR.boldLight,
        inactiveBackgroundColor: COLOR.flatLight,
        inactiveTintColor: COLOR.flatGreyer,
        showLabel: false,
      }}
    >
      <BottomTab.Screen
        options={tripListScreenOptions}
        name="tripList"
        component={TripListScreen}
      />
      <BottomTab.Screen
        options={tripItemScreenOptions}
        name="tripItem"
        component={TripItemScreen}
      />
      <BottomTab.Screen
        options={contactsScreenOptions}
        name="contacts"
        component={TripItemScreen}
      />
    </BottomTab.Navigator>
  );
};

export default BottomNavigation;
