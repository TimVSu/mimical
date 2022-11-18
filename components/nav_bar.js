import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const blue = 'rgb(0, 122, 255)';
const gray5 = 'rgb(229, 229, 234)';

// return navigation bar @maxim
const NavBar = (props) => {
  return (
    <View style={styles.nav_bar}>
      <Text style={styles.page_title}>{props.page_title}</Text>
      <FontAwesomeIcon icon={faCircleInfo} color={blue} size={32} />
    </View>
  );
}

export default NavBar;

const styles = StyleSheet.create({
  nav_bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: 64,
    borderBottomWidth: 1,
    borderColor: gray5,
    backgroundColor: 'white'
  },
  page_title: {
    fontSize: 34,
    fontWeight: 'bold'
  }
});