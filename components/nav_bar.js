// author: Maxim Torgovitski

// import react native
import { Text, useColorScheme, View } from 'react-native';
import React from 'react';

// import components
import styles from './styles';

// return navigation bar component
const NavBar = ({ navigation, ...props }) => {

  // light/dark mode
  const colorScheme = useColorScheme();
  const containerColor = colorScheme === 'light' ? styles.light_container : styles.dark_container;
  const textColor = colorScheme === 'light' ? styles.light_text : styles.dark_text;

  return (
    <View style={[styles.nav_bar, containerColor]}>
      <Text style={[styles.title1, textColor]}>{props.page_title}</Text>
    </View>
  );

}

export default NavBar;