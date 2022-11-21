// author: Maxim Torgovitski

// import react native
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

// import icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

// colors
const blue = 'rgb(0, 122, 255)';
const gray5 = 'rgb(229, 229, 234)';

// return navigation bar component
const NavBar = (props) => {
  return (
    <View style={styles.navBar}>
      <Text style={styles.title}>{props.page_title}</Text>
      <FontAwesomeIcon icon={faCircleInfo} color={blue} size={32} />
    </View>
  );
}

export default NavBar;

// styles
const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: 64,
    borderBottomWidth: 1,
    borderColor: gray5,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold'
  }
});