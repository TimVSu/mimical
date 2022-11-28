// author: Maxim Torgovitski

// import react native
import { ScrollView, View, Switch, StyleSheet } from 'react-native';
import React, { useState } from 'react';

// import components
import NavBar from '../components/nav_bar.js';
import TabBar from '../components/tab_bar.js';
import SettingsItem from '../components/settings_item.js';
// import SettingsList from 'react-native-settings-list';
import { SelectList } from 'react-native-dropdown-select-list'

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

// Languages
  
const data = [
    {key:'1', value:'Deutsch'},
    {key:'2', value:'Englisch', disabled:true},
    {key:'3', value:'Französisch', disabled:true},
    {key:'4', value:'Spanisch', disabled:true},
]

// return settings page
const SettingsPage = ({ navigation }) => {


  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [selected, setSelected] = useState(false); 

  return (
    <View style={{ flex: 1 }}>
      <NavBar page_title="Einstellungen" />
      <ScrollView>
        <SettingsItem icon={faCamera} label="Einstellung 1" toggle={faToggleOn} toggle_color={green} />
        <SettingsItem icon={faBell} label="Einstellung 2" toggle={faToggleOff} toggle_color={gray4} />
        <SettingsItem icon={faSquare} label="Einstellung 3" toggle={faToggleOff} toggle_color={gray4} />
        <SettingsItem icon={faSquare} label="Einstellung 4" toggle={faToggleOff} toggle_color={gray4} />
        <SettingsItem icon={faSquare} label="Einstellung 5" toggle={faToggleOff} toggle_color={gray4} />
        <SettingsItem icon={faSquare} label="Einstellung 6" toggle={faToggleOff} toggle_color={gray4} />
        <SettingsItem icon={faSquare} label="Einstellung 7" toggle={faToggleOff} toggle_color={gray4} />
        <SettingsItem icon={faSquare} label="Einstellung 8" toggle={faToggleOff} toggle_color={gray4} />
      </ScrollView>
      {/* <SettingsList>
        <Text></Text>
      </SettingsList> */}

      <View style={styles.container}>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>

      <SelectList 
        setSelected={(value) => setSelected(value)} 
        placeholder={"Wähle eine Sprache"}
        data={data}
        save="value"
      />
      <TabBar home={gray4} stats={gray4} settings={blue} navigation={navigation} />
    </View>
  );
}

export default SettingsPage;

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});