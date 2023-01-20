// authors: Tim Suchan, Maxim Torgovitski

// import react native
import { useColorScheme, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";

// import components
import Button from "../components/button";
import styles from "../components/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import Logo from "../components/logo";

// return home page
const Home = ({ navigation }) => {
  //VARIABLES:
  //===============================================================================================================================================

  // light/dark mode
  const colorScheme = useColorScheme();
  const containerColor =
    colorScheme === "light" ? styles.light_container : styles.dark_container;
  const squareColor =
    colorScheme === "light" ? styles.light_square : styles.dark_square;
  const textColor =
    colorScheme === "light" ? styles.light_text : styles.dark_text;

  return (
    <View style={[{ flex: 1 }, containerColor]}>
      <View
        style={[
          { flex: 1 },
          containerColor,
          { justifyContent: "center" },
          { alignItems: "center" },
        ]}
      >
        <Logo></Logo>

        <View>
          <Button
            label="Einloggen"
            navigation={navigation}
            target={"Sign In"}
          />
          <Button
            label="Registrieren"
            navigation={navigation}
            target={"Sign Up"}
          />
          <Button label="Skip Login" navigation={navigation} target={"Menu"} />
        </View>
      </View>
    </View>
  );
};

export default Home;
