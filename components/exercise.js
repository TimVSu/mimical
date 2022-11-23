// author: Maxim Torgovitski

// import react native
import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

// import components
import Square from './square.js';
import styles from './styles.js';

// return scenario component
const Exercise = ({ navigation, ...props }) => {
  return (
    <Pressable onPress={() => navigation.navigate('Level')}>
      <View style={styles.exercise}>
        <Square icon={props.icon} color={props.color} />
        <Text style={styles.label}>Übung {props.level}</Text>
      </View>
    </Pressable>
  );
}

export default Exercise;