// author: Maxim Torgovitski

// import react native
import { ScrollView, StyleSheet, Text, useColorScheme, View } from 'react-native';
import React from 'react';
import { getScenario, getScenarioLength } from './contentManager.js';

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

  // create empty array
  let name = props.name;
  let scenarioLength = getScenarioLength(name);
  let scenario = getScenario(name);
  let iterator = [];
  for (let i = 0; i < scenarioLength; i++) {
    iterator.push(i);
  }

  // add exercise component (with check mark) to array using for loop
  /*for (let i = 0; i < props.progress; i++) {
    array.push(
      <Exercise level={i + 1} icon={props.icon} color={props.color} navigation={navigation} tags={"Tags"} unlocked={true} completed={true} />
    )
  }*/

  // add exercise component (without check mark) to array using for loop
  /*for (let i = props.progress; i < props.progress + 1; i++) {
    array.push(
      <Exercise level={i + 1} icon={props.icon} color={props.color} navigation={navigation} tags={"Tags"} unlocked={true} completed={false} />
    )
  }*/

  // add exercise component (with lock) to array using for loop
  /*for (let i = props.progress + 1; i < props.exercises; i++) {
    array.push(
      <Exercise level={i + 1} icon={props.icon} color={props.color} navigation={navigation} tags={"Tags"} unlocked={false} completed={false} />
    )
  }*/

  // return scenario component
  return (
    <View style={[containerColor, { marginTop: 16 }, { marginBottom: 16 }]}>
      <Text style={[styles.title2, textColor, { marginLeft: 16 }]}>{props.title}</Text>
      <View style={[{ flexDirection: 'row' }, { alignItems: 'center' }, { marginTop: 8 }, { marginLeft: 16 }]}>
        <Text style={[styles.label, textColor, { marginRight: 8 }]}>Fortschritt ({props.progress}/{props.exercises}):</Text>
        <ProgressBar exercises={props.exercises} progress={props.progress} />
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {/* <Exercise level={1} icon={props.icon} color={props.color} navigation={navigation} tags={"Tags"} unlocked={true} completed={true} />
        <Exercise level={2} icon={props.icon} color={props.color} navigation={navigation} tags={"Tags"} unlocked={true} completed={false} />
        <Exercise level={3} icon={props.icon} color={props.color} navigation={navigation} tags={"Tags"} unlocked={false} completed={false} />
        <Exercise level={4} icon={props.icon} color={props.color} navigation={navigation} tags={"Tags"} unlocked={false} completed={false} />
        <Exercise level={5} icon={props.icon} color={props.color} navigation={navigation} tags={"Tags"} unlocked={false} completed={false} />
        <Exercise level={6} icon={props.icon} color={props.color} navigation={navigation} tags={"Tags"} unlocked={false} completed={false} />
        <Exercise level={7} icon={props.icon} color={props.color} navigation={navigation} tags={"Tags"} unlocked={false} completed={false} />
        <Exercise level={8} icon={props.icon} color={props.color} navigation={navigation} tags={"Tags"} unlocked={false} completed={false} /> */}
        {iterator.map((iterate) =>
        (
          <Exercise level={iterate + 1} scenario={scenario} icon={props.icon} navigation={navigation}
            tags={"Tags"} unlocked={true} key={iterate} completed={false}></Exercise>))}
      </ScrollView>
    </View>
  );
}

export default Scenario;