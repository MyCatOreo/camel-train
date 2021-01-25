import React, { useEffect } from "react";
import { View, StyleSheet, Dimensions, FlatList, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FONT from "../../constants/fonts";
import COLOR from "../../constants/colors";
import AppText from "../../components/AppText";
import { Trip } from "../../models/trip";
import { useDispatch, useSelector } from "react-redux";
import * as TripActions from "../../stores/actions/trips.action";
import { User } from "../../models/user";
import Environment from "./../../environment";
import { TouchableOpacity } from "react-native-gesture-handler";

const TripItemScreen = (props: any) => {
  return (
    <View>
      <AppText>items</AppText>
    </View>
  );
};

export default TripItemScreen;
