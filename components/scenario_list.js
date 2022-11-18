import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Scenario from './scenario.js';
<<<<<<< HEAD

// return scenario list @maxim
const ScenarioList = (props) => {
  return (
    <View style={styles.scenario_list}>
      <Text style={styles.title}>Scenario List {props.category}</Text>
      <ScrollView horizontal={true}>
        <Scenario category={props.category} level="1" />
=======
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import ProgressBar from './progress_bar.js';

// return scenario list @maxim
const ScenarioList = (props) => {
  let array = [];

  for (let i = 1; i < 2; i++) {
    array.push(
      <Scenario category={props.category} level={i} icon={faCircleCheck} />
    )
  }
  
  for (let i = 2; i < 8; i++) {
    array.push(
      <Scenario category={props.category} level={i} />
    )
  }

  return (
    <View style={styles.scenario_list}>
      <Text style={styles.title}>{props.title}</Text>
      <ProgressBar></ProgressBar>
      <ScrollView horizontal={true}>
        {/* <Scenario category={props.category} level="1" />
>>>>>>> menu
        <Scenario category={props.category} level="2" />
        <Scenario category={props.category} level="3" />
        <Scenario category={props.category} level="4" />
        <Scenario category={props.category} level="5" />
        <Scenario category={props.category} level="6" />
        <Scenario category={props.category} level="7" />
        <Scenario category={props.category} level="8" />
<<<<<<< HEAD
        <Scenario category={props.category} level="9" />
        <Scenario category={props.category} level="10" />
=======
        <Scenario category={props.category} level="9" /> */}
        {array}
>>>>>>> menu
      </ScrollView>
    </View>
  );
}

export default ScenarioList;

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