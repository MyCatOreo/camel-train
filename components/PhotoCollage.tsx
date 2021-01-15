import React, { useState, useRef, MutableRefObject } from "react";
import {
  View,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";

const PhotoCollage = (props: {
    style: any,
    images: string[];
    onPicturePressed?: any;
}) => {

  return (
    <View style={props.style}>
        <FlatList 
        contentContainerStyle={styles.photoCollage}
        data={props.images} 
        numColumns={(props.images.length === 2 || props.images.length === 4) ? 2 : 3}
        renderItem={(photo) => 
            (<View style={styles.photoContainer}>
                <Image
                style={styles.photo}
                source={require("../assets/mockup/post1.jpg")}
              />
            </View>)
        }
        keyExtractor={(index)=> index}/>
    </View>
  );
};

const styles = StyleSheet.create({
  photoCollage: {
    alignSelf: "center",
    alignItems: "flex-start"
  },
  photo: {
    height: 100,
    width: 100
  },
  photoContainer: {
    height: 100,
    width: 100,
    borderRadius: 10,
    overflow: "hidden",
    marginHorizontal: 5,
    marginVertical: 5,
    elevation: 5
  },
});

export default PhotoCollage;
