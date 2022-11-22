// author: Maxim Torgovitski

// import react native
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

// import components
import Square from './square.js';
import styles from './styles.js';

// return scenario component
const Exercise = (props) => {
  return (
    <View style={styles.exercise}>
      <Square icon={props.icon}/>
      <Text style={styles.label}>Übung {props.level}</Text>
    </View>
  );
}

export default Exercise;