import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Square from './square.js';

// return scenario @maxim
const Scenario = (props) => {
  return (
    <View style={styles.scenario}>
<<<<<<< HEAD
      <Square></Square>
      <Text style={styles.label}>Scenario {props.category}{props.level}</Text>
=======
      <Square icon={props.icon}/>
      <Text style={styles.label}>Übung {props.level}</Text>
>>>>>>> menu
    </View>
  );
}

export default Scenario;

const styles = StyleSheet.create({
  scenario: {
    margin: 16
  },
  label: {
    fontSize: 17,
    marginTop: 4
  }
});