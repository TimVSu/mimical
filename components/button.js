// author: Maxim Torgovitski

// import react native
import { Pressable, Text, useColorScheme } from 'react-native';
import React from 'react';

// import components
import styles from './styles';
import { light_primary_color, dark_primary_color, green } from './styles';

// import icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

// return button component
const Button = ({ navigation, ...props }) => {
  const colorScheme = useColorScheme();
  const containerColor = colorScheme === 'light' ? light_primary_color : dark_primary_color;
  return (
    <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? green : containerColor }, { padding: 16 }, { margin: 8 }, { borderRadius: 16 }, { flexDirection: 'row' }, { justifyContent: 'center' }, { alignItems: 'center' }]} onPress={() => navigation.navigate(props.target)}>
      {/* <FontAwesomeIcon style={{ marginRight: 8 }} icon={props.icon} color='white' /> */}
      <Text style={[styles.label, { color: 'white' }]}>{props.label}</Text>
    </Pressable>
  );
}

export default Button;