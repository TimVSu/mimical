// author: Maxim Torgovitski

// import react native
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import React from 'react';

// import components
import styles from './styles';

// import icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleCheck, faLock } from '@fortawesome/free-solid-svg-icons';

// colors
const gray1 = 'rgb(142, 142, 147)';
const gray4 = 'rgb(209, 209, 214)';
const gray6 = 'rgb(242, 242, 247)';

// return square component
const Square = (props) => {
  const colorScheme = useColorScheme();
  const containerColor = colorScheme === 'light' ? styles.light_square : styles.dark_square;
  return (
    <View style={[styles.square, containerColor, { justifyContent: 'space-between' }]}>
      <Text style={[{ fontSize: 16 }, { color: 'white' }]}>Tags</Text>
      <View style={[{ alignItems: 'center' }]}>
        <FontAwesomeIcon style={{ opacity: 0.5 }} icon={props.icon} size={64} color={gray1} />
      </View>
      <View style={[{ alignItems: 'flex-end' }]}>
        <FontAwesomeIcon icon={faCircleCheck} size={16} color={'white'} />
      </View>
    </View>
  );
}

export default Square;