// author: Maxim Torgovitski

// import react native
import { Button, Pressable, ScrollView, Switch, Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

// import components
import NavBar from '../components/nav_bar.js';
import TabBar from '../components/tab_bar.js';
import SettingsItem from '../components/settings_item.js';
import styles from '../components/styles.js';
import { light_primary_color, dark_primary_color, light_background_color, dark_background_color, green, gray3, gray5, dark_gray3, dark_gray5 } from '../components/styles.js';
import Selection from '../components/selection.js';

// import icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { faToggleOn } from '@fortawesome/free-solid-svg-icons';
import { faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';

// default config
let config = {
  language: "german",
  largeFont: false,
  fontSize: 17,
  camera: true,
  notifications: false,
  // appearance: "light",
  text: true,
  narrator: true,
  music: true
}

// store data
const storeData = async () => {
  try {
    await AsyncStorage.setItem('test', JSON.stringify(config));
    // await AsyncStorage.setItem('fontSize', '17');
  } catch (error) {
    // error storing data
  }
}

// retrieve data
const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('test');
    const value = JSON.parse(jsonValue);
    // return await AsyncStorage.getItem('test');
    // return await AsyncStorage.getItem('fontSize');
    if (value !== null) {
      alert("language: " + value.language + "\nlarge font: " + value.largeFont + "\nfont size: " + value.fontSize + "\ncamera: " + value.camera + "\nnotifications: " + value.notifications);
    }
  } catch (error) {
    // error retrieving data
  }
}

//@Author: Tim Suchan
//deletes all level data from Async Storage 
const resetLevels = async () => {
  try {
    await AsyncStorage.removeItem('@completions')
  } 
  catch (e) {}
}

