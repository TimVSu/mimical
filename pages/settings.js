// author: Maxim Torgovitski

// import react native
import { ScrollView, View } from 'react-native';
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

const [selected, setSelected] = useState("");
  
const data = [
    {key:'1', value:'Mobiles', disabled:true},
    {key:'2', value:'Appliances'},
    {key:'3', value:'Cameras'},
    {key:'4', value:'Computers', disabled:true},
    {key:'5', value:'Vegetables'},
    {key:'6', value:'Diary Products'},
    {key:'7', value:'Drinks'},
]

// return settings page
const SettingsPage = ({ navigation }) => {
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

      <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
      />
      <TabBar home={gray4} stats={gray4} settings={blue} navigation={navigation} />
    </View>
  );
}

export default SettingsPage;