import { StyleSheet, View } from 'react-native';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const gray4 = 'rgb(209, 209, 214)';
const gray6 = 'rgb(242, 242, 247)';

// return square @maxim
const Square = (props) => {
  return (
    <View style={styles.square}>
      <FontAwesomeIcon icon={props.icon} />
    </View>
  );
}

export default Square;

const styles = StyleSheet.create({
  square: {
    backgroundColor: gray6,
    width: 128,
    height: 128,
    borderRadius: 16,
    // borderWidth: 1,
    borderColor: gray4,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 8
  }
});