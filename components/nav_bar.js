// author: Maxim Torgovitski

// import react native
import { Pressable, Text, useColorScheme, View } from 'react-native';
import React, { useEffect } from 'react';

// import components
import styles from './styles';
import { light_primary_color, dark_primary_color } from '../components/styles.js';

// import icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

// colors
const blue = 'rgb(0, 122, 255)';
const dark_blue = 'rgb(10, 132, 255)';

// return navigation bar component
const NavBar = ({ navigation, ...props }) => {

  useEffect(() => { }, []);

  // light/dark mode
  const colorScheme = useColorScheme();
  const containerColor = colorScheme === 'light' ? styles.light_container : styles.dark_container;
  const textColor = colorScheme === 'light' ? styles.light_text : styles.dark_text;
  const iconColor = colorScheme === 'light' ? light_primary_color : dark_primary_color;

  return (
    <View style={[styles.nav_bar, containerColor]}>
      <Text style={[styles.title1, textColor]}>{props.page_title}</Text>
      {/* <Pressable onPress={() => navigation.popToTop()}>
        <FontAwesomeIcon icon={faCircleArrowLeft} color={iconColor} size={32} />
      </Pressable> */}
    </View>
  );

}

export default NavBar;