// author: Maxim Torgovitski

// import react native
import { useColorScheme, View } from 'react-native';
import React from 'react';

// import components
import styles from './styles';

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