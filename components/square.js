// author: Maxim Torgovitski

// import react native
import { StyleSheet, useColorScheme, View } from 'react-native';
import React from 'react';

// import components
import styles from './styles';

// import icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

// colors
const gray1 = 'rgb(142, 142, 147)';
const gray4 = 'rgb(209, 209, 214)';
const gray6 = 'rgb(242, 242, 247)';

// return square component
const Square = (props) => {
  const colorScheme = useColorScheme();
  const containerColor = colorScheme === 'light' ? styles.light_square : styles.dark_square;
  return (
    <View style={[styles.square, containerColor]}>
      <FontAwesomeIcon style={{opacity: 0.5}} icon={props.icon} size={64} color={gray1} />
    </View>
  );
}

export default Square;