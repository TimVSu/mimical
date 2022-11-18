import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const blue = 'rgb(0, 122, 255)';
const gray5 = 'rgb(229, 229, 234)';
const gray6 = 'rgb(242, 242, 247)';

// return navigation bar @maxim
const ProgressBar = (props) => {
  return (
    <View style={[{ flexDirection: 'row' }, { alignItems: 'center' }, { marginTop: 8 }, { marginLeft: 16 }]}>
      <Text style={{ fontSize: 16 }}>Fortschritt:</Text>
      <View style={[{ width: 128 }, { height: 8 }, { backgroundColor: gray6 }, { marginLeft: 8 }, { borderRadius: 4 }]}>
        <View style={[{ width: 64 }, { height: 8 }, { backgroundColor: blue }, { borderRadius: 4 }]}></View>
      </View>
    </View>
  );
}

export default ProgressBar;

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