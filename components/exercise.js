// author: Maxim Torgovitski

// import react native
import { Pressable, Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { startLevel } from './contentManager.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

// import components
import styles from './styles.js';
import { light_primary_color, dark_primary_color } from './styles.js';

// import icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleCheck, faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';

// colors
const gray1 = 'rgb(142, 142, 147)';

// return exercise component
const Exercise = ({ navigation, ...props }) => {

  const [fontSize, setFontSize] = useState(17);
  const [language, setLanguage] = useState("german");

  // retrieve data
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('test');
      const value = JSON.parse(jsonValue);
      if (value !== null) {
        setFontSize(value.fontSize);
        setLanguage(value.language);
      }
    } catch (error) {
      // error retrieving data
    }
  }

  // get data on first render
  useEffect(() => {
    getData();
  }, []);

  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );

  // light/dark mode
  const colorScheme = useColorScheme();
  const containerColor = colorScheme === 'light' ? styles.light_square : styles.dark_square;
  const textColor = colorScheme === 'light' ? styles.light_text : styles.dark_text;
  const iconColor = colorScheme === 'light' ? light_primary_color : dark_primary_color;
  const highlightColor = colorScheme === 'light' ? light_primary_color : dark_primary_color;

  if (props.unlocked) {
    if (props.completed) {
      return (
        // <Pressable onPress={() => { startLevel(props.level, props.scenarioKey), navigation.navigate("Level") }}>
        <TouchableOpacity onPress={() => { startLevel(props.level, props.scenarioKey), navigation.navigate("Level") }}>
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
            <Text style={[{ fontSize: fontSize }, textColor, { textAlign: 'center' }, { marginTop: 8 }]}>{language == "german" ? "Übung" : "Exercise"} {props.level}</Text>
          </View>
        </TouchableOpacity>
        // </Pressable>
      );
    } else {
      return (
        // <Pressable onPress={() => { startLevel(props.level, props.scenarioKey), navigation.navigate("Level") }}>
        <TouchableOpacity onPress={() => { startLevel(props.level, props.scenarioKey), navigation.navigate("Level") }}>
          <View style={{ margin: 16 }}>
            <View style={[styles.square, containerColor, { justifyContent: 'space-between' }, {/*{ borderWidth: 4 }, { borderColor: highlightColor }*/ }]}>
              <Text style={[{ fontSize: 16 }, textColor, { opacity: 0 }]}>{props.tags}</Text>
              <View style={[{ alignItems: 'center' }]}>
                <FontAwesomeIcon style={{ opacity: 0.5 }} icon={props.icon} size={64} color={gray1} />
              </View>
              <View style={[{ alignItems: 'flex-end' }]}>
                <FontAwesomeIcon style={{ opacity: 0 }} icon={faLockOpen} size={16} color={iconColor} />
              </View>
            </View>
            <Text style={[{ fontSize: fontSize }, textColor, {/*{ color: highlightColor }*/ }, { textAlign: 'center' }, { marginTop: 8 }]}>{props.fromHomeScreen ? language == "german" ? "Übung fortsetzen" : "Continue Exercise" : language == "german" ? "Übung" : "Exercise"}  {props.level}</Text>
          </View>
        </TouchableOpacity>
        // </Pressable>
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
          <Text style={[{ fontSize: fontSize }, textColor, { textAlign: 'center' }, { marginTop: 8 }, { opacity: 0.25 }]}>{props.fromHomeScreen ? "Übung fortsetzen" : "Übung " + props.level}</Text>
        </View>
      </Pressable>
    );
  }
}

export default Exercise;