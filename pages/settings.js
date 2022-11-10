import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { faToggleOn } from '@fortawesome/free-solid-svg-icons';
import { faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const green = 'rgb(52, 199, 89)';
const blue = 'rgb(0, 122, 255)';
const gray4 = 'rgb(209, 209, 214)';
const gray5 = 'rgb(229, 229, 234)';
const gray6 = 'rgb(242, 242, 247)';

// return settings page @maxim
const SettingsPage = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavBar page_title="Settings" />
      <ScrollView>
        <SettingsItem icon={faCamera} label="Camera" toggle={faToggleOn} toggle_color={green} />
        <SettingsItem icon={faBell} label="Reminders" toggle={faToggleOff} toggle_color={gray4} />
        <SettingsItem icon={faSquare} label="Label" toggle={faToggleOff} toggle_color={gray4} />
        <SettingsItem icon={faSquare} label="Label" toggle={faToggleOff} toggle_color={gray4} />
        <SettingsItem icon={faSquare} label="Label" toggle={faToggleOff} toggle_color={gray4} />
        <SettingsItem icon={faSquare} label="Label" toggle={faToggleOff} toggle_color={gray4} />
        <SettingsItem icon={faSquare} label="Label" toggle={faToggleOff} toggle_color={gray4} />
        <SettingsItem icon={faSquare} label="Label" toggle={faToggleOff} toggle_color={gray4} />
      </ScrollView>
      <TabBar home={gray4} stats={gray4} settings={blue} />
    </View>
  );
}

export default SettingsPage;