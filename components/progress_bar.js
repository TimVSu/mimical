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
const ProgressBar = (props) => {
  const colorScheme = useColorScheme();
  const barColor = colorScheme === 'light' ? styles.light_bar : styles.dark_bar;
  const progressColor = colorScheme === 'light' ? styles.light_progress : styles.dark_progress;
  const x = 100 / props.exercises;
  const y = x * props.progress * 2;
  return (
    <View style={[{ width: 200 }, { height: 8 }, { borderRadius: 4 }, barColor]}>
      <View style={[{ width: y }, { height: 8 }, { borderRadius: 4 }, progressColor]}></View>
    </View>
  );
}

export default ProgressBar;