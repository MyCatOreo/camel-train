import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
  SectionList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FONT from "../../constants/fonts";
import COLOR from "../../constants/colors";
import AppText from "../../components/AppText";
import { Trip } from "../../models/trip";
import { useDispatch, useSelector } from "react-redux";
import * as TripActions from "../../stores/actions/trips.action";
import { User } from "../../models/user";
import Environment from "./../../environment";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { UserItem } from "../../models/item";
import { items } from "../../assets/data/items";

const ItemItem = (props: { item: UserItem }) => {
  return (
    <View>
      <AppText>{JSON.stringify(props.item)}</AppText>
    </View>
  );
};

const groupBy = (items: any[], key: any) => {
  const grouped = items.reduce(
    (result, item) => ({
      ...result,
      [item[key]]: [...(result[item[key]] || []), item],
    }),
    {}
  );

  return Object.entries(grouped).map((group) => {
    return { category: group[0], data: group[1] };
  });
};

const TripItemScreen = (props: any) => {
  const trip: Trip = useSelector(
    (state: any) =>
      state.trips.trips
        .filter((trip: Trip) => trip.active)
        .map((activeTrip: Trip) => {
          console.log({ groupedItems: groupBy(activeTrip.items, "category") });
          return {
            ...activeTrip,
            groupedItems: groupBy(activeTrip.items, "category"),
          };
        })[0]
  );

  const teamItemCount = trip.items.length;
  const teamToPackCount = trip.items.filter(
    (item: UserItem) => item.status === "To Pack"
  ).length;
  const teamToBuyCount = trip.items.filter(
    (item: UserItem) => item.status === "To Buy"
  ).length;

  const myItems = trip.items.filter(
    (item: UserItem) => item.user && item.user.id === "u1"
  ); //TODO: replaced by logged in id
  const selfItemCount = myItems.length;
  const selfToPackCount = myItems.filter(
    (item: UserItem) => item.status === "To Pack"
  ).length;
  const selfToBuyCount = myItems.filter(
    (item: UserItem) => item.status === "To Buy"
  ).length;

  return (
    <View style={styles.tripListScreen}>
      <View>
        <View style={styles.tripHeader}>
          <AppText style={styles.tripTitle}>{trip.name}</AppText>
        </View>

        <View style={styles.tripItemStatus}>
          <View style={styles.row}>
            <AppText style={styles.label}>Team </AppText>
            <AppText style={styles.label}>
              {teamItemCount - teamToPackCount - teamToBuyCount} /{" "}
              {teamItemCount}
            </AppText>
          </View>

          <View style={styles.row}>
            <AppText style={styles.label}>My Items </AppText>
            <AppText style={styles.label}>
              {selfItemCount - selfToPackCount - selfToBuyCount} /{" "}
              {selfItemCount}
            </AppText>
          </View>
        </View>

        {/* <AppText>{JSON.stringify(trip.groupedItems)}</AppText> */}
        <SectionList
          sections={trip.groupedItems || [{ category: "", data: [] }]}
          keyExtractor={(item, index) => index + item.id}
          renderItem={({ item }) => (
            <AppText>{JSON.stringify(item.name)}</AppText>
          )}
          renderSectionHeader={({ section: { category } }) => (
            <AppText>{category}</AppText>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tripListScreen: {
    flex: 1,
    backgroundColor: COLOR.flatLight,
  },
  tripHeader: {
    backgroundColor: COLOR.themeDark,
  },
  tripTitle: {
    fontSize: 30,
    color: COLOR.flatLighter,
    padding: 20,
  },
  tripDate: {
    fontSize: 20,
    color: COLOR.flatLighter,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  tripItem: {},
  row: { flexDirection: "row" },
  tripItemStatus: {
    backgroundColor: COLOR.themeDark,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  label: {
    color: COLOR.flatLight,
    fontSize: 20,
  },
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

export default TripItemScreen;
