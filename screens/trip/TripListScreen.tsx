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

const MemberItem = (props: { user: User; isOwner?: boolean }) => {
  return (
    <View style={styles.memberItem}>
      <Image
        style={props.isOwner ? styles.ownerAvatar : styles.memberAvatar}
        source={{ uri: props.user.avatar }}
      />
      {/* <AppText>{props.user.name}</AppText> */}
    </View>
  );
};

const TripItem = (props: { trip: Trip }) => {
  const teamItemCount = props.trip.items.length;
  const teamToPackCount = props.trip.items.filter(
    (item) => item.status === "To Pack"
  ).length;
  const teamToBuyCount = props.trip.items.filter(
    (item) => item.status === "To Buy"
  ).length;

  const myItems = props.trip.items.filter(
    (item) => item.user && item.user.id === "u1"
  ); //TODO: replaced by logged in id
  const selfItemCount = myItems.length;
  const selfToPackCount = myItems.filter((item) => item.status === "To Pack")
    .length;
  const selfToBuyCount = myItems.filter((item) => item.status === "To Buy")
    .length;

  const imageString = `https://maps.googleapis.com/maps/api/staticmap?&zoom=11&size=${400}x${250}&maptype=roadmap
    &markers=color:red%7Clabel:S%7C${props.trip.destination[0].mapLatitude},${
    props.trip.destination[0].mapLongitude
  }
    &key=${Environment.googleApiKey}`;

  return (
    <View>
      <View style={styles.tripHeader}>
        <AppText style={styles.tripTitle}>{props.trip.name}</AppText>
        <AppText style={styles.tripDate}>{props.trip.date}</AppText>
      </View>

      <View style={[styles.row, styles.membersRow]}>
        {props.trip.members.map((member, i) => {
          return (
            <MemberItem
              user={member}
              key={member.id}
              isOwner={member.id === props.trip.user.id}
            ></MemberItem>
          );
        })}
      </View>

      <Image source={{ uri: imageString }} style={styles.mapImage} />
      {/* <AppText>{props.trip.destination[0].name}</AppText> */}

      <View style={styles.tripItemStatus}>
        <View style={styles.row}>
          <AppText style={styles.label}>Team </AppText>
          <AppText style={styles.label}>
            {teamItemCount - teamToPackCount - teamToBuyCount} / {teamItemCount}
          </AppText>
        </View>

        <View style={styles.row}>
          <AppText style={styles.label}>My Items </AppText>
          <AppText style={styles.label}>
            {selfItemCount - selfToPackCount - selfToBuyCount} / {selfItemCount}
          </AppText>
        </View>
      </View>
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
      <View style={styles.floatButtonContainer}>
        <TouchableOpacity>
          <View style={styles.floatButton}>
            <MaterialCommunityIcons
              name="plus"
              size={36}
              color={COLOR.flatLight}
            />
          </View>
        </TouchableOpacity>
      </View>
      <FlatList
        data={trips}
        renderItem={(trip) => <TripItem trip={trip.item as Trip}></TripItem>}
        keyExtractor={(item) => item.id}
      />
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
  memberItem: {
    justifyContent: "flex-start",
    alignContent: "center",
  },
  membersRow: {
    backgroundColor: COLOR.themeDark,
    justifyContent: "space-around",
    paddingBottom: 20,
  },
  ownerAvatar: {
    height: 80,
    width: 80,
    backgroundColor: COLOR.boldDark,
    borderRadius: 16,
  },
  memberAvatar: {
    height: 80,
    width: 80,
    backgroundColor: COLOR.themeDarkTint,
    borderRadius: 16,
  },
  mapImage: {
    width: Dimensions.get("window").width,
    height: 250,
  },
  card: {
    padding: 20,
    margin: 6,
    borderRadius: 16,
    borderWidth: 1,
    // elevation: 5,
  },
  tripItemStatus: {
    backgroundColor: COLOR.themeDark,
    padding: 10,
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

export default TripListScreen;