// return settings page
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


  const importData = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const result = await AsyncStorage.multiGet(keys);

      return result.map(req => { console.log(req) });
    } catch (error) {
      console.error(error)
    }
  }

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

  // store appearance data
  const storeAppearanceData = async (value) => {
    try {
      config.appearance = value;
      await AsyncStorage.setItem('test', JSON.stringify(config));
    } catch (error) {
      // error storing data
    }
  }

  // store text data
  const storeTextData = async (value) => {
    try {
      config.text = value;
      await AsyncStorage.setItem('test', JSON.stringify(config));
    } catch (error) {
      // error storing data
    }
  }

  // store narrator data
  const storeNarratorData = async (value) => {
    try {
      config.narrator = value;
      await AsyncStorage.setItem('test', JSON.stringify(config));
    } catch (error) {
      // error storing data
    }
  }

  // store music data
  const storeMusicData = async (value) => {
    try {
      config.music = value;
      await AsyncStorage.setItem('test', JSON.stringify(config));
    } catch (error) {
      // error storing data
    }
  }

  // language
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [language, setLanguage] = useState("german");
  const toggleSwitch1 = () => [
    setIsEnabled1(previousState => !previousState),
    setLanguage(isEnabled1 ? "german" : "english"),
    storeLanguageData(isEnabled1 ? "german" : "english")
  ];

  // font size
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [fontSize, setFontSize] = useState(17);
  const toggleSwitch2 = () => [
    setIsEnabled2(previousState => !previousState),
    setFontSize(isEnabled2 ? '17' : '23'),
    storeFontSizeData(isEnabled2 ? '17' : '23'),
    storeLargeFontData(isEnabled2 ? false : true)
  ];

  // camera
  const [isEnabled3, setIsEnabled3] = useState(true);
  const toggleSwitch3 = () => [
    setIsEnabled3(previousState => !previousState),
    storeCameraData(!isEnabled3)
  ];

  // notifications
  const [isEnabled4, setIsEnabled4] = useState(false);
  const toggleSwitch4 = () => [
    setIsEnabled4(previousState => !previousState),
    storeNotificationsData(!isEnabled4)
  ];

  // appearance
  const [isEnabled5, setIsEnabled5] = useState(false);
  const toggleSwitch5 = () => [
    setIsEnabled5(previousState => !previousState),
    // setColorScheme(isEnabled5 ? 'light' : 'dark'),
    // storeAppearanceData(isEnabled5 ? 'light' : 'dark')
  ];

  // text
  const [isEnabled6, setIsEnabled6] = useState(true);
  const toggleSwitch6 = () => [
    setIsEnabled6(previousState => !previousState),
    storeTextData(!isEnabled6)
  ];

  // narrator
  const [isEnabled7, setIsEnabled7] = useState(true);
  const toggleSwitch7 = () => [
    setIsEnabled7(previousState => !previousState),
    storeNarratorData(!isEnabled7)
  ];

  // music
  const [isEnabled8, setIsEnabled8] = useState(true);
  const toggleSwitch8 = () => [
    setIsEnabled8(previousState => !previousState),
    storeMusicData(!isEnabled8)
  ];

  // retrieve data
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('test');
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

  // get data on first render
  useEffect(() => {
    getData();
  }, []);

  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );

  // options component
  const Options = (props) => {

    const [optEnabled1, setOptEnabled1] = useState(true);
    const [optEnabled2, setOptEnabled2] = useState(false);
    const select = () => [setOptEnabled1(previousState => !previousState), setOptEnabled2(previousState => !previousState)];

    return (
      <View style={[{ backgroundColor: optionsContainerColor }, { padding: 2 }, { borderRadius: 12 }, { flexDirection: 'row' }]}>
        <Pressable style={[{ backgroundColor: optEnabled1 ? selectionColor : optionsContainerColor }, { padding: 8 }, { margin: 4 }, { borderRadius: 8 }]} disabled={optEnabled1} onPress={select}>
          <Text style={[{ fontSize: fontSize }, textColor]}>{props.option1}</Text>
        </Pressable>
        <Pressable style={[{ backgroundColor: optEnabled2 ? selectionColor : optionsContainerColor }, { padding: 8 }, { margin: 4 }, { borderRadius: 8 }]} disabled={optEnabled2} onPress={select}>
          <Text style={[{ fontSize: fontSize }, textColor]}>{props.option2}</Text>
        </Pressable>
      </View>
    );

  }

  // language settings
  const LanguageSettings = () => {
    return (
      <View style={[styles.settings_item, containerColor]}>
        <Text style={[{ fontSize: fontSize }, textColor]}>{isEnabled1 ? "Language" : "Sprache"}</Text>
        <View style={[{ backgroundColor: optionsContainerColor }, { padding: 2 }, { borderRadius: 12 }, { flexDirection: 'row' }]}>
          {/* <Pressable style={({ pressed }) => [{ backgroundColor: !isEnabled1 ? selectionColor : pressed ? colorScheme === 'light' ? light_primary_color : dark_primary_color : colorScheme === 'light' ? gray5 : dark_gray5 }, { padding: 12 }, { margin: 4 }, { borderRadius: 16 }]} disabled={!isEnabled1} onPress={toggleSwitch1}> */}
          <TouchableOpacity style={[{ backgroundColor: !isEnabled1 ? selectionColor : colorScheme === 'light' ? gray5 : dark_gray5 }, { padding: 12 }, { margin: 4 }, { borderRadius: 16 }]} disabled={!isEnabled1} onPress={toggleSwitch1}>
            <Text style={[{ fontSize: fontSize }, { color: isEnabled1 ? colorScheme === 'light' ? 'black' : 'white' : 'white' }]}>Deutsch</Text>
          </TouchableOpacity>
          {/* </Pressable> */}
          {/* <Pressable style={({ pressed }) => [{ backgroundColor: isEnabled1 ? selectionColor : pressed ? colorScheme === 'light' ? light_primary_color : dark_primary_color : colorScheme === 'light' ? gray5 : dark_gray5 }, { padding: 12 }, { margin: 4 }, { borderRadius: 16 }]} disabled={isEnabled1} onPress={toggleSwitch1}> */}
          <TouchableOpacity style={[{ backgroundColor: isEnabled1 ? selectionColor : colorScheme === 'light' ? gray5 : dark_gray5 }, { padding: 12 }, { margin: 4 }, { borderRadius: 16 }]} disabled={isEnabled1} onPress={toggleSwitch1}>
            <Text style={[{ fontSize: fontSize }, { color: !isEnabled1 ? colorScheme === 'light' ? 'black' : 'white' : 'white' }]}>English</Text>
          </TouchableOpacity>
          {/* </Pressable> */}
        </View>
      </View>
    );
  }

  // font settings
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

  // camera settings
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

  // notifications settings
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

  // appearance settings
  const AppearanceSettings = () => {
    return (
      <View style={[styles.settings_item, containerColor]}>
        <Text style={[{ fontSize: fontSize }, textColor]}>{isEnabled1 ? "Dark Mode" : "Dunkelmodus"}</Text>
        {/* <Switch
          trackColor={{ false: "#767577", true: green }}
          thumbColor={'white'}
          // ios_backgroundColor={"#3e3e3e"}
          onValueChange={toggleSwitch5}
          value={isEnabled5}
        /> */}
        {/* <Text style={[{ fontSize: fontSize }, textColor]}>{colorScheme === 'light' ? isEnabled1 ? "Light" : "Hell" : isEnabled1 ? "Dark" : "Dunkel"}</Text> */}
        {/* <View style={[{ backgroundColor: optionsContainerColor }, { padding: 2 }, { borderRadius: 12 }, { flexDirection: 'row' }]}>
          <Pressable style={({ pressed }) => [{ backgroundColor: !isEnabled5 ? selectionColor : pressed ? colorScheme === 'light' ? light_primary_color : dark_primary_color : null }, { padding: 8 }, { margin: 4 }, { borderRadius: 8 }]} disabled={!isEnabled5} onPress={toggleSwitch5}>
            <Text style={[{ fontSize: fontSize }, textColor]}>{isEnabled1 ? "Light" : "Hell"}</Text>
          </Pressable>
          <Pressable style={({ pressed }) => [{ backgroundColor: isEnabled5 ? selectionColor : pressed ? colorScheme === 'light' ? light_primary_color : dark_primary_color : null }, { padding: 8 }, { margin: 4 }, { borderRadius: 8 }]} disabled={isEnabled5} onPress={toggleSwitch5}>
            <Text style={[{ fontSize: fontSize }, textColor]}>{isEnabled1 ? "Dark" : "Dunkel"}</Text>
          </Pressable>
        </View> */}
        <Text style={[{ fontSize: fontSize }, { color: colorScheme === 'light' ? gray3 : dark_gray3 }]}>{isEnabled1 ? "System Settings" : "Systemeinstellungen"}</Text>
      </View>
    );
  }

  // text settings
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

  // narrator settings
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

  // music settings
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

  const Reset = () => {
    return (
      <View style={[styles.settings_item, containerColor]}>
        <View>
          <TouchableOpacity onPress={resetLevels}>
            <Text style={[{ fontSize: fontSize }, { color: colorScheme === 'light' ? light_primary_color : dark_primary_color }]}>{isEnabled1 ? "Reset Progress" : "Fortschritt zurücksetzen"}</Text>
          </TouchableOpacity>
          {/* <Text style={[textColor, { opacity: 0.5 }]}>Lokaler Fortschritt wird zurückgesetzt</Text> */}
        </View>
        {/* <Switch
          trackColor={{ false: "#767577", true: green }}
          thumbColor={'white'}
          // ios_backgroundColor={"#3e3e3e"}
          onValueChange={toggleSwitch8}
          value={isEnabled8}
        /> */}
      </View>
    );
  }

  const [optionIsEnabled1, setOptionIsEnabled1] = useState(false);
  const [optionIsEnabled2, setOptionIsEnabled2] = useState(false);
  const [optionIsEnabled3, setOptionIsEnabled3] = useState(false);
  const selectOption1 = () => [setOptionIsEnabled1(true), setOptionIsEnabled2(false), setOptionIsEnabled3(false)];
  const selectOption2 = () => [setOptionIsEnabled1(false), setOptionIsEnabled2(true), setOptionIsEnabled3(false)];
  const selectOption3 = () => [setOptionIsEnabled1(false), setOptionIsEnabled2(false), setOptionIsEnabled3(true)];

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
        {/* <Reset></Reset> */}
        {/* <View style={[styles.settings_item, containerColor]}>
          <View style={[{ backgroundColor: optionsContainerColor }, { padding: 2 }, { borderRadius: 12 }, { flexDirection: 'row' }]}>
            <Pressable style={({ pressed }) => [{ backgroundColor: optionIsEnabled1 ? selectionColor : pressed ? colorScheme === 'light' ? light_primary_color : dark_primary_color : null }, { padding: 8 }, { margin: 4 }, { borderRadius: 8 }]} disabled={optionIsEnabled1} onPress={selectOption1}>
              <Text style={[{ fontSize: fontSize }, textColor]}>männlich</Text>
            </Pressable>
            <Pressable style={({ pressed }) => [{ backgroundColor: optionIsEnabled2 ? selectionColor : pressed ? colorScheme === 'light' ? light_primary_color : dark_primary_color : null }, { padding: 8 }, { margin: 4 }, { borderRadius: 8 }]} disabled={optionIsEnabled2} onPress={selectOption2}>
              <Text style={[{ fontSize: fontSize }, textColor]}>weiblich</Text>
            </Pressable>
            <Pressable style={({ pressed }) => [{ backgroundColor: optionIsEnabled3 ? selectionColor : pressed ? colorScheme === 'light' ? light_primary_color : dark_primary_color : null }, { padding: 8 }, { margin: 4 }, { borderRadius: 8 }]} disabled={optionIsEnabled3} onPress={selectOption3}>
              <Text style={[{ fontSize: fontSize }, textColor]}>divers</Text>
            </Pressable>
          </View>
        </View> */}
        {/* <Selection title="Geschlecht" option1="männlich" option2="weiblich" option3="divers" fontSize={fontSize} /> */}
        {/* <View style={[{ borderTopWidth: 1 }, { borderBottomWidth: 1 }, { borderColor: borderColor }, { flexDirection: 'row' }, { flexWrap: 'wrap' }, { justifyContent: 'space-between' }]}>
          <Button
            title='set data'
            onPress={storeData}
          />
          <Button
            title='get data'
            onPress={getData}
          />
          <Button
            title='import data'
            onPress={importData}
          />
          <Button
            title='reset levels'
            onPress={resetLevels}
          />
          <Button
            title='test'
            onPress={() => writeItemToStorage(JSON.stringify(config))}
          />
        </View> */}
        {/* <Text>Language: {isEnabled1}, {language}</Text> */}
        {/* <Text style={[{ fontWeight: 'bold' }, textColor]}>Output</Text>
        <Text style={textColor}>Font Size: {fontSize}</Text> */}
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