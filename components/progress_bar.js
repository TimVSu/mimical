// author: Maxim Torgovitski

// import react native
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

// colors
const blue = 'rgb(0, 122, 255)';
const gray6 = 'rgb(242, 242, 247)';

// return progress bar component
const ProgressBar = ({ exercises, progress }) => {
  return (
    <View style={[{ flexDirection: 'row' }, { alignItems: 'center' }, { marginTop: 8 }, { marginLeft: 16 }]}>
      <Text style={{ fontSize: 16 }}>Fortschritt:</Text>
      <View style={[{ width: 128 }, { height: 8 }, { backgroundColor: gray6 }, { marginLeft: 8 }, { borderRadius: 4 }]}>
        <View style={[{ width: 32 }, { height: 8 }, { backgroundColor: blue }, { borderTopLeftRadius: 4 }, { borderBottomLeftRadius: 4 }]}></View>
      </View>
    </View>
  );
}

export default ProgressBar;

// styles
const styles = StyleSheet.create({});