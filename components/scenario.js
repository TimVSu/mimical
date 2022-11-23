// author: Maxim Torgovitski

// import react native
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

// import icons
import { faCircleCheck, faSnowflake } from '@fortawesome/free-solid-svg-icons';

// import components
import ProgressBar from './progress_bar.js';
import Exercise from './exercise.js';
import styles from './styles.js';

const Scenario = ({ navigation, ...props }) => {

  // create empty array
  let array = [];

  // add scenario component (with check mark) to array using for loop
  for (let i = 1; i < 2; i++) {
    array.push(
      <Exercise level={i} icon={faCircleCheck} />
    )
  }

  // add scenario component (without check mark) to array using for loop
  for (let i = 2; i < 8; i++) {
    array.push(
      <Exercise level={i} />
    )
  }

  // return scenario list component
  return (
    <View style={styles.scenario}>
      <Text style={styles.scenario_title}>{props.title}</Text>
      <ProgressBar exercises={props.exercises} progress={props.progress} />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Exercise level={1} icon={props.icon} color={props.color} navigation={navigation} />
        <Exercise level={2} icon={props.icon} color={props.color} navigation={navigation} />
        <Exercise level={3} icon={props.icon} color={props.color} navigation={navigation} />
        <Exercise level={4} icon={props.icon} color={props.color} navigation={navigation} />
        <Exercise level={5} icon={props.icon} color={props.color} navigation={navigation} />
        <Exercise level={6} icon={props.icon} color={props.color} navigation={navigation} />
        <Exercise level={7} icon={props.icon} color={props.color} navigation={navigation} />
        <Exercise level={8} icon={props.icon} color={props.color} navigation={navigation} />
        {/* {array} */}
      </ScrollView>
    </View>
  );
}

export default Scenario;