import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import AppNavigator from "./navigations/AppNavigation";
import { appReducer } from "./stores";

const fetchFonts = () => {
  return Font.loadAsync({
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "raleway-regular": require("./assets/fonts/Raleway-Regular.ttf"),
    "knewave-regular": require("./assets/fonts/Knewave-Regular.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  const store = createStore(appReducer);

  if (!fontLoaded) {
    return (
      <Provider store={store}>
        <AppLoading
          startAsync={fetchFonts}
          onFinish={() => setFontLoaded(true)}
          onError={(error: any) => console.log(error)}
        />
      </Provider>
    );
  }

  return <AppNavigator />;
}
