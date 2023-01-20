// authors: Maxim Torgovitski

// import react native
import { Text, useColorScheme, View } from "react-native";
import React from "react";

// import components
import Button from "../components/button";
import styles from "../components/styles";
import Logo from "../components/logo";

const Home = ({ navigation }) => {

  // light/dark mode
  const colorScheme = useColorScheme();
  const containerColor = colorScheme === 'light' ? styles.light_container : styles.dark_container;
  const textColor = colorScheme === 'light' ? styles.light_text : styles.dark_text;

  // return home page
  return (
    <View style={[{ flex: 1 }, containerColor, { justifyContent: "center" }, { alignItems: "center" },]}>
      <Logo></Logo>
      <Text style={[{ fontSize: 34 }, textColor, { textAlign: 'center' }, { margin: 16 }]}>Willkommen bei <Text style={{ fontWeight: 'bold' }}>mimical</Text></Text>
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