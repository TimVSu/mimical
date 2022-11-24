// author: Maxim Torgovitski

// import react native
import { Pressable, StyleSheet, Text } from 'react-native';
import React from 'react';

// import components
import styles from './styles';

// import icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

// colors
const green = 'rgb(52, 199, 89)';
const blue = 'rgb(0, 122, 255)';

// return button component
const Button = ({ navigation, ...props }) => {
  return (
    <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? green : blue }, { padding: 16 }, { margin: 8 }, { borderRadius: 8 }, { flexDirection: 'row' }, { alignItems: 'center' }]} onPress={() => navigation.navigate('Menu')}>
      <FontAwesomeIcon style={{ marginRight: 8 }} icon={props.icon} color='white' />
      <Text style={styles.button_label}>{props.text}</Text>
    </Pressable>
  );
}

export default Button;