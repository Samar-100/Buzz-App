import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import InstagramScreen from "./screens/in";
import FacebookScreen from "./screens/fb";

export default function App() {
  return (
    <View>
      <AppContainer />
    </View>
  );
}

const TabNavigator = createBottomTabNavigator({
  Instagram: { screen: InstagramScreen },
  Facebook: { screen: FacebookScreen },
});

const AppContainer = createAppContainer(TabNavigator);
