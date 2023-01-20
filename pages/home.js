// authors: Tim Suchan, Maxim Torgovitski

// import react native
import { useColorScheme, View } from "react-native";
import React from "react";

// import components
import Button from "../components/button";
import styles from "../components/styles";
import Logo from "../components/logo";

// return home page
const Home = ({ navigation }) => {

  // light/dark mode
  const colorScheme = useColorScheme();
  const containerColor = colorScheme === "light" ? styles.light_container : styles.dark_container;

  return (
    <View style={[{ flex: 1 }, containerColor, { justifyContent: "center" }, { alignItems: "center" },]}>
      <Logo></Logo>
      <View style={{ margin: 16 }}>
        <View style={{ margin: 8 }}>
          <Button
            label="Anmelden"
            navigation={navigation}
            target={"Sign In"}
          />
        </View>
        <View style={{ margin: 8 }}>
          <Button
            label="Registrieren"
            navigation={navigation}
            target={"Sign Up"}
          />
        </View>
        <View style={{ margin: 8 }}>
          <Button
            label="Überspringen"
            navigation={navigation}
            target={"Menu"}
          />
        </View>
      </View>
    </View>
  );

};

export default Home;