// author: Maxim Torgovitski

// import react native
import { Pressable, StyleSheet, Text, useColorScheme, View } from 'react-native';
import React from 'react';

// import components
import Square from './square.js';
import styles from './styles.js';

// return scenario component
const Exercise = ({ navigation, ...props }) => {
  const colorScheme = useColorScheme();
  const textColor = colorScheme === 'light' ? styles.light_text : styles.dark_text;
  return (
    <Pressable onPress={() => navigation.navigate('Level')}>
      <View style={styles.exercise}>
        <Square icon={props.icon} color={props.color} />
        <Text style={[styles.label, textColor]}>Übung {props.level}</Text>
      </View>
    </Pressable>
  );
}

export default Exercise;