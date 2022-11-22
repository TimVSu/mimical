// author: Maxim Torgovitski

// import react native
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
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
const gray5 = 'rgb(229, 229, 234)';

// return settings item component
const SettingsItem = (props) => {
  return (
    <View style={styles.settings_item}>
      {/* <FontAwesomeIcon icon={props.icon} size={32} /> */}
      <Text style={styles.settings_label}>{props.label}</Text>
      <FontAwesomeIcon icon={props.toggle} size={32} color={props.toggle_color} />
    </View>
  );
}

export default SettingsItem;