import React, { useState } from "react";
import { View, StyleSheet, SectionList } from "react-native";
import FONT from "../../constants/fonts";
import COLOR from "../../constants/colors";
import AppText from "../../components/AppText";
import { Trip } from "../../models/trip";
import { useDispatch, useSelector } from "react-redux";
import * as TripActions from "../../stores/actions/trips.action";
import Environment from "./../../environment";
import { UserItem, UserItemStatus } from "../../models/item";
import Avatar from "../../components/Avatar";
import ItemCheckbox from "../../components/ItemCheckbox";

const ListItem = (props: { item: UserItem }) => {
  const dispatch = useDispatch();

  // const selectedTripId = useSelector(
  //   (state: any) =>
  //     state.trips.trips.find((trip: Trip) => trip.id === state.trips.selectedId)
  //       .id
  // );

  const selectStatus: UserItemStatus[] = useSelector(
    (state: any) =>
      state.trips.trips
        .find((trip: Trip) => trip.id === state.trips.selectedId)
        .items.find((item: UserItem) => item.item.id === props.item.item.id)
        .status
  );

  return (
    <View style={[styles.listItem]}>
      <View style={styles.row}>
        <View style={styles.listItemNameContainer}>
          <AppText style={styles.listItemName}>{props.item.item.name}</AppText>
        </View>
        <ItemCheckbox item={props.item} />
      </View>

      <View style={[styles.row, { height: 44 }]}>
        {props.item.status ? (
          props.item.status.map((x: UserItemStatus) => {
            return (
              <View key={x.user.id}>
                <Avatar
                  user={x.user}
                  mode="small"
                  todo={
                    selectStatus.find((status) => status.user.id === x.user.id)!
                      .todo
                  }
                />
              </View>
            );
          })
        ) : (
          <View>
            <AppText>I'll bring this!</AppText>
          </View>
        )}
      </View>
    </View>
  );
};

const ListHeader = (props: { header: string }) => {
  return (
    <View style={styles.listHeader}>
      <AppText style={styles.headerText}>{props.header}</AppText>
    </View>
  );
};

const groupItemsBy = (items: any[], key: any) => {
  const grouped = items.reduce(
    (result, item) => ({
      ...result,
      [item.item[key]]: [...(result[item.item[key]] || []), item],
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
        .filter((trip: Trip) => trip.id === state.trips.selectedId)
        .map((activeTrip: Trip) => {
          return {
            ...activeTrip,
            groupedItems: groupItemsBy(activeTrip.items, "category"),
          };
        })[0]
  );

  const teamItemCount = trip.items.length;
  const teamToDoCount = trip.items.filter(
    (item) =>
      item.status && item.status.some((x: UserItemStatus) => x.todo === "todo")
  ).length;
  const teamQuestionCount = trip.items.filter(
    (item) =>
      item.status &&
      item.status.some((x: UserItemStatus) => x.todo === "question")
  ).length;

  const myItems = trip.items.filter(
    (item) =>
      item.status && item.status.some((x: UserItemStatus) => x.user.id === "u1")
  ); //TODO: replaced by logged in id
  const selfItemCount = myItems.length;
  const selfToDoCount = myItems.filter(
    (item) =>
      item.status &&
      item.status.some(
        (x: UserItemStatus) => x.todo === "todo" && x.user.id === "u1"
      )
  ).length;
  const selfQuestionCount = myItems.filter(
    (item) =>
      item.status &&
      item.status.some(
        (x: UserItemStatus) => x.todo === "question" && x.user.id === "u1"
      )
  ).length;

  return (
    <View style={styles.tripListScreen}>
      <View style={styles.tripHeaderContainer}>
        <View style={styles.tripHeader}>
          <AppText style={styles.tripTitle}>{trip.name}</AppText>
        </View>

        <View style={styles.tripItemStatus}>
          <View style={styles.row}>
            <AppText style={styles.label}>Team </AppText>
            <AppText style={styles.label}>
              {teamItemCount - teamToDoCount - teamQuestionCount} /
              {teamItemCount}
            </AppText>
          </View>

          <View style={styles.row}>
            <AppText style={styles.label}>My Items </AppText>
            <AppText style={styles.label}>
              {selfItemCount - selfToDoCount - selfQuestionCount} /
              {selfItemCount}
            </AppText>
          </View>
        </View>
      </View>

      <View style={styles.sectionListContainer}>
        <SectionList
          sections={trip.groupedItems || [{ category: "", data: [] }]}
          keyExtractor={(item, index) => index + item.item.id}
          renderItem={({ item }) => <ListItem item={item} />}
          renderSectionHeader={({ section: { category } }) => (
            <ListHeader header={category} />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tripListScreen: {
    flex: 1,
    backgroundColor: COLOR.themeDarkTint,
  },
  tripHeaderContainer: {
    elevation: 5,
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
  row: { flexDirection: "row", alignItems: "center" },
  tripItemStatus: {
    backgroundColor: COLOR.themeDark,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  label: {
    color: COLOR.flatLight,
    fontSize: 20,
  },
  sectionListContainer: {
    //  flex: 1,
  },
  listHeader: {
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  listItemNameContainer: {
    width: "85%",
  },
  headerText: {
    fontSize: 20,
    color: COLOR.flatLight,
  },
  listItem: {
    borderColor: COLOR.flatGrey,
    marginHorizontal: 25,
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 5,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: COLOR.flatLight,
  },
  listItemName: {
    color: COLOR.themeDark,
    fontSize: 18,
  },
  listItemDesc: {
    color: COLOR.themeDarkTint,
  },
});

export default TripItemScreen;
