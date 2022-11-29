// author: Maxim Torgovitski

// import react native
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import React from 'react';

// import components
import styles from './styles';

// colors
const blue = 'rgb(0, 122, 255)';
const gray6 = 'rgb(242, 242, 247)';

// return progress bar component
const ProgressBar = ({ exercises, progress }) => {
  const colorScheme = useColorScheme();
  const textColor = colorScheme === 'light' ? styles.light_text : styles.dark_text;
  const barColor = colorScheme === 'light' ? styles.light_bar : styles.dark_bar;
  const progressColor = colorScheme === 'light' ? styles.light_progress : styles.dark_progress;
  return (
    <View style={[{ flexDirection: 'row' }, { alignItems: 'center' }, { marginTop: 8 }, { marginLeft: 16 }]}>
      <Text style={[{ fontSize: 16 }, textColor]}>Fortschritt:</Text>
      <View style={[{ width: 128 }, { height: 8 }, { backgroundColor: gray6 }, { marginLeft: 8 }, { borderRadius: 4 }, barColor]}>
        <View style={[{ width: 32 }, { height: 8 }, { backgroundColor: blue }, { borderTopLeftRadius: 4 }, { borderBottomLeftRadius: 4 }, progressColor]}></View>
      </View>
    </View>
  );
}

export default ProgressBar;