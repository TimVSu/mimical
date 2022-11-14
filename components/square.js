import { StyleSheet, View } from 'react-native';
import React from 'react';

const gray6 = 'rgb(242, 242, 247)';

// return square @maxim
const Square = () => {
  return (
    <View style={styles.square}></View>
  );
}

export default Square;

const styles = StyleSheet.create({
  square: {
    backgroundColor: gray6,
    width: 128,
    height: 128,
    borderRadius: 16
  }
});