// author: Maxim Torgovitski

// import react native
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Scenario from './scenario.js';
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
      <Text style={styles.title}>{props.title}</Text>
      <ProgressBar></ProgressBar>
      <ScrollView horizontal={true}>
        {/* <Scenario category={props.category} level="1" />
        <Scenario category={props.category} level="2" />
        <Scenario category={props.category} level="3" />
        <Scenario category={props.category} level="4" />
        <Scenario category={props.category} level="5" />
        <Scenario category={props.category} level="6" />
        <Scenario category={props.category} level="7" />
        <Scenario category={props.category} level="8" />
        <Scenario category={props.category} level="9" /> */}
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