import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FONT from "../../constants/fonts";
import COLOR from "../../constants/colors";
import AppText from "../../components/AppText";
import SIZE from "../../constants/sizes";
import { Trip } from "../../models/trip";
import { useDispatch, useSelector } from "react-redux";
import * as TripActions from "../../stores/actions/trips.action";

const TripItem = (props: { trip: Trip }) => {
  return (
    <View>
      <AppText>{props.trip.name}</AppText>
    </View>
  );
};

const TripListScreen = (props: { navigation?: any }) => {
  const trips = useSelector((state: any) => state.trips.trips);

  const dispatch = useDispatch();

  useEffect(() => {
    loadTrips();
  }, [dispatch]); //TODO: use real userId

  const loadTrips = async () => {
    try {
      await dispatch(TripActions.loadTrips("u1"));
    } catch (error) {
      console.log("handle error here", error);
    }
  };

  return (
    <View style={styles.tripListScreen}>
      <Text>11</Text>
      <Text>11</Text>
      {/* <Text>{trips[0].id}</Text> */}
      <FlatList
        data={trips}
        renderItem={(trip) => (
          <View style={styles.rowContainer}>
            <View>
              <AppText>{JSON.stringify(trip)}</AppText>
            </View>
          </View>
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tripListScreen: {
    flex: 1,
    backgroundColor: COLOR.flatLight,
  },
  rowContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    flexWrap: "wrap",
  },
});

export default TripListScreen;
