// author: Maxim Torgovitski

// import react native
import { ScrollView, StyleSheet, Text, useColorScheme, View } from 'react-native';
import React, { useState } from 'react';
import { getScenario, getScenarioLength } from './contentManager.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import icons
import { faCircleCheck, faSnowflake } from '@fortawesome/free-solid-svg-icons';

// import components
import ProgressBar from './progress_bar.js';
import Exercise from './exercise.js';
import styles from './styles.js';

const Scenario = ({ navigation, ...props }) => {


  const colorScheme = useColorScheme();
  const containerColor = colorScheme === 'light' ? styles.light_container : styles.dark_container;
  const textColor = colorScheme === 'light' ? styles.light_text : styles.dark_text;
  const [completionCounter, setCompletionCounter] = useState(0);

  // create empty array
  let name = props.name;
  let scenarioLength = getScenarioLength(name);
  let scenario = getScenario(name);


  const completionCallback = () => {
    setCompletionCounter(completionCounter => completionCounter + 1);
  }

  let iterator = [];
  for (let i = 0; i < scenarioLength; i++) {
    iterator.push(i);
  }

  // return scenario component
  return (
    <View style={[containerColor, { marginTop: 16 }, { marginBottom: 16 }]}>
      <Text style={[styles.title2, textColor, { marginLeft: 16 }]}>{props.title}</Text>
      <View style={[{ flexDirection: 'row' }, { alignItems: 'center' }, { marginTop: 8 }, { marginLeft: 16 }]}>
        <Text style={[styles.label, textColor, { marginRight: 8 }]}>Fortschritt ({props.completions.length}/{scenarioLength}):</Text>
        <ProgressBar exercises={scenarioLength} progress={props.completions.length} />
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {iterator.map((iterate) =>
        (
          <Exercise level={iterate + 1}
            scenario={scenario}
            icon={props.icon}
            navigation={navigation}
            tags={"Tags"}
            unlocked={true}
            key={iterate}
            completed={props.completions.includes(iterate + 1)}
            scenarioKey={name}
            incrementCompletions={completionCallback}>
            </Exercise>))}
      </ScrollView>
    </View>
  );
}

export default Scenario;