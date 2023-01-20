// author: Maxim Torgovitski

// import react native
import { Button, Pressable, ScrollView, Switch, Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

// import components
import NavBar from '../components/nav_bar.js';
import TabBar from '../components/tab_bar.js';
import styles from '../components/styles.js';
import { light_primary_color, dark_primary_color, light_background_color, dark_background_color, green, gray3, gray5, gray6, dark_gray3, dark_gray5, dark_gray6 } from '../components/styles.js';

// default config
let config = {
  language: "german",
  largeFont: false,
  fontSize: 17,
  camera: true,
  notifications: false,
  text: true,
  narrator: true,
  music: true
}

//@Author: Tim Suchan
//deletes all level data from Async Storage 
const resetLevels = async () => {
  try {
    await AsyncStorage.removeItem('@completions')
    await AsyncStorage.removeItem('lastTask')
  }
  catch (e) { }
}

const SettingsPage = ({ navigation }) => {

  // light/dark mode
  const colorScheme = useColorScheme();
  const containerColor = colorScheme === 'light' ? styles.light_container : styles.dark_container;
  const textColor = colorScheme === 'light' ? styles.light_text : styles.dark_text;
  const optionsContainerColor = colorScheme === 'light' ? light_background_color : dark_background_color;
  const selectionColor = colorScheme === 'light' ? light_primary_color : dark_primary_color;
  const activeIconColor = colorScheme === 'light' ? light_primary_color : dark_primary_color;
  const inactiveIconColor = colorScheme === 'light' ? gray5 : dark_gray5;
  const borderColor = colorScheme === "light" ? gray5 : dark_gray5;

  // store language data in async storage
  const storeLanguageData = async (value) => {
    try {
      config.language = value;
      await AsyncStorage.setItem('settings', JSON.stringify(config));
    } catch (error) {
      // error storing data
    }
  }

  // store large font data in async storage
  const storeLargeFontData = async (value) => {
    try {
      config.largeFont = value;
      await AsyncStorage.setItem('settings', JSON.stringify(config));
    } catch (error) {
      // error storing data
    }
  }

  // store font size data in async storage
  const storeFontSizeData = async (value) => {
    try {
      config.fontSize = value;
      await AsyncStorage.setItem('settings', JSON.stringify(config));
    } catch (error) {
      // error storing data
    }
  }

  // store camera data in async storage
  const storeCameraData = async (value) => {
    try {
      config.camera = value;
      await AsyncStorage.setItem('settings', JSON.stringify(config));
    } catch (error) {
      // error storing data
    }
  }

  // store notifications data in async storage
  const storeNotificationsData = async (value) => {
    try {
      config.notifications = value;
      await AsyncStorage.setItem('settings', JSON.stringify(config));
    } catch (error) {
      // error storing data
    }
  }

  // store text data in async storage
  const storeTextData = async (value) => {
    try {
      config.text = value;
      await AsyncStorage.setItem('settings', JSON.stringify(config));
    } catch (error) {
      // error storing data
    }
  }

  // store narrator data in async storage
  const storeNarratorData = async (value) => {
    try {
      config.narrator = value;
      await AsyncStorage.setItem('settings', JSON.stringify(config));
    } catch (error) {
      // error storing data
    }
  }

  // store music data in async storage
  const storeMusicData = async (value) => {
    try {
      config.music = value;
      await AsyncStorage.setItem('settings', JSON.stringify(config));
    } catch (error) {
      // error storing data
    }
  }

  // language state variables
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [language, setLanguage] = useState("german");
  const toggleSwitch1 = () => [
    setIsEnabled1(previousState => !previousState),
    setLanguage(isEnabled1 ? "german" : "english"),
    storeLanguageData(isEnabled1 ? "german" : "english")
  ];

  // font size state variables
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [fontSize, setFontSize] = useState(17);
  const toggleSwitch2 = () => [
    setIsEnabled2(previousState => !previousState),
    setFontSize(isEnabled2 ? 17 : 23),
    storeFontSizeData(isEnabled2 ? 17 : 23),
    storeLargeFontData(isEnabled2 ? false : true)
  ];

  // camera state variable
  const [isEnabled3, setIsEnabled3] = useState(true);
  const toggleSwitch3 = () => [
    setIsEnabled3(previousState => !previousState),
    storeCameraData(!isEnabled3)
  ];

  // notifications state variable
  const [isEnabled4, setIsEnabled4] = useState(false);
  const toggleSwitch4 = () => [
    setIsEnabled4(previousState => !previousState),
    storeNotificationsData(!isEnabled4)
  ];

  // appearance state variable
  const [isEnabled5, setIsEnabled5] = useState(false);
  const toggleSwitch5 = () => [
    setIsEnabled5(previousState => !previousState)
  ];

  // text state variable
  const [isEnabled6, setIsEnabled6] = useState(true);
  const toggleSwitch6 = () => [
    setIsEnabled6(previousState => !previousState),
    storeTextData(!isEnabled6)
  ];

  // narrator state variable
  const [isEnabled7, setIsEnabled7] = useState(true);
  const toggleSwitch7 = () => [
    setIsEnabled7(previousState => !previousState),
    storeNarratorData(!isEnabled7)
  ];

  // music state variable
  const [isEnabled8, setIsEnabled8] = useState(true);
  const toggleSwitch8 = () => [
    setIsEnabled8(previousState => !previousState),
    storeMusicData(!isEnabled8)
  ];

  // retrieve data for state variables
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('settings');
      const value = JSON.parse(jsonValue);
      if (value !== null) {
        setIsEnabled1(value.language == "german" ? false : true);
        setFontSize(value.fontSize);
        setIsEnabled2(value.largeFont);
        setIsEnabled3(value.camera);
        setIsEnabled4(value.notifications);
        // setIsEnabled5(value.appearance == "light" ? false : true);
        setIsEnabled6(value.text);
        setIsEnabled7(value.narrator);
        setIsEnabled8(value.music);
      }
    } catch (error) {
      // error retrieving data
    }
  }

  // get data on render
  useEffect(() => {
    getData();
  }, []);

  // get data on render
  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );

  // language settings component
  const LanguageSettings = () => {
    return (
      <View style={[styles.settings_item, containerColor]}>
        <Text style={[{ fontSize: fontSize }, textColor]}>{isEnabled1 ? "Language" : "Sprache"}</Text>
        <View style={[{ backgroundColor: optionsContainerColor }, { padding: 2 }, { borderRadius: 12 }, { flexDirection: 'row' }]}>
          <TouchableOpacity style={[{ backgroundColor: !isEnabled1 ? selectionColor : colorScheme === 'light' ? gray6 : dark_gray6 }, { padding: 12 }, { margin: 4 }, { borderRadius: 16 }]} disabled={!isEnabled1} onPress={toggleSwitch1}>
            <Text style={[{ fontSize: fontSize }, { color: isEnabled1 ? colorScheme === 'light' ? 'black' : 'white' : 'white' }]}>Deutsch</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[{ backgroundColor: isEnabled1 ? selectionColor : colorScheme === 'light' ? gray6 : dark_gray6 }, { padding: 12 }, { margin: 4 }, { borderRadius: 16 }]} disabled={isEnabled1} onPress={toggleSwitch1}>
            <Text style={[{ fontSize: fontSize }, { color: !isEnabled1 ? colorScheme === 'light' ? 'black' : 'white' : 'white' }]}>English</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // font settings component
  const FontSettings = () => {
    return (
      <View style={[styles.settings_item, containerColor]}>
        <View>
          <Text style={[{ fontSize: fontSize }, textColor]}>{isEnabled1 ? "Large Font" : "Große Schrift"}</Text>
        </View>
        <Switch
          trackColor={{ false: "#767577", true: green }}
          thumbColor={'white'}
          // ios_backgroundColor={"#3e3e3e"}
          onValueChange={toggleSwitch2}
          value={isEnabled2}
        />
      </View>
    );
  }

  // camera settings component
  const CameraSettings = () => {
    return (
      <View style={[styles.settings_item, containerColor]}>
        <Text style={[{ fontSize: fontSize }, { color: colorScheme === 'light' ? gray3 : dark_gray3 }]}>{isEnabled1 ? "Camera" : "Kamera"}</Text>
        <Switch
          trackColor={{ false: "#767577", true: green }}
          thumbColor={'white'}
          // ios_backgroundColor={"#3e3e3e"}
          onValueChange={toggleSwitch3}
          value={isEnabled3}
          disabled={true}
        />
      </View>
    );
  }

  // notifications settings component
  const NotificationsSettings = () => {
    return (
      <View style={[styles.settings_item, containerColor]}>
        <Text style={[{ fontSize: fontSize }, { color: colorScheme === 'light' ? gray3 : dark_gray3 }]}>{isEnabled1 ? "Notifications" : "Mitteilungen"}</Text>
        <Switch
          trackColor={{ false: "#767577", true: green }}
          thumbColor={'white'}
          // ios_backgroundColor={"#3e3e3e"}
          onValueChange={toggleSwitch4}
          value={isEnabled4}
          disabled={true}
        />
      </View>
    );
  }

  // appearance settings component
  const AppearanceSettings = () => {
    return (
      <View style={[styles.settings_item, containerColor]}>
        <Text style={[{ fontSize: fontSize }, textColor]}>{isEnabled1 ? "Dark Mode" : "Dunkelmodus"}</Text>
        <Text style={[{ fontSize: fontSize }, { color: colorScheme === 'light' ? gray3 : dark_gray3 }]}>{isEnabled1 ? "System Settings" : "Systemeinstellungen"}</Text>
      </View>
    );
  }

  // text settings component
  const TextSettings = () => {
    return (
      <View style={[styles.settings_item, containerColor]}>
        <Text style={[{ fontSize: fontSize }, { color: colorScheme === 'light' ? gray3 : dark_gray3 }]}>{isEnabled1 ? "Text" : "Text"}</Text>
        <Switch
          trackColor={{ false: "#767577", true: green }}
          thumbColor={'white'}
          // ios_backgroundColor={"#3e3e3e"}
          onValueChange={toggleSwitch6}
          value={isEnabled6}
          disabled={true}
        />
      </View>
    );
  }

  // narrator settings component
  const NarratorSettings = () => {
    return (
      <View style={[styles.settings_item, containerColor]}>
        <Text style={[{ fontSize: fontSize }, { color: colorScheme === 'light' ? gray3 : dark_gray3 }]}>{isEnabled1 ? "Narrator" : "Sprecherin"}</Text>
        <Switch
          trackColor={{ false: "#767577", true: green }}
          thumbColor={'white'}
          // ios_backgroundColor={"#3e3e3e"}
          onValueChange={toggleSwitch7}
          value={isEnabled7}
          disabled={true}
        />
      </View>
    );
  }

  // music settings component
  const MusicSettings = () => {
    return (
      <View style={[styles.settings_item, containerColor]}>
        <Text style={[{ fontSize: fontSize }, { color: colorScheme === 'light' ? gray3 : dark_gray3 }]}>{isEnabled1 ? "Music" : "Musik"}</Text>
        <Switch
          trackColor={{ false: "#767577", true: green }}
          thumbColor={'white'}
          // ios_backgroundColor={"#3e3e3e"}
          onValueChange={toggleSwitch8}
          value={isEnabled8}
          disabled={true}
        />
      </View>
    );
  }

  // reset progress component
  const ResetProgress = () => {
    return (
      <View style={[styles.settings_item, containerColor]}>
        <TouchableOpacity onPress={() => resetLevels()}>
          <Text style={[{ fontSize: fontSize }, { color: colorScheme === 'light' ? light_primary_color : dark_primary_color }]}>{isEnabled1 ? "Reset Progress" : "Fortschritt zurücksetzen"}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // return settings page
  return (
    <View style={[{ flex: 1 }, containerColor]}>
      <NavBar page_title={isEnabled1 ? "Settings" : "Einstellungen"} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <LanguageSettings></LanguageSettings>
        <FontSettings></FontSettings>
        <CameraSettings></CameraSettings>
        <NotificationsSettings></NotificationsSettings>
        <AppearanceSettings></AppearanceSettings>
        <TextSettings></TextSettings>
        <NarratorSettings></NarratorSettings>
        <MusicSettings></MusicSettings>
        <ResetProgress></ResetProgress>
      </ScrollView>
      <TabBar
        home={inactiveIconColor}
        stats={inactiveIconColor}
        settings={activeIconColor}
        navigation={navigation}
      />
    </View>
  );

}

export default SettingsPage;