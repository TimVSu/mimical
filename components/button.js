// author: Maxim Torgovitski

// import react native
import { Pressable, StyleSheet, Text, useColorScheme } from 'react-native';
import React from 'react';

// import components
import styles from './styles';
import { light_primary_color, dark_primary_color } from './styles';

// import icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

// colors
const green = 'rgb(52, 199, 89)';
const blue = 'rgb(0, 122, 255)';

// return button component
const Button = ({ navigation, ...props }) => {
  const colorScheme = useColorScheme();
  const containerColor = colorScheme === 'light' ? light_primary_color : dark_primary_color;
  return (
    <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? green : containerColor }, { padding: 16 }, { margin: 8 }, { borderRadius: 8 }, { flexDirection: 'row' }, { alignItems: 'center' }]} onPress={() => navigation.navigate(props.target)}>
      <FontAwesomeIcon style={{ marginRight: 8 }} icon={props.icon} color='white' />
      <Text style={[styles.label, { color: 'white' }]}>{props.label}</Text>
    </Pressable>
  );
}

export default Button; 