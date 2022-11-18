// author: Maxim Torgovitski

// import react native
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

// import icons
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

// import components
import Scenario from './scenario.js';
import ProgressBar from './progress_bar.js';

const ScenarioList = ({ title, exercises, progress }) => {

  // create empty array
  let array = [];

  // add scenario component (with check mark) to array using for loop
  for (let i = 1; i < 2; i++) {
    array.push(
      <Scenario level={i} icon={faCircleCheck} />
    )
  }

  // add scenario component (without check mark) to array using for loop
  for (let i = 2; i < 8; i++) {
    array.push(
      <Scenario level={i} />
    )
  }

  // return scenario list component
  return (
    <View style={styles.scenario_list}>
      <Text style={styles.title}>{title}</Text>
      <ProgressBar exercises={exercises} progress={progress} />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {array}
      </ScrollView>
    </View>
  );
}

export default ScenarioList;

// styles
const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 16
  },
  scenario_list: {
    marginTop: 16,
    marginBottom: 16
  }
});