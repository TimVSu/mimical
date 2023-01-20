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
import axios from "axios";
//import DropDownPicker from "react-native-dropdown-picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";

// import components
import styles from "../components/styles.js";
//import Selection from "../components/selection";

const SignUp = ({ navigation }) => {
  //styles
  const [colorScheme, setColorScheme] = useState(useColorScheme());
  const [fontSize, setFontSize] = useState(17);
  // light/dark mode
  const containerColor =
    colorScheme === "light" ? styles.light_container : styles.dark_container;
  const textColor =
    colorScheme === "light" ? styles.light_text : styles.dark_text;
  const optionsContainerColor = colorScheme === "light" ? gray5 : dark_gray5;
  const selectionColor =
    colorScheme === "light" ? light_background_color : dark_background_color;
  //signup
  const [Prename, setPrename] = useState("");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Gender, setGender] = useState("");
  const [Birthdate, setBirthdate] = useState("");
  const [Password, setPassword] = useState("");

  //dropdown menu
  // const [open, setOpen] = useState(false);
  // const [value, setValue] = useState(null);
  // const [items, setItems] = useState([
  //   { label: "Männclich", value: "m" },
  //   { label: "Weiblich", value: "w" },
  //   { label: "Divers", value: "d" },
  // ]);

  //Selection state variables
  const [optionIsEnabled1, setOptionIsEnabled1] = useState(false);
  const [optionIsEnabled2, setOptionIsEnabled2] = useState(false);
  const [optionIsEnabled3, setOptionIsEnabled3] = useState(false);

  //Selection onPress functions
  const selectOption1 = () => [
    setOptionIsEnabled1(true),
    setGender("m"),
    setOptionIsEnabled2(false),
    setOptionIsEnabled3(false),
  ];
  const selectOption2 = () => [
    setOptionIsEnabled1(false),
    setOptionIsEnabled2(true),
    setGender("w"),
    setOptionIsEnabled3(false),
  ];
  const selectOption3 = () => [
    setOptionIsEnabled1(false),
    setOptionIsEnabled2(false),
    setOptionIsEnabled3(true),
    setGender("d"),
  ];

  //date picker
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    //console.warn("A date has been picked: ", date);
    hideDatePicker();
    setBirthdate(date);
  };

  const submit = async () => {
    const Data = {
      Prename,
      Name,
      Email,
      Gender,
      Birthdate,
      Password,
    };

    var checkEmail = RegExp(
      /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i
    );

    var checkBirthday = RegExp(
      /\d{4}-(?:0?[1-9]|1[012])-(?:0?[1-9]|[12][0-9]|3[01])*/
    );

    //Check if Email is provided
    if (Email.length == 0 || Password.length == 0) {
      alert("Email fehlt");
    } else if (!checkEmail.test(Email)) {
      alert("Kein Email");
    }

    // Password validations
    else if (Password.length < 8) {
      alert("Mindestens 8 Zeichen");
    } else if (!/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(Password)) {
      alert("Mindestens ein Sonderzeichen");
    } else if (/[ ]/.test(Password)) {
      alert("Ohne Leerschritt");
      // } else if (Password !== ConfirmPw) {
      //   alert("Passwörter stimmen nicht überein");
    } else {
      if (
        Prename == 0 ||
        Prename.length == 0 ||
        Name == 0 ||
        Name.length == 0
      ) {
        alert("Vollständige Namen fehlen");
      } else {
        if (Gender == 0 || Birthdate == 0 || Birthdate.length == 0) {
          alert("Zusätzliche Daten fehlen");
        } else if (!checkBirthday.test(Birthdate)) {
          alert("Kein Datum im JJJJ-MM-TT Format");
        } else {
          await axios({
            method: "post",
            data: {
              Email: Email,
              Password: Password,
              Name: Name,
              Prename: Prename,
              Birthdate: Birthdate,
              Gender: Gender,
            },
            // Must be changed depending on device for testing
            url: "http://192.168.1.98:3000/api/signup",
          })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));

          alert("Erfolgreich! Bitte loggen Sie sich ein!");
          //Navigate to log in screen if authentications are valid
          navigation.navigate("Sign In");
        }
      }
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
        placeholder="Vorname"
        onChangeText={(Prename) => setPrename(Prename)}
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
        placeholder="Nachname"
        onChangeText={(Name) => setName(Name)}
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
        placeholder="E-Mail"
        onChangeText={(Email) => setEmail(Email)}
      />
      <>
        <View style={[styles.settings_item, containerColor]}>
          <View
            style={[
              { backgroundColor: optionsContainerColor },
              { padding: 2 },
              { borderRadius: 12 },
              { flexDirection: "row" },
            ]}
          >
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: optionIsEnabled1
                    ? selectionColor
                    : pressed
                    ? colorScheme === "light"
                      ? light_primary_color
                      : dark_primary_color
                    : null,
                },
                { padding: 8 },
                { margin: 4 },
                { borderRadius: 8 },
              ]}
              disabled={optionIsEnabled1}
              onPress={selectOption1}
            >
              <Text style={[{ fontSize: 17 }, textColor]}>männlich</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: optionIsEnabled2
                    ? selectionColor
                    : pressed
                    ? colorScheme === "light"
                      ? light_primary_color
                      : dark_primary_color
                    : null,
                },
                { padding: 8 },
                { margin: 4 },
                { borderRadius: 8 },
              ]}
              disabled={optionIsEnabled2}
              onPress={selectOption2}
            >
              <Text style={[{ fontSize: 17 }, textColor]}>weiblich</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: optionIsEnabled3
                    ? selectionColor
                    : pressed
                    ? colorScheme === "light"
                      ? light_primary_color
                      : dark_primary_color
                    : null,
                },
                { padding: 8 },
                { margin: 4 },
                { borderRadius: 8 },
              ]}
              disabled={optionIsEnabled3}
              onPress={selectOption3}
            >
              <Text style={[{ fontSize: 17 }, textColor]}>divers</Text>
            </Pressable>
          </View>
        </View>
      </>
      {/* <DropDownPicker
        placeholder="Geschlecht auswählen"
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onChangeValue={(Gender) => setGender(Gender)}
        style={{
          marginHorizontal: 50,
          borderColor: "dodgerblue",
        }}
      /> */}
      <View>
        {/* <Pressable
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
          onPress={showDatePicker}
        >
          <Text style={[{ fontSize: fontSize }, { color: "white" }]}>
            Geburtsdatum auswählen
          </Text>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            dateFormat="yyyy-mm-dd"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </Pressable> */}
        <TextInput
          style={[
            { width: 256 },
            { padding: 16 },
            { margin: 16 },
            { backgroundColor: colorScheme === "light" ? gray5 : dark_gray5 },
            { fontSize: fontSize },
            { borderRadius: 8 },
          ]}
          placeholder="Geburtsdatum (JJJJ-MM-TT)"
          onChangeText={(Birthdate) => setBirthdate(Birthdate)}
        />
      </View>
      <TextInput
        style={[
          { width: 256 },
          { padding: 16 },
          { margin: 16 },
          { backgroundColor: colorScheme === "light" ? gray5 : dark_gray5 },
          { fontSize: fontSize },
          { borderRadius: 8 },
        ]}
        secureTextEntry={true}
        placeholder="Passwort"
        onChangeText={(Password) => setPassword(Password)}
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
        secureTextEntry={true}
        placeholder="Passwort wiederholen"
        // onChangeText={setPassword}
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
        onPress={() => {
          submit();
        }}
      >
        <Text style={[{ fontSize: fontSize }, { color: "white" }]}>
          Registrieren
        </Text>
      </Pressable>
    </View>
  );
};

export default SignUp;
