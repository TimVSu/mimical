// author: Maxim Torgovitski

// import react native
import { Button, ScrollView, StyleSheet, Switch, Text, useColorScheme, View } from 'react-native';
import React, { useState } from 'react';

// import components
import styles from './styles';

// import icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faSquare } from '@fortawesome/free-solid-svg-icons';
// import { faToggleOn } from '@fortawesome/free-solid-svg-icons';
// import { faToggleOff } from '@fortawesome/free-solid-svg-icons';
// import { faCamera } from '@fortawesome/free-solid-svg-icons';
// import { faBell } from '@fortawesome/free-solid-svg-icons';

// colors
const green = 'rgb(52, 199, 89)';
const gray5 = 'rgb(229, 229, 234)';

// return settings item component
const SettingsItem = (props) => {
  const colorScheme = useColorScheme();
  const containerColor = colorScheme === 'light' ? styles.light_container : styles.dark_container;
  const textColor = colorScheme === 'light' ? styles.light_text : styles.dark_text;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={[styles.settings_item, containerColor]}>
      {/* <FontAwesomeIcon icon={props.icon} size={32} /> */}
      <Text style={[styles.label, textColor]}>{props.label}</Text>
      <Switch
        trackColor={{ false: "#767577", true: green }}
        thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
        // ios_backgroundColor={"#3e3e3e"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

export default SettingsItem;