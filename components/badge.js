// author: Maxim Torgovitski

// import react native
import { Pressable, StyleSheet, Text, useColorScheme, View } from 'react-native';
import React from 'react';

// import components
import ProgressBar from './progress_bar';
import styles from './styles';

// import icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircle, faMedal } from '@fortawesome/free-solid-svg-icons';

// colors
const green = 'rgb(52, 199, 89)';
const blue = 'rgb(0, 122, 255)';

// return badge component
const Badge = (props) => {
  const colorScheme = useColorScheme();
  const containerColor = colorScheme === 'light' ? styles.light_container : styles.dark_container;
  const textColor = colorScheme === 'light' ? styles.light_text : styles.dark_text;
  const iconColor = colorScheme === 'light' ? 'black' : 'white'
  const barColor = colorScheme === 'light' ? styles.light_bar : styles.dark_bar;
  const progressColor = colorScheme === 'light' ? styles.light_progress : styles.dark_progress;
  return (
    <View style={[{ borderBottomWidth: 1 }, containerColor, { padding: 16 }]}>
      <Text style={[{ fontSize: 24 }, textColor]}>Titel</Text>
      <Text style={[{ fontSize: 16 }, textColor]}>Beschreibung</Text>
      <View style={[{ flexDirection: 'row' }, { justifyContent: 'space-between' }, { alignItems: 'center' }]}>
        <Text style={[{ fontSize: 16 }, textColor]}>{props.progress} %</Text>
        <View style={[{ width: 200 }, { height: 8 }, { borderRadius: 4 }, barColor]}>
          <View style={[{ width: props.progress * 2 }, { height: 8 }, { borderRadius: 4 }, progressColor]}></View>
        </View>
        <FontAwesomeIcon style={[{ color: iconColor }, { opacity: 0.5 }]} icon={faMedal} size={32} />
        {/* <ProgressBar></ProgressBar> */}
      </View>
    </View>
  );
}

export default Badge;