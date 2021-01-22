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
import { User } from "../../models/user";
import { Item } from "../../models/item";

const MemberItem = (props: { user: User; isOwner?: boolean }) => {
  return (
    <View style={styles.memberItem}>
      <Image
        style={props.isOwner ? styles.ownerAvatar : styles.memberAvatar}
        source={{ uri: props.user.avatar }}
      />
      <AppText>{props.user.name}</AppText>
    </View>
  );
};

const ItemItem = (props: { item: Item }) => {
  return (
    <View style={styles.itemItem}>
      <AppText>{props.item.name}</AppText>
    </View>
  );
};

const Card = (props: { children: any }) => {
  return (
    <View style={styles.card}>
      <View>{props.children}</View>
    </View>
  );
};

const TripItem = (props: { trip: Trip }) => {
  return (
    <View>
      <AppText>{props.trip.id}</AppText>
      <AppText>{props.trip.name}</AppText>
      <AppText>{props.trip.date}</AppText>

      <View style={styles.membersContainer}>
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

      <Card>
        <AppText>{JSON.stringify(props.trip.destination)}</AppText>
      </Card>

      <View style={styles.itemsContainer}>
        {props.trip.items.map((item, i) => {
          return <ItemItem item={item} key={item.id}></ItemItem>;
        })}
      </View>

      <AppText>{JSON.stringify(props.trip.items[0])}</AppText>
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
  rowContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    flexWrap: "wrap",
  },
  tripItem: {},
  membersContainer: { flexDirection: "row" },
  memberItem: {
    flex: 1,
    justifyContent: "flex-start",
    alignContent: "center",
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
  itemsContainer: {},
  itemItem: {},
  card: {
    padding: 20,
    margin: 6,
    borderRadius: 16,
    borderWidth: 1,
    // elevation: 5,
  },
});

export default TripListScreen;
