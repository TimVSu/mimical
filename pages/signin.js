// import react native
import {
  Button,
  Pressable,
  ScrollView,
  Switch,
  Text,
  TextInput,
  useColorScheme,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  light_primary_color,
  dark_primary_color,
  light_background_color,
  dark_background_color,
  green,
  gray5,
  dark_gray5,
} from "../components/styles.js";
// import components
import styles from "../components/styles.js";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignIn = () => {
  const [colorScheme, setColorScheme] = useState(useColorScheme());
  const [fontSize, setFontSize] = useState(17);
  //signin
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [PatientID, setPatientID] = useState("");

  const submit = async () => {
    var Data = {
      Email: Email,
      Password: Password,
    };

    //Check if account exists
    if (Email.length == 0 || Password.length == 0) {
      alert("Email fehlt");
    } else {
      await axios({
        method: "post",
        data: {
          Email: Email,
          Password: Password,
        },
        // Must be changed depending on device for testing
        url: "http://192.168.1.98:3000/api/signin",
      })
        .then((res) => {
          //console.log(res);
          setPatientID(JSON.stringify(res.data));
          // savePatientID();
        })
        .catch((err) => console.log(err));
      console.log(PatientID);

      //Navigate to next screen if authentications are valid
      //navigation.navigate("Menu");
    }
  };

  // save PatientID in storage
  const savePatientID = async () => {
    try {
      await AsyncStorage.mergeItem("@IDs", JSON.stringify(PatientID));
      console.log("saved completed succesfull");
    } catch (error) {
      console.log("cant save data to async storage");
    }
  };

  return (
    <View
      style={[
        { flex: 1 },
        {
          backgroundColor:
            colorScheme === "light"
              ? light_background_color
              : dark_background_color,
        },
        { justifyContent: "center" },
        { alignItems: "center" },
      ]}
    >
      <TextInput
        style={[
          { width: 256 },
          { padding: 16 },
          { margin: 16 },
          { backgroundColor: colorScheme === "light" ? gray5 : dark_gray5 },
          { fontSize: fontSize },
          { borderRadius: 8 },
        ]}
        placeholder="E-Mail"
        onChangeText={setEmail}
      />
      <TextInput
        style={[
          { width: 256 },
          { padding: 16 },
          { margin: 16 },
          { backgroundColor: colorScheme === "light" ? gray5 : dark_gray5 },
          { fontSize: fontSize },
          { borderRadius: 8 },
        ]}
        placeholder="Passwort"
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? green
              : colorScheme === "light"
              ? light_primary_color
              : dark_primary_color,
          },
          { padding: 16 },
          { margin: 16 },
          { borderRadius: 8 },
        ]}
        onPress={submit}
      >
        <Text style={[{ fontSize: fontSize }, { color: "white" }]}>
          Anmelden
        </Text>
      </Pressable>
    </View>
  );
};
export default SignIn;
