// author: Maxim Torgovitski

// import react native
import { Button, Pressable, ScrollView, Switch, Text, useColorScheme, View } from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import components
import NavBar from '../components/nav_bar.js';
import TabBar from '../components/tab_bar.js';
import SettingsItem from '../components/settings_item.js';
import styles from '../components/styles.js';
import { light_primary_color, dark_primary_color, light_background_color, dark_background_color, green, gray5, dark_gray5 } from '../components/styles.js';

// import icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { faToggleOn } from '@fortawesome/free-solid-svg-icons';
import { faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';

// default config
let config = {
  language: 'german',
  largeFont: false,
  fontSize: 17,
  camera: true,
  notifications: false
}

// store data
const storeData = async () => {
  try {
    await AsyncStorage.setItem('test', JSON.stringify(config));
  } catch (error) {
    // error storing data
  }
}

// retrieve data
const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('test');
    const value = JSON.parse(jsonValue);
    if (value !== null) {
      alert("language: " + value.language + "\nlarge font: " + value.largeFont + "\nfont size: " + value.fontSize + "\ncamera: " + value.camera + "\nnotifications: " + value.notifications)
    }
  } catch (error) {
    // error retrieving data
  }
}

// return settings page
const SettingsPage = ({ navigation }) => {

  // light/dark mode
  const colorScheme = useColorScheme();
  const containerColor = colorScheme === 'light' ? styles.light_container : styles.dark_container;
  const textColor = colorScheme === 'light' ? styles.light_text : styles.dark_text;
  const optionsContainerColor = colorScheme === 'light' ? gray5 : dark_gray5;
  const selectionColor = colorScheme === 'light' ? light_background_color : dark_background_color;
  const activeIconColor = colorScheme === 'light' ? light_primary_color : dark_primary_color;
  const inactiveIconColor = colorScheme === 'light' ? gray5 : dark_gray5;

  const [fontSize, setFontSize] = useState(17);

  // options component
  const Options = (props) => {

    const [isEnabled1, setIsEnabled1] = useState(true);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const select = () => [setIsEnabled1(previousState => !previousState), setIsEnabled2(previousState => !previousState)];

    return (
      <View style={[{ backgroundColor: optionsContainerColor }, { padding: 2 }, { borderRadius: 12 }, { flexDirection: 'row' }]}>
        <Pressable style={[{ backgroundColor: isEnabled1 ? selectionColor : optionsContainerColor }, { padding: 8 }, { margin: 4 }, { borderRadius: 8 }]} disabled={isEnabled1} onPress={select}>
          <Text style={[{ fontSize: fontSize }, textColor]}>{props.option1}</Text>
        </Pressable>
        <Pressable style={[{ backgroundColor: isEnabled2 ? selectionColor : optionsContainerColor }, { padding: 8 }, { margin: 4 }, { borderRadius: 8 }]} disabled={isEnabled2} onPress={select}>
          <Text style={[{ fontSize: fontSize }, textColor]}>{props.option2}</Text>
        </Pressable>
      </View>
    );

  }

  // language settings
  const LanguageSettings = () => {

    // store data
    const storeData = async (value) => {
      try {
        config.language = value;
        await AsyncStorage.setItem('test', JSON.stringify(config));
      } catch (error) {
        // error storing data
      }
    }

    // language switch
    const [isEnabled, setIsEnabled] = useState(false);
    const [language, setLanguage] = useState("german")
    const toggleSwitch = () => [setIsEnabled(previousState => !previousState), setLanguage(isEnabled ? "english" : "german"), storeData(language)];

    return (
      <View style={[styles.settings_item, containerColor]}>
        <Text style={[{ fontSize: fontSize }, textColor]}>Sprache</Text>
        {/* <Options option1="Deutsch" option2="Englisch" /> */}
        <View style={{ flexDirection: 'row' }}>
          <Button title='Deutsch' disabled={!isEnabled} onPress={toggleSwitch} />
          <Button title='Englisch' disabled={isEnabled} onPress={toggleSwitch} />
        </View>
      </View>
    );

  }

  // font settings
  const FontSettings = () => {

    // store large font data
    const storeLargeFontData = async (value) => {
      try {
        config.largeFont = value;
        await AsyncStorage.setItem('test', JSON.stringify(config));
      } catch (error) {
        // error storing data
      }
    }

    // store font size data
    const storeFontSizeData = async (value) => {
      try {
        config.fontSize = value;
        await AsyncStorage.setItem('test', JSON.stringify(config));
      } catch (error) {
        // error storing data
      }
    }

    // retrieve font size data
    const getFontSizeData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('test');
        const value = JSON.parse(jsonValue);
        console.log("font size: " + value.fontSize);
        return value.fontSize;
      } catch (error) {
        // error retrieving data
      }
    }

    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('test');
        const value = JSON.parse(jsonValue);
        console.log(value);
        return value;
      } catch (error) {
        // error retrieving data
      }
    }

    // font size switch
    const [isEnabled, setIsEnabled] = useState(false);
    // const [fontSize, setFontSize] = useState(17);
    // const toggleSwitch = () => [setIsEnabled(previousState => !previousState), setFontSize(isEnabled ? 34 : 17), storeLargeFontData(!isEnabled), storeFontSizeData(fontSize), getFontSizeData()];
    const toggleSwitch = () => [setIsEnabled(previousState => !previousState), setFontSize(isEnabled ? 17 : 34)];

    return (
      <View style={[styles.settings_item, containerColor]}>
        <View>
          <Text style={[{ fontSize: fontSize }, textColor]}>Große Schrift</Text>
        </View>
        <Switch
          trackColor={{ false: "#767577", true: green }}
          thumbColor={'white'}
          // ios_backgroundColor={"#3e3e3e"}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    );

  }

  // camera settings
  const CameraSettings = () => {

    // store camera data
    const storeData = async (value) => {
      try {
        config.camera = value;
        await AsyncStorage.setItem('test', JSON.stringify(config));
      } catch (error) {
        // error storing data
      }
    }

    // retrieve camera data
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('test');
        const value = JSON.parse(jsonValue);
        return value.camera;
      } catch (error) {
        // error retrieving data
      }
    }

    // camera switch
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => [setIsEnabled(previousState => !previousState), storeData(!isEnabled)];

    return (
      <View style={[styles.settings_item, containerColor]}>
        <Text style={[{ fontSize: fontSize }, textColor]}>Kamera</Text>
        <Switch
          trackColor={{ false: "#767577", true: green }}
          thumbColor={'white'}
          // ios_backgroundColor={"#3e3e3e"}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    );

  }

  // notifications settings
  const NotificationsSettings = () => {

    // store notifications data
    const storeData = async (value) => {
      try {
        config.notifications = value;
        await AsyncStorage.setItem('test', JSON.stringify(config));
      } catch (error) {
        // error storing data
      }
    }

    // notifications switch
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => [setIsEnabled(previousState => !previousState), storeData(!isEnabled)];

    return (
      <View style={[styles.settings_item, containerColor]}>
        <Text style={[{ fontSize: fontSize }, textColor]}>Mitteilungen</Text>
        <Switch
          trackColor={{ false: "#767577", true: green }}
          thumbColor={'white'}
          // ios_backgroundColor={"#3e3e3e"}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    );

  }

  // appearance settings
  const AppearanceSettings = () => {

    // appearance switch
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
      <View style={[styles.settings_item, containerColor]}>
        <Text style={[{ fontSize: fontSize }, textColor]}>Erscheinungsbild</Text>
        {/* <Switch
        trackColor={{ false: "#767577", true: green }}
        thumbColor={'white'}
        // ios_backgroundColor={"#3e3e3e"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      /> */}
        {/* <Options option1="Hell" option2="Dunkel" /> */}
        <Text style={[{ fontSize: fontSize }, textColor]}>{colorScheme === 'light' ? "Hell" : "Dunkel"}</Text>
      </View>
    );

  }

  return (
    <View style={{ flex: 1 }}>
      <NavBar page_title="Einstellungen" />
      <ScrollView>
        <LanguageSettings></LanguageSettings>
        <FontSettings></FontSettings>
        <CameraSettings></CameraSettings>
        <NotificationsSettings></NotificationsSettings>
        <AppearanceSettings></AppearanceSettings>
        <Button
          title='set data'
          onPress={storeData}
        />
        <Button
          title='get data'
          onPress={getData}
        />
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