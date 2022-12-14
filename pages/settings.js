// author: Maxim Torgovitski

// import react native
import { Button, Pressable, ScrollView, Switch, Text, useColorScheme, View } from 'react-native';
import React, { useEffect, useState } from 'react';
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
      alert("language: " + value.language + "\nlarge font: " + value.largeFont + "\nfont size: " + value.fontSize + "\ncamera: " + value.camera + "\nnotifications: " + value.notifications);
    }
    // return jsonValue != null ? JSON.parse(jsonValue) : null;
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

  // get data on first render
  useEffect(() => {
    getData();
  }, []);

  // store language data
  const storeLanguageData = async (value) => {
    try {
      config.language = value;
      await AsyncStorage.setItem('test', JSON.stringify(config));
    } catch (error) {
      // error storing data
    }
  }

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

  // store camera data
  const storeCameraData = async (value) => {
    try {
      config.camera = value;
      await AsyncStorage.setItem('test', JSON.stringify(config));
    } catch (error) {
      // error storing data
    }
  }

  // store notifications data
  const storeNotificationsData = async (value) => {
    try {
      config.notifications = value;
      await AsyncStorage.setItem('test', JSON.stringify(config));
    } catch (error) {
      // error storing data
    }
  }

  // language
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [language, setLanguage] = useState("german");
  const toggleSwitch1 = () => [setIsEnabled1(previousState => !previousState), setLanguage(isEnabled1 ? "german" : "english"), storeLanguageData(language)];

  // font size
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [fontSize, setFontSize] = useState(17);
  const toggleSwitch2 = () => [setIsEnabled2(previousState => !previousState), setFontSize(isEnabled2 ? 17 : 34), storeLargeFontData(!isEnabled2), storeFontSizeData(isEnabled2 ? 17 : 34)];

  // camera
  const [isEnabled3, setIsEnabled3] = useState(true);
  const toggleSwitch3 = () => [setIsEnabled3(previousState => !previousState), storeData(!isEnabled3), storeCameraData(!isEnabled3)];

  // notifications
  const [isEnabled4, setIsEnabled4] = useState(false);
  const toggleSwitch4 = () => [setIsEnabled4(previousState => !previousState), storeData(!isEnabled4), storeNotificationsData(!isEnabled4)];

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
    return (
      <View style={[styles.settings_item, containerColor]}>
        <Text style={[{ fontSize: fontSize }, textColor]}>Sprache</Text>
        {/* <Options option1="Deutsch" option2="Englisch" /> */}
        <View style={{ flexDirection: 'row' }}>
          <Button title='Deutsch' disabled={!isEnabled1} onPress={toggleSwitch1} />
          <Button title='Englisch' disabled={isEnabled1} onPress={toggleSwitch1} />
        </View>
      </View>
    );
  }

  // font settings
  const FontSettings = () => {

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

    return (
      <View style={[styles.settings_item, containerColor]}>
        <View>
          <Text style={[{ fontSize: fontSize }, textColor]}>Große Schrift</Text>
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

  // camera settings
  const CameraSettings = () => {

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

    return (
      <View style={[styles.settings_item, containerColor]}>
        <Text style={[{ fontSize: fontSize }, textColor]}>Kamera</Text>
        <Switch
          trackColor={{ false: "#767577", true: green }}
          thumbColor={'white'}
          // ios_backgroundColor={"#3e3e3e"}
          onValueChange={toggleSwitch3}
          value={isEnabled3}
        />
      </View>
    );

  }

  // notifications settings
  const NotificationsSettings = () => {
    return (
      <View style={[styles.settings_item, containerColor]}>
        <Text style={[{ fontSize: fontSize }, textColor]}>Mitteilungen</Text>
        <Switch
          trackColor={{ false: "#767577", true: green }}
          thumbColor={'white'}
          // ios_backgroundColor={"#3e3e3e"}
          onValueChange={toggleSwitch4}
          value={isEnabled4}
        />
      </View>
    );
  }

  // appearance settings
  const AppearanceSettings = () => {
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