// author: Maxim Torgovitski

// import react native
import { Button, ScrollView, Switch, Text, useColorScheme, View } from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import components
import NavBar from '../components/nav_bar.js';
import TabBar from '../components/tab_bar.js';
import SettingsItem from '../components/settings_item.js';
import styles from '../components/styles.js';

// import icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { faToggleOn } from '@fortawesome/free-solid-svg-icons';
import { faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';

// colors
const green = 'rgb(52, 199, 89)';
const blue = 'rgb(0, 122, 255)';
const gray4 = 'rgb(209, 209, 214)';
const gray5 = 'rgb(229, 229, 234)';
const gray6 = 'rgb(242, 242, 247)';
const dark_blue = 'rgb(10, 132, 255)';
const dark_gray5 = 'rgb(44, 44, 46)';
const dark_gray6 = 'rgb(28, 28, 30)';

// options component
const Options = (props) => {
  const colorScheme = useColorScheme();
  const containerColor = colorScheme === 'light' ? gray5 : dark_gray5;
  const selectionColor = colorScheme === 'light' ? 'white' : 'black';
  const textColor = colorScheme === 'light' ? styles.light_text : styles.dark_text;
  if (props.select == 1) {
    return (
      <View style={[{ backgroundColor: containerColor }, { padding: 2 }, { borderRadius: 12 }, { flexDirection: 'row' }]}>
        <View style={[{ backgroundColor: selectionColor }, { padding: 8 }, { margin: 4 }, { borderRadius: 8 }]}>
          <Text style={[styles.label, textColor]}>{props.option1}</Text>
        </View>
        <View style={[{ padding: 8 }, { margin: 4 }, { borderRadius: 8 }]}>
          <Text style={[styles.label, textColor]}>{props.option2}</Text>
        </View>
      </View>
    );
  } else {
    return (
      <View style={[{ backgroundColor: gray6 }, { padding: 2 }, { borderRadius: 12 }, { flexDirection: 'row' }]}>
        <View style={[{ padding: 8 }, { margin: 4 }, { borderRadius: 8 }]}>
          <Text style={styles.label}>{props.option1}</Text>
        </View>
        <View style={[{ backgroundColor: 'white' }, { padding: 8 }, { margin: 4 }, { borderRadius: 8 }]}>
          <Text style={styles.label}>{props.option2}</Text>
        </View>
      </View>
    );
  }

}

// functions
function getFontSize(x) {
  console.log("font size: " + x);
  styles.label = { fontSize: x };
}

function getLanguage(x) {
  console.log("language: " + x);
}

let config = {
  "language": "german",
  "fontSize": "default",
}

const storeData = async () => {
  try {
    const jsonValue = JSON.stringify(config);
    await AsyncStorage.setItem('test', jsonValue);
  } catch (error) {
    // error saving value
  }
}

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('test');
    const value = JSON.parse(jsonValue);
    if (value !== null) {
      console.log(value)
    }
  } catch (error) {
    // error retrieving data
  }
}

// font settings
const FontSettings = () => {
  const colorScheme = useColorScheme();
  const containerColor = colorScheme === 'light' ? styles.light_container : styles.dark_container;
  const textColor = colorScheme === 'light' ? styles.light_text : styles.dark_text;
  const [isEnabled, setIsEnabled] = useState(false);
  const [fontState, setFontState] = useState("Standard");
  const [fontSize, setFontSize] = useState(17);
  const toggleSwitch = () => [setIsEnabled(previousState => !previousState), setFontState(isEnabled ? "Standard" : "Groß"), setFontSize(isEnabled ? 34 : 17), getFontSize(fontSize)];
  return (
    <View style={[styles.settings_item, containerColor]}>
      <View>
        <Text style={[styles.label, textColor]}>Große Schrift</Text>
        <Text style={[styles.label, textColor, { opacity: 0.25 }]}>Schriftgröße: {fontState}</Text>
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
  const colorScheme = useColorScheme();
  const containerColor = colorScheme === 'light' ? styles.light_container : styles.dark_container;
  const textColor = colorScheme === 'light' ? styles.light_text : styles.dark_text;
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={[styles.settings_item, containerColor]}>
      <Text style={[styles.label, textColor]}>Kamera</Text>
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
  const colorScheme = useColorScheme();
  const containerColor = colorScheme === 'light' ? styles.light_container : styles.dark_container;
  const textColor = colorScheme === 'light' ? styles.light_text : styles.dark_text;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={[styles.settings_item, containerColor]}>
      <Text style={[styles.label, textColor]}>Mitteilungen</Text>
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
  const colorScheme = useColorScheme();
  const containerColor = colorScheme === 'light' ? styles.light_container : styles.dark_container;
  const textColor = colorScheme === 'light' ? styles.light_text : styles.dark_text;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={[styles.settings_item, containerColor]}>
      <Text style={[styles.label, textColor]}>Erscheinungsbild</Text>
      {/* <Switch
        trackColor={{ false: "#767577", true: green }}
        thumbColor={'white'}
        // ios_backgroundColor={"#3e3e3e"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      /> */}
      <Options option1="Hell" option2="Dunkel" select={1} />
    </View>
  );
}

// language settings
const LanguageSettings = () => {
  const colorScheme = useColorScheme();
  const containerColor = colorScheme === 'light' ? styles.light_container : styles.dark_container;
  const textColor = colorScheme === 'light' ? styles.light_text : styles.dark_text;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={[styles.settings_item, containerColor]}>
      <Text style={[styles.label, textColor]}>Sprache</Text>
      {/* <Switch
        trackColor={{ false: "#767577", true: green }}
        thumbColor={'white'}
        // ios_backgroundColor={"#3e3e3e"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      /> */}
      <Options option1="Deutsch" option2="Englisch" select={1} />
    </View>
  );
}

// return settings page
const SettingsPage = ({ navigation }) => {
  const colorScheme = useColorScheme();
  const activeIconColor = colorScheme === 'light' ? blue : dark_blue
  const inactiveIconColor = colorScheme === 'light' ? gray5 : dark_gray5
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