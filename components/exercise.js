// author: Maxim Torgovitski

// import react native
import { Pressable, StyleSheet, Text, useColorScheme, View } from 'react-native';
import React from 'react';
import { startLevel } from './levelContents.js';

// import components
import Square from './square.js';
import styles from './styles.js';
import { light_primary_color, dark_primary_color } from './styles.js';

// import icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleCheck, faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';

// colors
const blue = 'rgb(0, 122, 255)';
const dark_blue = 'rgb(10, 132, 255)';
const gray1 = 'rgb(142, 142, 147)';

// return scenario component
const Exercise = ({ navigation, ...props }) => {
  const colorScheme = useColorScheme();
  const containerColor = colorScheme === 'light' ? styles.light_square : styles.dark_square;
  const textColor = colorScheme === 'light' ? styles.light_text : styles.dark_text;
  const iconColor = colorScheme === 'light' ? 'black' : 'white';
  const highlightColor = colorScheme === 'light' ? light_primary_color : dark_primary_color;
  if (props.unlocked) {
    if (props.completed) {
      return (
        <Pressable onPress={() => { startLevel(props.level, props.scenario), navigation.navigate("Level") }}>
          <View style={{ margin: 16 }}>
            <View style={[styles.square, containerColor, { justifyContent: 'space-between' }]}>
              <Text style={[{ fontSize: 16 }, textColor, { opacity: 0 }]}>{props.tags}</Text>
              <View style={[{ alignItems: 'center' }]}>
                <FontAwesomeIcon style={{ opacity: 0.5 }} icon={props.icon} size={64} color={gray1} />
              </View>
              <View style={[{ alignItems: 'flex-end' }]}>
                <FontAwesomeIcon icon={faCircleCheck} size={16} color={iconColor} />
              </View>
            </View>
            <Text style={[styles.label, textColor, { textAlign: 'center' }, { marginTop: 8 }]}>Übung {props.level}</Text>
          </View>
        </Pressable>
      );
    } else {
      return (
        <Pressable onPress={() => { startLevel(props.level, props.scenario), navigation.navigate("Level") }}>
          <View style={{ margin: 16 }}>
            <View style={[styles.square, containerColor, { justifyContent: 'space-between' }, { borderWidth: 4 }, { borderColor: highlightColor }]}>
              <Text style={[{ fontSize: 16 }, textColor, { opacity: 0 }]}>{props.tags}</Text>
              <View style={[{ alignItems: 'center' }]}>
                <FontAwesomeIcon style={{ opacity: 0.5 }} icon={props.icon} size={64} color={gray1} />
              </View>
              <View style={[{ alignItems: 'flex-end' }]}>
                <FontAwesomeIcon style={{ opacity: 0 }} icon={faLockOpen} size={16} color={iconColor} />
              </View>
            </View>
            <Text style={[styles.label, { color: highlightColor }, { textAlign: 'center' }, { marginTop: 8 }]}>Übung {props.level}</Text>
          </View>
        </Pressable>
      );
    }
  } else {
    return (
      <Pressable>
        <View style={{ margin: 16 }}>
          <View style={[styles.square, containerColor, { justifyContent: 'space-between' }]}>
            <Text style={[{ fontSize: 16 }, textColor, { opacity: 0 }]}>{props.tags}</Text>
            <View style={[{ alignItems: 'center' }]}>
              <FontAwesomeIcon style={{ opacity: 0.5 }} icon={props.icon} size={64} color={gray1} />
            </View>
            <View style={[{ alignItems: 'flex-end' }]}>
              <FontAwesomeIcon icon={faLock} size={16} color={iconColor} />
            </View>
          </View>
          <Text style={[styles.label, textColor, { textAlign: 'center' }, { marginTop: 8 }, { opacity: 0.25 }]}>Übung {props.level}</Text>
        </View>
      </Pressable>
    );
  }
}

export default Exercise;