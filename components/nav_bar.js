// author: Maxim Torgovitski

// import react native
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import React from 'react';

// import components
import styles from './styles';

// import icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

// colors
const blue = 'rgb(0, 122, 255)';
const gray5 = 'rgb(229, 229, 234)';

// return navigation bar component
const NavBar = (props) => {
  const colorScheme = useColorScheme();
  const containerColor = colorScheme === 'light' ? styles.light_container : styles.dark_container;
  const textColor = colorScheme === 'light' ? styles.light_text : styles.dark_text;
  return (
    <View style={[styles.nav_bar, containerColor]}>
      <Text style={[styles.title, textColor]}>{props.page_title}</Text>
      <FontAwesomeIcon icon={faCircleInfo} color={blue} size={32} />
    </View>
  );
}

export default NavBar;