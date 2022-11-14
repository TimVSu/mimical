import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faSquare } from '@fortawesome/free-solid-svg-icons';
// import { faToggleOn } from '@fortawesome/free-solid-svg-icons';
// import { faToggleOff } from '@fortawesome/free-solid-svg-icons';
// import { faCamera } from '@fortawesome/free-solid-svg-icons';
// import { faBell } from '@fortawesome/free-solid-svg-icons';

const gray5 = 'rgb(229, 229, 234)';

const SettingsItem = (props) => {
  return (
    <View style={styles.settings_item}>
      {/* <FontAwesomeIcon icon={props.icon} size={32} /> */}
      <Text style={styles.label}>{props.label}</Text>
      <FontAwesomeIcon icon={props.toggle} size={32} color={props.toggle_color} />
    </View>
  );
}

export default SettingsItem;

const styles = StyleSheet.create({
  label: {
    fontSize: 17,
    marginTop: 4
  },
  settings_item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: gray5,
    backgroundColor: 'white'
  }
});