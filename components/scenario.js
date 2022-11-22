// author: Maxim Torgovitski

// import react native
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

// import icons
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

// import components
import ProgressBar from './progress_bar.js';
import Exercise from './exercise.js';

const Scenario = ({ title, exercises, progress }) => {

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
      <Text style={styles.title}>{title}</Text>
      <ProgressBar exercises={exercises} progress={progress} />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Exercise level={1} />
        <Exercise level={2} />
        <Exercise level={3} />
        <Exercise level={4} />
        <Exercise level={5} />
        <Exercise level={6} />
        <Exercise level={7} />
        <Exercise level={8} />
        {/* {array} */}
      </ScrollView>
    </View>
  );
}

export default Scenario;

// styles
const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 16
  },
  scenario: {
    marginTop: 16,
    marginBottom: 16
  }
});