// author: Maxim Torgovitski

// import react native
import { ScrollView, Text, useColorScheme, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { getScenario, getScenarioLength } from './contentManager.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import components
import ProgressBar from './progress_bar.js';
import Exercise from './exercise.js';
import styles from './styles.js';

const Scenario = ({ navigation, ...props }) => {

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

  const colorScheme = useColorScheme();
  const containerColor = colorScheme === 'light' ? styles.light_container : styles.dark_container;
  const textColor = colorScheme === 'light' ? styles.light_text : styles.dark_text;
  const [completionCounter, setCompletionCounter] = useState(0);

  // create empty array
  let name = props.name;
  let scenarioLength = getScenarioLength(name);
  let scenario = getScenario(name);

  let iterator = [];
  for (let i = 0; i < scenarioLength; i++) {
    iterator.push(i);
  }

  // return scenario component
  return (
    <View style={[containerColor, { marginTop: 16 }, { marginBottom: 16 }]}>
      <Text style={[styles.title2, textColor, { marginLeft: 16 }]}>{props.title}</Text>
      <View style={[{ flexDirection: 'row' }, { alignItems: 'center' }, { marginTop: 8 }, { marginLeft: 16 }]}>
        <Text style={[{ fontSize: fontSize }, textColor, { marginRight: 8 }]}>{language == "german" ? "Fortschritt" : "Progress"} ({props.completions.length}/{scenarioLength}):</Text>
        <ProgressBar exercises={scenarioLength} progress={props.completions.length} />
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {iterator.map((iterate) =>
        (
          <Exercise
            level={iterate + 1}
            icon={props.icon}
            navigation={navigation}
            unlocked={true}
            key={iterate}
            completed={props.completions.includes(getScenario(name)[iterate])}
            scenarioKey={name}
            fromHomeScreen={false}
          >
          </Exercise>))}
      </ScrollView>
    </View>
  );
}

export default Scenario;