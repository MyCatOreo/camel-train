import React from "react";
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

const TripListScreen = (props: { navigation?: any }) => {
  const dummy = ["something", "something else", "another thing", "last one"];
  return (
    <View style={styles.tripListScreen}>
      <FlatList
        data={dummy}
        renderItem={(post) => (
          <View style={styles.rowContainer}>
            <View>
              <AppText>{post.item}</AppText>
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
