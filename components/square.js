// author: Maxim Torgovitski

// import react native
import { StyleSheet, View } from 'react-native';
import React from 'react';

// import components
import styles from './styles';

// import icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

// colors
const gray4 = 'rgb(209, 209, 214)';
const gray6 = 'rgb(242, 242, 247)';

// return square component
const Square = (props) => {
  return (
    <View style={styles.square}>
      {/* <FontAwesomeIcon icon={props.icon} /> */}
    </View>
  );
}

export default Square;