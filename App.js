import { StyleSheet, Text, View } from "react-native";
import React, {useCallback} from "react";
import AppNavigation from "./src/navigation";
import { useFonts } from "expo-font";
import * as Splash from "expo-splash-screen";


// Splash.preventAutoHideAsync();
const App = () => {
  // const [fontsLoaded] = useFonts({
  //   regular: require("./assets/fonts/Poppins-Regular.ttf"),
  //   light: require("./assets/fonts/Poppins-Light.ttf"),
  //   bold: require("./assets/fonts/Poppins-Bold.ttf"),
  //   semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  //   medium: require("./assets/fonts/Poppins-Medium.ttf"),
  //   extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
  // });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await Splash.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }
  return <AppNavigation />; 
};

export default App;
