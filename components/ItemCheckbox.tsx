import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import * as TripActions from "../stores/actions/trips.action";
import FONT from "../constants/fonts";
import COLOR from "../constants/colors";
import SIZE from "../constants/sizes";
import { UserItem } from "../models/item";
import { Trip } from "../models/trip";

const ItemCheckbox = (props: { item: UserItem }) => {
  const selectedUserId = "u1";
  const [status, setStatus] = useState(
    props.item.status
      ? props.item.status.find((status) => status.user.id === selectedUserId)
          ?.todo
      : ("todo" as "question" | "todo" | "done")
  );

  const dispatch = useDispatch();

  const selectedTripId = useSelector(
    (state: any) =>
      state.trips.trips.find((trip: Trip) => trip.id === state.trips.selectedId)
        .id
  );

  const selectedUser = "u1";

  const onIconPressed = () => {
    switch (status) {
      case "todo":
        setStatus("done");
        dispatch(
          TripActions.setItemDone(
            selectedTripId,
            props.item.item.id,
            selectedUser
          )
        );
        break;
      case "done":
        setStatus("question");
        dispatch(
          TripActions.setItemQuestion(
            selectedTripId,
            props.item.item.id,
            selectedUser
          )
        );
        break;
      case "question":
        setStatus("todo");
        dispatch(
          TripActions.setItemTodo(
            selectedTripId,
            props.item.item.id,
            selectedUser
          )
        );
        break;
      default:
        setStatus("todo");
        dispatch(
          TripActions.setItemTodo(
            selectedTripId,
            props.item.item.id,
            selectedUser
          )
        );
    }
  };

  return (
    <View style={styles.statusButton}>
      <Pressable onPress={() => onIconPressed()}>
        {(() => {
          switch (status) {
            case "todo":
              return (
                <MaterialCommunityIcons
                  name="checkbox-blank-outline"
                  size={36}
                  color="grey"
                />
              );
            case "question":
              return (
                <MaterialCommunityIcons
                  name="alert-box-outline"
                  size={36}
                  color="orange"
                />
              );
            case "done":
              return (
                <MaterialCommunityIcons
                  name="check-box-outline"
                  size={36}
                  color="darkgreen"
                />
              );
          }
        })()}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  statusButton: {},
});

export default ItemCheckbox;
