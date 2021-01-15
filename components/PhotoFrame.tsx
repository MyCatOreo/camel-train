import React, { useState, useRef, MutableRefObject } from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ImagePropTypes,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import COLOR from "../constants/colors";
import SIZE from "../constants/sizes";

const PhotoFrame = (props: {
  images: string[];
  photoWidth: number;
  snapWidth: number;
  onPicturePressed?: any;
}) => {
  const scrollViewRef = useRef() as MutableRefObject<ScrollView>;
  const [activeIndex, setActiveIndex] = useState(0);

  let albumn = props.images.map((image, index) => {
    switch (index) {
      case 0:
        return (
          <View
            style={{ ...styles.photoContainer, width: props.photoWidth }}
            key={index}
          >
            <TouchableNativeFeedback
              onPress={() =>
                props.onPicturePressed ? props.onPicturePressed() : {}
              }
            >
              <Image
                style={{ ...styles.photo, width: props.photoWidth }}
                source={require("../assets/mockup/post5.jpg")}
              />
            </TouchableNativeFeedback>
          </View>
        );

      case 1:
        return (
          <View
            style={{ ...styles.photoContainer, width: props.photoWidth }}
            key={index}
          >
            <TouchableNativeFeedback
              onPress={() =>
                props.onPicturePressed ? props.onPicturePressed() : {}
              }
            >
              <Image
                style={{ ...styles.photo, width: props.photoWidth }}
                source={require("../assets/mockup/post1.jpg")}
                key={image}
              />
            </TouchableNativeFeedback>
          </View>
        );

      case 2:
        return (
          <View
            style={{ ...styles.photoContainer, width: props.photoWidth }}
            key={index}
          >
            <TouchableNativeFeedback
              onPress={() =>
                props.onPicturePressed ? props.onPicturePressed() : {}
              }
            >
              <Image
                style={{ ...styles.photo, width: props.photoWidth }}
                source={require("../assets/mockup/post2.jpg")}
                key={image}
              />
            </TouchableNativeFeedback>
          </View>
        );

      case 3:
        return (
          <View
            style={{ ...styles.photoContainer, width: props.photoWidth }}
            key={index}
          >
            <TouchableNativeFeedback
              onPress={() =>
                props.onPicturePressed ? props.onPicturePressed() : {}
              }
            >
              <Image
                style={{ ...styles.photo, width: props.photoWidth }}
                source={require("../assets/mockup/post3.jpg")}
                key={image}
              />
            </TouchableNativeFeedback>
          </View>
        );

      case 4:
        return (
          <View
            style={{ ...styles.photoContainer, width: props.photoWidth }}
            key={index}
          >
            <TouchableNativeFeedback
              onPress={() =>
                props.onPicturePressed ? props.onPicturePressed() : {}
              }
            >
              <Image
                style={{ ...styles.photo, width: props.photoWidth }}
                source={require("../assets/mockup/post4.jpg")}
                key={image}
              />
            </TouchableNativeFeedback>
          </View>
        );
    }
  });

  let dots = props.images.map((image, index) => {
    return (
      <MaterialCommunityIcons
        name="square-medium"
        size={SIZE.bulletDot}
        color={index === activeIndex ? COLOR.flatLight : COLOR.flatDark}
        key={index}
      />
    );
  });

  const scrollMEndHandler = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const x = e.nativeEvent.contentOffset.x;
    const i = Math.floor((x + 1) / props.photoWidth);
    setActiveIndex(i);
  };

  return (
    <View>
      <ScrollView
        ref={scrollViewRef}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        disableIntervalMomentum={true}
        decelerationRate={0.8}
        snapToInterval={props.snapWidth}
        onMomentumScrollEnd={(e) => scrollMEndHandler(e)}
      >
        {albumn}
      </ScrollView>
      {props.images.length > 1 ? (
        <View style={styles.dotsContainer}>{dots}</View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  photo: {
    height: 250,
  },
  photoContainer: {
    height: 250,
    borderRadius: 10,
    overflow: "hidden",
    marginHorizontal: 20,
    marginVertical: 10,
    elevation: 5,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    position: "relative",
    marginTop: -10,
  },
});

export default PhotoFrame;
