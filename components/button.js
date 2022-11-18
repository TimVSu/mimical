import { Pressable, StyleSheet, Text } from 'react-native';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const green = 'rgb(52, 199, 89)';
const blue = 'rgb(0, 122, 255)';

const Button = (props) => {
  return (
    <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? green : blue }, { padding: 16 }, { margin: 8 }, { borderRadius: 8 }, { flexDirection: 'row' }, { alignItems: 'center' }]}>
      <FontAwesomeIcon style={{ marginRight: 8 }} icon={props.icon} color='white' />
      <Text style={styles.text}>{props.text}</Text>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: 'white'
  }
});