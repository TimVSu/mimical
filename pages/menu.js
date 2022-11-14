import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, View } from 'react-native';
import React from 'react';
import NavBar from '../components/nav_bar.js';
import TabBar from '../components/tab_bar.js';
import ScenarioList from '../components/scenario_list.js';

const green = 'rgb(52, 199, 89)';
const blue = 'rgb(0, 122, 255)';
const gray4 = 'rgb(209, 209, 214)';
const gray5 = 'rgb(229, 229, 234)';
const gray6 = 'rgb(242, 242, 247)';

// return home page @maxim
const HomePage = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavBar></NavBar>
      <ScrollView>
        <View style={styles.container}>
          <ScenarioList category="A" />
          <ScenarioList category="B" />
          <ScenarioList category="C" />
          <ScenarioList category="D" />
          <StatusBar style="auto" />
        </View>
      </ScrollView>
      <TabBar home={blue} stats={gray4} settings={gray4} />
    </View>
  );
}

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 64
  }
});