// author: Maxim Torgovitski

// import react native
import { StyleSheet, Text, View } from 'react-native';
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
  return (
    <View style={styles.nav_bar}>
      <Text style={styles.title}>{props.page_title}</Text>
      <FontAwesomeIcon icon={faCircleInfo} color={blue} size={32} />
    </View>
  );
}

export default NavBar;