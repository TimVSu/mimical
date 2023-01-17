// author: Maxim Torgovitski

// import react native
import { Pressable, ScrollView, Text, useColorScheme, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

// import components
import styles from './styles';

// import icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faFaceSmile } from '@fortawesome/free-solid-svg-icons';

// import colors
import { light_primary_color, dark_primary_color, gray5, dark_gray5 } from './styles';

// return filter bar component
const FilterBar = () => {

  // light/dark mode
  const colorScheme = useColorScheme();
  const containerColor = colorScheme === 'light' ? styles.light_container : styles.dark_container;
  const activeFilterColor = colorScheme === 'light' ? light_primary_color : dark_primary_color;
  const inactiveFilterColor = colorScheme === 'light' ? gray5 : dark_gray5;
  const textColor = colorScheme === 'light' ? 'black' : 'white';

  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);
  const [isEnabled4, setIsEnabled4] = useState(false);

  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);
  const toggleSwitch4 = () => setIsEnabled4(previousState => !previousState);

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

  // return filter component
  const Filter = (props) => {
    return (
      <View style={[{ backgroundColor: props.variable ? activeFilterColor : inactiveFilterColor }, { borderRadius: 16 }, { padding: 12 }, { margin: 16 }]}>
        <Pressable style={[{ flexDirection: 'row' }, { alignItems: 'center' }]} onPress={props.function}>
          {/* <FontAwesomeIcon style={{ marginRight: 8 }} icon={props.icon} color='white' /> */}
          <Text style={[{ fontSize: 12 }, { fontWeight: 'bold' }, { color: props.variable ? 'white' : textColor }]}>{props.label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={[styles.filter_bar, containerColor]}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Filter label={language == "german" ? "Obere Gesichtshälfte" : "Upper Face Half"} variable={isEnabled1} function={toggleSwitch1} />
        <Filter label={language == "german" ? "Untere Gesichtshälfte" : "Lower Face Half"} variable={isEnabled2} function={toggleSwitch2} />
        <Filter label={language == "german" ? "Kurze Szenarien" : "Short Scenarios"} variable={isEnabled3} function={toggleSwitch3} />
        <Filter label={language == "german" ? "Lange Szenarien" : "Long Scenarios"} variable={isEnabled4} function={toggleSwitch4} />
      </ScrollView>
    </View>
  );

}

export default FilterBar;